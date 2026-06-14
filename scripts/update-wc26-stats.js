#!/usr/bin/env node
/**
 * Scrapes WC 2026 player stats from Wikipedia group stage articles and
 * individual match pages. No API key required.
 *
 * Per group page:  1 Wikipedia API call
 * Per new match:   1 call for the individual match article (lineups)
 * Processed match IDs are persisted in wc26-stats.js so each match is
 * only fetched once on daily runs.
 *
 * Stats: goals, assists (from group pages) + apps (from match lineups).
 */

const https = require('https');
const fs    = require('fs');
const path  = require('path');
const vm    = require('vm');

const ROOT      = path.resolve(__dirname, '..');
const STATS_OUT = path.join(ROOT, 'wc26-stats.js');
const DELAY_MS  = 1200;   // polite delay between Wikipedia requests
const YEAR      = '2026';
const GROUPS    = 'ABCDEFGHIJKL'.split(''); // 12 groups for 48-team WC

// ── Load SQUADS ───────────────────────────────────────────────────────────────

const squadsCode = fs.readFileSync(path.join(ROOT, 'squads.js'), 'utf8')
  .replace(/\b(?:const|let|var)\s+SQUADS\s*=/, 'SQUADS =');
const sandboxSquads = { SQUADS: undefined };
vm.createContext(sandboxSquads);
vm.runInContext(squadsCode, sandboxSquads);
const SQUADS = sandboxSquads.SQUADS;
if (!SQUADS || !Object.keys(SQUADS).length) {
  console.error('Failed to load SQUADS from squads.js');
  process.exit(1);
}

// ── Load existing stats & processed match IDs ─────────────────────────────────

let existingStats     = {};
let existingProcessed = [];
if (fs.existsSync(STATS_OUT)) {
  try {
    const code = fs.readFileSync(STATS_OUT, 'utf8')
      .replace(/\b(?:const|let|var)\s+WC26_STATS\s*=/,     'WC26_STATS =')
      .replace(/\b(?:const|let|var)\s+WC26_PROCESSED\s*=/, 'WC26_PROCESSED =');
    const sb = { WC26_STATS: {}, WC26_PROCESSED: [] };
    vm.createContext(sb);
    vm.runInContext(code, sb);
    existingStats     = sb.WC26_STATS    || {};
    existingProcessed = sb.WC26_PROCESSED || [];
    console.log(`Resumed: ${Object.keys(existingStats).length} players, ${existingProcessed.length} processed matches`);
  } catch (e) {
    console.warn('Could not parse existing stats, starting fresh:', e.message);
  }
}

// ── Name normalisation & matching ─────────────────────────────────────────────

function norm(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const nameMap = new Map();
Object.values(SQUADS).forEach(team => {
  if (!team.players) return;
  const raw   = team.players;
  const first = Object.values(raw)[0];
  const flat  = Array.isArray(first) ? Object.values(raw).flat() : Object.values(raw);
  flat.forEach(p => {
    const full = p.fullName || p.name;
    if (full) nameMap.set(norm(full), full);
  });
});
console.log(`Loaded ${nameMap.size} players from SQUADS.`);

function findPlayer(wikiName) {
  if (!wikiName) return null;
  const n = norm(wikiName);
  if (nameMap.has(n)) return nameMap.get(n);
  const last = n.split(' ').pop();
  const hits = [...nameMap.entries()].filter(([k]) => k === last || k.endsWith(' ' + last));
  return hits.length === 1 ? hits[0][1] : null;
}

// ── Wikipedia API ─────────────────────────────────────────────────────────────

function wikiGet(title) {
  return new Promise((resolve, reject) => {
    const qs = new URLSearchParams({
      action:        'parse',
      page:          title,
      prop:          'wikitext',
      format:        'json',
      formatversion: '2',
    });
    https.get(
      {
        hostname: 'en.wikipedia.org',
        path:     `/w/api.php?${qs}`,
        headers:  { 'User-Agent': 'WorldCupSquadsBot/1.0 (https://github.com/chrisbaldock001/WorldCupSquads)' },
      },
      res => {
        let body = '';
        res.on('data', d => (body += d));
        res.on('end', () => {
          try {
            const data = JSON.parse(body);
            if (data.error) {
              if (data.error.code === 'missingtitle') return resolve(null);
              return reject(new Error(data.error.info || data.error.code));
            }
            resolve(data.parse?.wikitext ?? null);
          } catch (e) { reject(new Error('JSON: ' + e.message)); }
        });
      }
    ).on('error', reject);
  });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

// ── Wikitext parsing ──────────────────────────────────────────────────────────

// Extract the display-name portion from a wiki link like [[Team|Display]] or [[Team]]
function extractTeamName(raw) {
  const m = raw.match(/\[\[[^\]|]+\|([^\]]+)\]\]/);
  if (m) return m[1].trim();
  const m2 = raw.match(/\[\[([^\]|]+)\]\]/);
  if (m2) return m2[1].replace(/ national football team$/, '').trim();
  return raw.replace(/\{\{[^}]+\}\}/g, '').replace(/\[|\]/g, '').trim();
}

