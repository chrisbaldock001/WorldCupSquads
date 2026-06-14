#!/usr/bin/env node
/**
 * Scrapes WC 2026 player stats from Wikipedia group stage articles and
 * individual match pages. No API key required.
 *
 * Per run:
 *   12 group page fetches  → goals + assists (recomputed fresh each run)
 *   N match article fetches → lineups / app counts (incremental — each match fetched once)
 *
 * Processed match article titles are persisted in WC26_PROCESSED so the
 * lineup fetch only happens once per match.
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
    // Index by Wikipedia article name so "Vinícius Júnior" matches via wiki field
    if (p.wiki) nameMap.set(norm(p.wiki.replace(/_/g, ' ')), full);
  });
});
console.log(`Loaded ${nameMap.size} players from SQUADS.`);

function findPlayer(wikiName) {
  if (!wikiName) return null;
  // Strip Wikipedia disambiguation suffix: "Foo (footballer)" → "Foo"
  const cleaned = wikiName.replace(/\s*\([^)]+\)\s*$/, '').trim();
  const n = norm(cleaned);
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

// Pull a named parameter from a template block (handles multi-line values)
function getParam(block, name) {
  const lines = block.split('\n');
  let capturing = false;
  const acc = [];
  for (const line of lines) {
    if (capturing) {
      if (/^\s*[|]/.test(line) || /^\s*\}\}/.test(line)) break;
      acc.push(line);
    } else {
      const m = line.match(new RegExp(`^\\|\\s*${name}\\s*=(.*)`, 'i'));
      if (m) { capturing = true; acc.push(m[1]); }
    }
  }
  return acc.join('\n').trim();
}

/**
 * Find all football match template blocks in wikitext.
 * Handles:
 *   {{football box ...}}
 *   {{fb match ...}}
 *   {{#invoke:Football box|main ...}}  ← WC 2026 format
 */
