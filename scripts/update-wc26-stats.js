#!/usr/bin/env node
/**
 * Fetches completed World Cup 2026 match data from football-data.org and
 * writes aggregated player stats to wc26-stats.js.
 *
 * Env: FOOTBALL_DATA_API_KEY
 * Free tier: 10 req/min — script sleeps 6.5s between match-detail requests.
 *
 * Stats produced: apps, goals, assists (per player, matched to SQUADS data).
 * Tackles, interceptions, saves require a premium API — not available on free tier.
 */

const https = require('https');
const fs    = require('fs');
const path  = require('path');
const vm    = require('vm');

const API_KEY   = process.env.FOOTBALL_DATA_API_KEY;
const ROOT      = path.resolve(__dirname, '..');
const STATS_OUT = path.join(ROOT, 'wc26-stats.js');
const COMP      = 'WC';
const DELAY_MS  = 6500; // keep under 10 req/min

if (!API_KEY) {
  console.error('Error: FOOTBALL_DATA_API_KEY environment variable not set.');
  process.exit(1);
}

// ── Load SQUADS via vm so we don't need module.exports ────────────────────────

// Strip `const`/`let`/`var` from the SQUADS declaration so the vm context
// (which only exposes `var`-style globals, not block-scoped bindings) can
// pick it up via the sandbox object.
const squadsCode = fs.readFileSync(path.join(ROOT, 'squads.js'), 'utf8')
  .replace(/\b(?:const|let|var)\s+SQUADS\s*=/, 'SQUADS =');
const sandbox = { SQUADS: undefined };
vm.createContext(sandbox);
vm.runInContext(squadsCode, sandbox);
const SQUADS = sandbox.SQUADS;

if (!SQUADS || !Object.keys(SQUADS).length) {
  console.error('Failed to load SQUADS from squads.js');
  process.exit(1);
}

// ── Normalised name lookup: norm(fullName) → fullName ─────────────────────────

function norm(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // strip accents
    .replace(/[^a-z ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const nameMap = new Map(); // norm → canonical fullName
Object.values(SQUADS).forEach(team => {
  if (!team.players) return;
  const raw   = team.players;
  const first = Object.values(raw)[0];
  const flat  = Array.isArray(first)
    ? Object.values(raw).flat()
    : Object.values(raw);
  flat.forEach(p => {
    const full = p.fullName || p.name;
    if (full) nameMap.set(norm(full), full);
  });
});

console.log(`Loaded ${nameMap.size} players from SQUADS.`);

// Match an API player name to a SQUADS canonical fullName.
// Tries exact normalised match first, then unique last-name match.
function findPlayer(apiName) {
  if (!apiName) return null;
  const n = norm(apiName);
  if (nameMap.has(n)) return nameMap.get(n);
  // Last-name-only fallback — only resolve if unambiguous
  const last = n.split(' ').pop();
  const hits = [...nameMap.entries()].filter(([k]) => k === last || k.endsWith(' ' + last));
  return hits.length === 1 ? hits[0][1] : null;
}

// ── HTTP helper ───────────────────────────────────────────────────────────────

function apiGet(endpoint) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      {
        hostname: 'api.football-data.org',
        path:     '/v4' + endpoint,
        headers:  { 'X-Auth-Token': API_KEY, Accept: 'application/json' },
      },
      res => {
        let body = '';
        res.on('data', d => (body += d));
        res.on('end', () => {
          if (res.statusCode === 200) {
            try { resolve(JSON.parse(body)); }
            catch (e) { reject(new Error('JSON parse error: ' + e.message)); }
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${body.slice(0, 300)}`));
          }
        });
      }
    );
    req.on('error', reject);
  });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  // stats[canonicalFullName] = { apps, goals, assists }
  const stats = {};
  const bump = (name, field) => {
    if (!name) return;
    if (!stats[name]) stats[name] = { apps: 0, goals: 0, assists: 0 };
    stats[name][field]++;
  };

  // 1. List all finished matches — this response already includes per-match goals
  console.log(`\nFetching finished ${COMP} matches from football-data.org...`);
  let matches;
  try {
    const data = await apiGet(`/competitions/${COMP}/matches?status=FINISHED`);
    matches = data.matches || [];
  } catch (e) {
    console.error('Failed to fetch match list:', e.message);
    process.exit(1);
  }
  console.log(`${matches.length} finished match(es) found.\n`);

  if (matches.length === 0) {
    writeStats(stats, 0, new Date().toISOString());
    return;
  }

  // 2. Process goals/assists from the list response directly (no extra API calls needed)
  for (const m of matches) {
    const label = `${m.homeTeam?.shortName || m.homeTeam?.name} ${m.score?.fullTime?.home ?? '?'}–${m.score?.fullTime?.away ?? '?'} ${m.awayTeam?.shortName || m.awayTeam?.name}`;
    let goalCount = 0, assistCount = 0;
    for (const g of (m.goals || [])) {
      const scorer   = findPlayer(g.scorer?.name);
      const assister = findPlayer(g.assist?.name);
      if (scorer)   { bump(scorer,   'goals');   goalCount++;   }
      if (assister) { bump(assister, 'assists'); assistCount++; }
    }
    console.log(`${label} — Goals matched: ${goalCount}  Assists matched: ${assistCount}`);
  }

  // 3. Fetch per-match detail for lineups (appearances)
  //    Diagnose the response shape on the first match so we can see what keys are returned.
  console.log('\nFetching match details for lineup/appearance data...');
  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    if (i > 0) await sleep(DELAY_MS);

    let detail;
    try {
      detail = await apiGet(`/matches/${m.id}`);
    } catch (e) {
      console.warn(`  [${i + 1}] Skipping detail — ${e.message}`);
      continue;
    }

    // On the first match, log the top-level keys so we can see the response shape
    if (i === 0) {
      console.log('  Detail response keys:', Object.keys(detail));
      const matchObj = detail.match || detail;
      console.log('  goals length:', (matchObj.goals || []).length);
      console.log('  lineups length:', (matchObj.lineups || []).length);
    }

    // Handle both { goals, lineups } and { match: { goals, lineups } } response shapes
    const matchObj = detail.match || detail;
    const appearedThisMatch = new Set();
    for (const lineup of (matchObj.lineups || [])) {
      const allEntries = [...(lineup.startXI || []), ...(lineup.substitutes || [])];
      for (const entry of allEntries) {
        const name = findPlayer(entry.player?.name);
        if (name && !appearedThisMatch.has(name)) {
          appearedThisMatch.add(name);
          bump(name, 'apps');
        }
      }
    }
    if (appearedThisMatch.size > 0) {
      console.log(`  [${i + 1}] ${appearedThisMatch.size} players logged from lineups`);
    }
  }
  }

  writeStats(stats, matches.length, new Date().toISOString());
}

function writeStats(stats, matchCount, ts) {
  const playerCount = Object.keys(stats).length;
  const lines = [
    `// Auto-generated by scripts/update-wc26-stats.js — do not edit manually`,
    `// Last updated: ${ts}`,
    `// Matches processed: ${matchCount} · Players with data: ${playerCount}`,
    `// Stats: apps, goals, assists (tackles/interceptions/saves require premium API)`,
    `const WC26_STATS = ${JSON.stringify(stats, null, 2)};`,
    '',
  ];
  fs.writeFileSync(STATS_OUT, lines.join('\n'), 'utf8');
  console.log(`\nWrote ${playerCount} players → ${STATS_OUT}`);
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