// Pull a named parameter from a template block (handles multi-line values)
function getParam(block, name) {
  const lines = block.split('\n');
  let capturing = false;
  const acc = [];
  for (const line of lines) {
    if (capturing) {
      if (/^\s*[\|]/.test(line) || /^\s*\}\}/.test(line)) break;
      acc.push(line);
    } else {
      const m = line.match(new RegExp(`^\\|\\s*${name}\\s*=(.*)`, 'i'));
      if (m) { capturing = true; acc.push(m[1]); }
    }
  }
  return acc.join('\n').trim();
}

// Find all {{football box ...}} or {{fb match ...}} template blocks
function findMatchBlocks(wikitext) {
  const blocks = [];
  let i = 0;
  while (i < wikitext.length) {
    const start = wikitext.indexOf('{{', i);
    if (start === -1) break;
    const peek = wikitext.slice(start + 2, start + 60).trimStart();
    if (!/^(?:football box|fb match)\b/i.test(peek)) { i = start + 2; continue; }
    let depth = 2, j = start + 2;
    while (j < wikitext.length && depth > 0) {
      if (wikitext[j] === '{' && wikitext[j+1] === '{') { depth += 2; j += 2; }
      else if (wikitext[j] === '}' && wikitext[j+1] === '}') { depth -= 2; j += 2; }
      else j++;
    }
    blocks.push(wikitext.slice(start, j));
    i = j;
  }
  return blocks;
}