function findMatchBlocks(wikitext) {
  const blocks = [];
  let i = 0;
  while (i < wikitext.length) {
    const start = wikitext.indexOf('{{', i);
    if (start === -1) break;
    const peek = wikitext.slice(start + 2, start + 80).trimStart();
    if (!/^(?:football box|fb match|#invoke:\s*football box)/i.test(peek)) {
      i = start + 2;
      continue;
    }
    let depth = 2, j = start + 2;
    while (j < wikitext.length && depth > 0) {
      if (wikitext[j] === '{' && wikitext[j + 1] === '{')       { depth += 2; j += 2; }
      else if (wikitext[j] === '}' && wikitext[j + 1] === '}')  { depth -= 2; j += 2; }
      else j++;
    }
    blocks.push(wikitext.slice(start, j));
    i = j;
  }
  return blocks;
}

// Parse goal/assist entries from a goals1 or goals2 parameter value.
// Returns [{wikiName, type: 'goal'|'assist'}]
// Handles two formats used by Wikipedia:
//   Format A (older articles): {{goal|45'}} [[Player]] or [[Player]] {{goal|45'}}
//   Format B (WC 2026 group pages): *[[Player|Display]] 45'
function parseGoalField(text) {
  if (!text) return [];
  const results = [];
  const entries = text.replace(/<br\s*\/?>/gi, '\n').split('\n');
  for (let entry of entries) {
    entry = entry.trim();
    if (!entry) continue;

    const isOwnGoal = /\{\{goal\|[^}]*\bog\b/i.test(entry) || /\bO\.?G\.?\b/i.test(entry);
    if (isOwnGoal) continue;

    const links = [...entry.matchAll(/\[\[([^\]|#:]+?)(?:\|[^\]]+)?\]\]/g)].map(m => m[1].trim());
    const goalCount = (entry.match(/\{\{goal/gi) || []).length;

    if (goalCount > 0 && links[0]) {
      // Format A: {{goal}} template present
      for (let k = 0; k < goalCount; k++) results.push({ wikiName: links[0], type: 'goal' });
      const afterLastGoal = entry.replace(/^[\s\S]*\{\{goal[^}]*\}\}/, '');
      const assistLink = afterLastGoal.match(/\[\[([^\]|#:]+?)(?:\|[^\]]+)?\]\]/);
      if (assistLink && assistLink[1].trim() !== links[0]) {
        results.push({ wikiName: assistLink[1].trim(), type: 'assist' });
      }
    } else if (entry.startsWith('*') && links[0] && /\d+'/.test(entry)) {
      // Format B: *[[Player|Display]] 45'
      results.push({ wikiName: links[0], type: 'goal' });
      // Assist may appear as: ([[Assister|Display]])
      const assistParen = entry.match(/\((?:[^)]*?\[\[([^\]|#:]+?)(?:\|[^\]]+)?\]\][^)]*?)\)/);
      if (assistParen && assistParen[1].trim() !== links[0]) {
        results.push({ wikiName: assistParen[1].trim(), type: 'assist' });
      }
    }

    if (/\{\{assist/i.test(entry) && links[0] && goalCount === 0) {
      results.push({ wikiName: links[0], type: 'assist' });
    }
  }
  return results;
}

// Parse player names from lineup templates on individual match pages.
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
  const unmatched    = new Set();
  const matchTitles  = new Set();

  // Goals and assists are recomputed fresh each run (group pages only need 12 requests,
  // and this avoids double-counting if the script reruns or logic changes).
  const goalStats = {};

  function bumpGoal(wikiName, type) {
    const canon = findPlayer(wikiName);
    if (!canon) { unmatched.add(wikiName); return; }
    if (!goalStats[canon]) goalStats[canon] = { goals: 0, assists: 0 };
    if (type === 'goal')   goalStats[canon].goals++;
    if (type === 'assist') goalStats[canon].assists++;
  }

  // ── Step 1: Group pages — goals/assists + collect match article titles ────────
  let totalGoals = 0, totalAssists = 0, totalBlocks = 0;

  for (const group of GROUPS) {
    const pageTitle = `${YEAR} FIFA World Cup Group ${group}`;
    await sleep(DELAY_MS);
    let wikitext;
    try { wikitext = await wikiGet(pageTitle); }
    catch (e) { console.warn(`  Group ${group} error: ${e.message}`); continue; }
    if (!wikitext) { console.log(`  Group ${group}: page not found`); continue; }

    const blocks = findMatchBlocks(wikitext);
    totalBlocks += blocks.length;
    let groupGoals = 0;

    for (const block of blocks) {
      const score = getParam(block, 'score');
      if (!score || !/\d/.test(score)) continue; // match not yet played

      for (const { wikiName, type } of [
        ...parseGoalField(getParam(block, 'goals1')),
        ...parseGoalField(getParam(block, 'goals2')),
      ]) {
        bumpGoal(wikiName, type);
        if (type === 'goal')   { totalGoals++;   groupGoals++; }
        if (type === 'assist')   totalAssists++;
      }

      // Collect individual match article link for lineup data
      const reportRaw = getParam(block, 'report');
      const reportTitle = reportRaw.match(/\[\[([^\]|#]+)/)?.[1]?.trim();
      if (reportTitle) matchTitles.add(reportTitle);
    }

    // Fallback: wikilinks that look like match articles (use RegExp, not regex literal)
    const linkRe = new RegExp(
      `\\[\\[([^\\]|#]+\\sv\\s[^\\]|#]+\\(${YEAR}[^\\]]*)`,
      'gi'
    );
    for (const m of wikitext.matchAll(linkRe)) matchTitles.add(m[1].trim());

    console.log(`  Group ${group}: ${blocks.length} blocks, ${groupGoals} goals`);

    // Extended diagnostics on first group
    if (group === 'A') {
      if (blocks.length > 0) {
        console.log(`  [diag] First block (250 chars): ${blocks[0].slice(0, 250).replace(/\n/g, ' ↵ ')}`);
        console.log(`  [diag] goals1: ${getParam(blocks[0], 'goals1').slice(0, 150)}`);
        console.log(`  [diag] report: ${getParam(blocks[0], 'report').slice(0, 100)}`);
      } else {
        // Show what templates ARE present so we can adjust the regex if needed
        const tpls = [...wikitext.matchAll(/\{\{([^\n|{}<>]{1,60})/g)]
          .map(m => m[1].trim())
          .filter(n => /match|result|football|fb |score|invoke/i.test(n));
        console.log(`  [diag] Group A templates (no blocks found):`, [...new Set(tpls)].slice(0, 10).join(', '));
        console.log(`  [diag] Wikitext snippet (chars 0-400): ${wikitext.slice(0, 400).replace(/\n/g, ' ↵ ')}`);
      }
    }
  }

  console.log(`\nGroup pages: ${totalBlocks} blocks, ${totalGoals} goals, ${totalAssists} assists`);
  console.log(`Match articles to check for lineups: ${matchTitles.size}`);

  // ── Step 2: Individual match articles — lineups / app counts (incremental) ───
  // Preserve existing app counts; only fetch articles not yet processed.
  const appStats = {};
  for (const [name, data] of Object.entries(existingStats)) {
    appStats[name] = { apps: data.apps || 0 };
  }

  const processedSet = new Set(existingProcessed);
  let newMatches = 0;
  const titleArr = [...matchTitles];

  for (let idx = 0; idx < titleArr.length; idx++) {
    const title = titleArr[idx];
    if (processedSet.has(title)) continue;

    await sleep(DELAY_MS);
    let wikitext;
    try { wikitext = await wikiGet(title); }
    catch (e) { console.warn(`  Fetch error for "${title}": ${e.message}`); continue; }
    if (!wikitext) { console.log(`  Page not found: "${title}"`); continue; }

    const players = parseLineupPlayers(wikitext);
    const seen = new Set();
    let appCount = 0;
    for (const wikiName of players) {
      if (seen.has(wikiName)) continue;
      seen.add(wikiName);
      const canon = findPlayer(wikiName);
      if (!canon) continue;
      if (!appStats[canon]) appStats[canon] = { apps: 0 };
      appStats[canon].apps++;
      appCount++;
    }
    console.log(`  [${idx + 1}/${titleArr.length}] "${title}" — ${appCount} lineup players`);
    processedSet.add(title);
    newMatches++;
  }

  // ── Merge goals + apps into final stats ──────────────────────────────────────
  const finalStats = {};
  const allNames = new Set([...Object.keys(goalStats), ...Object.keys(appStats)]);
  for (const name of allNames) {
    finalStats[name] = {
      apps:    appStats[name]?.apps    || 0,
      goals:   goalStats[name]?.goals  || 0,
      assists: goalStats[name]?.assists || 0,
    };
  }

  if (unmatched.size) {
    console.log(`\nUnmatched Wikipedia names (${unmatched.size}): ${[...unmatched].slice(0, 30).join(', ')}`);
  }

  writeStats(finalStats, [...processedSet], newMatches, new Date().toISOString());
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
