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
const MAIN_PAGE = `${YEAR} FIFA World Cup`;

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

  // ── Step 1: collect match article titles ────────────────────────────────────
  // Strategy A: main WC article links to all individual match pages.
  // Strategy B: group pages (tried first — may use {{football box}} even if intro doesn't).

  const matchTitles = new Set(); // Wikipedia article titles for individual matches

  // Strategy A — main article
  console.log(`\nFetching main page: ${MAIN_PAGE}`);
  await sleep(DELAY_MS);
  try {
    const mainText = await wikiGet(MAIN_PAGE);
    if (mainText) {
      // Extract links that look like individual match articles: "Foo v Bar (2026 FIFA World Cup)"
      const linkRe = /\[\[([^\]|#]+\sv\s[^\]|#]+\(${YEAR} FIFA World Cup\)[^\]]*)/gi;
      for (const m of mainText.matchAll(linkRe)) matchTitles.add(m[1].trim());

      // Also pick up match blocks embedded directly in the main article
      const mainBlocks = findMatchBlocks(mainText);
      console.log(`  Main article: ${matchTitles.size} match links, ${mainBlocks.length} embedded match blocks`);
      if (mainBlocks.length > 0) {
        console.log('  [diag] First embedded block (300 chars):', mainBlocks[0].slice(0, 300).replace(/\n/g, ' ↵ '));
      }
      if (matchTitles.size > 0) {
        console.log('  [diag] Sample match links:', [...matchTitles].slice(0, 3).join(' | '));
      }
      // If no links found, dump a snippet to see what's there
      if (matchTitles.size === 0 && mainBlocks.length === 0) {
        console.log('  [diag] No match links or blocks. Snippet (chars 2000-3000):');
        console.log('  ', mainText.slice(2000, 3000).replace(/\n/g, ' ↵ '));
      }
    } else {
      console.log('  Main page not found!');
    }
  } catch (e) {
    console.warn(`  Main page error: ${e.message}`);
  }

  // Strategy B — group pages (find match blocks OR extract report/match links)
  for (const group of GROUPS) {
    const pageTitle = `${YEAR} FIFA World Cup Group ${group}`;
    await sleep(DELAY_MS);
    let wikitext;
    try { wikitext = await wikiGet(pageTitle); } catch (e) { continue; }
    if (!wikitext) continue;

    // Find embedded {{football box}} blocks
    const blocks = findMatchBlocks(wikitext);
    for (const block of blocks) {
      const reportRaw = getParam(block, 'report');
      const t = reportRaw.match(/\[\[([^\]|#]+)/)?.[1]?.trim();
      if (t) matchTitles.add(t);
    }

    // Also search for any wikilinks matching the match-article pattern
    const linkRe = /\[\[([^\]|#]+\sv\s[^\]|#]+\(${YEAR} FIFA World Cup\)[^\]]*)/gi;
    for (const m of wikitext.matchAll(linkRe)) matchTitles.add(m[1].trim());

    // Log template names on first group that has content beyond the intro
    if (group === GROUPS[0]) {
      const templates = [...wikitext.matchAll(/\{\{([^\n|{}<>]{1,50})/g)]
        .map(m => m[1].trim()).filter(n => /match|result|football|fb |score/i.test(n));
      if (templates.length) console.log(`  Group ${group} match-related templates:`, [...new Set(templates)].slice(0, 8).join(', '));
    }
  }

  console.log(`\nTotal individual match articles to process: ${matchTitles.size}`);

  // ── Step 2: process each match article ──────────────────────────────────────
  const titleArr = [...matchTitles];
  let first = true;
  for (let i = 0; i < titleArr.length; i++) {
    const title = titleArr[i];
    if (processedSet.has(title)) { console.log(`  [${i+1}/${titleArr.length}] Already done: ${title}`); continue; }

    await sleep(DELAY_MS);
    let wikitext;
    try { wikitext = await wikiGet(title); } catch (e) { console.warn(`  Fetch error for "${title}": ${e.message}`); continue; }
    if (!wikitext) { console.log(`  Page not found: "${title}"`); continue; }

    const blocks = findMatchBlocks(wikitext);
    if (blocks.length === 0) {
      if (first) {
        console.log(`  [diag] No blocks on "${title}". Snippet (0-600):`);
        console.log('  ', wikitext.slice(0, 600).replace(/\n/g, ' ↵ '));
        first = false;
      }
      console.log(`  [${i+1}] No match block on "${title}" — skipping`);
      continue;
    }

    const block = blocks[0]; // match article has one block at the top
    if (first) {
      console.log(`  [diag] Block on "${title}" (300 chars):`, block.slice(0, 300).replace(/\n/g, ' ↵ '));
      console.log('  [diag] goals1:', getParam(block, 'goals1').slice(0, 200));
      first = false;
    }

    // Skip if no score yet
    const score = getParam(block, 'score');
    if (!score || !/\d/.test(score)) { console.log(`  [${i+1}] No score — skipping`); continue; }

    // Goals & assists
    const g1 = parseGoalField(getParam(block, 'goals1'));
    const g2 = parseGoalField(getParam(block, 'goals2'));
    let goalCount = 0, assistCount = 0;
    for (const { wikiName, type } of [...g1, ...g2]) {
      bump(wikiName, type);
      if (type === 'goal') goalCount++; else assistCount++;
    }

    // Lineups
    const players = parseLineupPlayers(wikitext);
    const seen = new Set();
    let appCount = 0;
    for (const wikiName of players) {
      if (!seen.has(wikiName)) { seen.add(wikiName); bump(wikiName, 'app'); appCount++; }
    }

    console.log(`  [${i+1}] "${title}" — Goals: ${goalCount}  Assists: ${assistCount}  Apps: ${appCount}`);
    processedSet.add(title);
    newMatches++;
  }

  if (unmatched.size) {
    console.log(`\nUnmatched names (${unmatched.size}): ${[...unmatched].slice(0, 30).join(', ')}`);
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