// Parse goal/assist entries from a goals1 or goals2 parameter value.
// Returns [{wikiName, type: 'goal'|'assist'}]
function parseGoalField(text) {
  if (!text) return [];
  const results = [];
  const entries = text.replace(/<br\s*\/?>/gi, '\n').split('\n');
  for (let entry of entries) {
    entry = entry.trim();
    if (!entry) continue;
    if (/\{\{goal\|[^}]*\bog\b/i.test(entry)) continue; // own goal — skip
    const links = [...entry.matchAll(/\[\[([^\]|#:]+?)(?:\|[^\]]+)?\]\]/g)].map(m => m[1].trim());
    const goalCount = (entry.match(/\{\{goal/gi) || []).length;
    const hasAssist = /\{\{assist/i.test(entry);
    if (goalCount > 0 && links[0]) {
      for (let k = 0; k < goalCount; k++) results.push({ wikiName: links[0], type: 'goal' });
      // Assister appears as 2nd wiki link after the last {{goal}} instance
      const afterLastGoal = entry.replace(/^[\s\S]*\{\{goal[^}]*\}\}/, '');
      const assistLink = afterLastGoal.match(/\[\[([^\]|#:]+?)(?:\|[^\]]+)?\]\]/);
      if (assistLink && assistLink[1].trim() !== links[0]) {
        results.push({ wikiName: assistLink[1].trim(), type: 'assist' });
      }
    }
    if (hasAssist && links[0]) results.push({ wikiName: links[0], type: 'assist' });
  }
  return results;
}

// Parse player names from lineup templates on individual match pages.
// Handles: {{fc player|POS|NUM|[[Name|Display]]}} and {{fs player|NUM|POS|[[Name]]}}
function parseLineupPlayers(wikitext) {
  const names = new Set();
  const patterns = [
    /\{\{(?:fc|fs|fb) player\|[^|]+\|[^|]+\|\[\[([^\]|#:]+)/gi,
    /\{\{football player\|[^|]+\|[^|]+\|\[\[([^\]|#:]+)/gi,
  ];
  for (const re of patterns) {
    for (const m of wikitext.matchAll(re)) names.add(m[1].trim());
  }
  return [...names];
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const stats        = { ...existingStats };
  const processedSet = new Set(existingProcessed);
  const unmatched    = new Set();
  let   newMatches   = 0;

  function bump(wikiName, type) {
    const canonical = findPlayer(wikiName);
    if (!canonical) { unmatched.add(wikiName); return; }
    if (!stats[canonical]) stats[canonical] = { apps: 0, goals: 0, assists: 0 };
    if (type === 'goal')   stats[canonical].goals++;
    if (type === 'assist') stats[canonical].assists++;
    if (type === 'app')    stats[canonical].apps++;
  }

  for (const group of GROUPS) {
    const pageTitle = `${YEAR} FIFA World Cup Group ${group}`;
    await sleep(DELAY_MS);

    let wikitext;
    try {
      wikitext = await wikiGet(pageTitle);
    } catch (e) {
      console.warn(`Group ${group}: ${e.message}`);
      continue;
    }
    if (!wikitext) { console.log(`Group ${group}: page not found yet`); continue; }

    const blocks = findMatchBlocks(wikitext);
    if (blocks.length === 0) { console.log(`Group ${group}: no match blocks found`); continue; }
    console.log(`\nGroup ${group}: ${blocks.length} block(s) found`);

    // Diagnostic on first group's first block
    if (group === GROUPS[0] && blocks[0]) {
      console.log('  [diag] block start:', blocks[0].slice(0, 300).replace(/\n/g, ' ↵ '));
      console.log('  [diag] goals1:', getParam(blocks[0], 'goals1').slice(0, 150));
      console.log('  [diag] report:', getParam(blocks[0], 'report').slice(0, 100));
    }

    for (let bi = 0; bi < blocks.length; bi++) {
      const block = blocks[bi];

      // Build match ID from date + teams (enough to uniquely identify)
      const dateRaw  = getParam(block, 'date');
      const team1Raw = getParam(block, 'team1');
      const team2Raw = getParam(block, 'team2');
      const dateKey  = dateRaw.replace(/[^0-9]/g, '').slice(0, 8);
      const t1key    = extractTeamName(team1Raw).replace(/[^a-z]/gi, '').toLowerCase().slice(0, 6);
      const t2key    = extractTeamName(team2Raw).replace(/[^a-z]/gi, '').toLowerCase().slice(0, 6);
      const matchId  = `${YEAR}-${group}-${dateKey}-${t1key}-${t2key}`;

      if (processedSet.has(matchId)) {
        console.log(`  [${bi+1}] Already done: ${matchId}`);
        continue;
      }

      // Skip matches with no score (not yet played)
      const scoreRaw = getParam(block, 'score');
      if (!scoreRaw || !/\d/.test(scoreRaw)) {
        console.log(`  [${bi+1}] No score yet — skipping`);
        continue;
      }

      // Goals & assists
      const g1 = parseGoalField(getParam(block, 'goals1'));
      const g2 = parseGoalField(getParam(block, 'goals2'));
      let goalCount = 0, assistCount = 0;
      for (const { wikiName, type } of [...g1, ...g2]) {
        bump(wikiName, type);
        if (type === 'goal') goalCount++;
        else assistCount++;
      }

      // Individual match page for lineup/appearances
      const reportRaw   = getParam(block, 'report');
      const reportTitle = reportRaw.match(/\[\[([^\]|#]+)/)?.[1]?.trim();
      let appCount = 0;
      if (reportTitle) {
        await sleep(DELAY_MS);
        try {
          const matchText = await wikiGet(reportTitle);
          if (matchText) {
            const players = parseLineupPlayers(matchText);
            const seen = new Set();
            for (const wikiName of players) {
              if (!seen.has(wikiName)) { seen.add(wikiName); bump(wikiName, 'app'); appCount++; }
            }
            if (players.length === 0) {
              // Diagnostics for the first unresolved lineup page
              console.log(`    [diag] No lineups found on "${reportTitle}". Page snippet:`);
              console.log('    ', matchText.slice(0, 400).replace(/\n/g, ' ↵ '));
            }
          } else {
            console.log(`    Lineup page not found: "${reportTitle}"`);
          }
        } catch (e) {
          console.warn(`    Lineup error: ${e.message}`);
        }
      }

      console.log(`  [${bi+1}] ${matchId} — Goals: ${goalCount}  Assists: ${assistCount}  Apps: ${appCount}`);
      processedSet.add(matchId);
      newMatches++;
    }
  }

  if (unmatched.size) {
    const top = [...unmatched].slice(0, 30).join(', ');
    console.log(`\nUnmatched names (${unmatched.size} total): ${top}`);
  }

  writeStats(stats, [...processedSet], newMatches, new Date().toISOString());
}

function writeStats(stats, processedArr, newCount, ts) {
  const playerCount = Object.keys(stats).length;
  const lines = [
    `// Auto-generated by scripts/update-wc26-stats.js — do not edit manually`,
    `// Last updated: ${ts}`,
    `// Processed: ${processedArr.length} matches (${newCount} new this run) · Players: ${playerCount}`,
    `const WC26_PROCESSED = ${JSON.stringify(processedArr)};`,
    `const WC26_STATS = ${JSON.stringify(stats, null, 2)};`,
    '',
  ];
  fs.writeFileSync(STATS_OUT, lines.join('\n'), 'utf8');
  console.log(`\nWrote ${playerCount} players, ${processedArr.length} matches → ${STATS_OUT}`);
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
