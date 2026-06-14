#!/usr/bin/env node
/**
 * Fetches completed World Cup 2026 match data from api-football.com and
 * writes aggregated player stats to wc26-stats.js.
 *
 * Env: API_FOOTBALL_API_KEY  (from api-football.com — apisports.io)
 * Free tier: 100 req/day, 10 req/min.
 *
 * Each new match costs 2 calls (events + lineups). Processed match IDs are
 * persisted in wc26-stats.js so each match is only fetched once.
 *
 * Stats: apps, goals, assists.
 */

const https = require('https');
const fs    = require('fs');
const path  = require('path');
const vm    = require('vm');

const API_KEY   = process.env.API_FOOTBALL_API_KEY;
const ROOT      = path.resolve(__dirname, '..');
const STATS_OUT = path.join(ROOT, 'wc26-stats.js');
const LEAGUE_ID = 1;    // FIFA World Cup on api-football.com
const SEASON    = 2026;
const DELAY_MS  = 7000; // stay comfortably under 10 req/min

if (!API_KEY) {
  console.error('Error: API_FOOTBALL_API_KEY environment variable not set.');
  process.exit(1);
}

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

// ── Load existing stats and processed match IDs ───────────────────────────────

let existingStats = {};
let processedIds  = new Set();
if (fs.existsSync(STATS_OUT)) {
  try {
    const code = fs.readFileSync(STATS_OUT, 'utf8')
      .replace(/\b(?:const|let|var)\s+WC26_STATS\s*=/,     'WC26_STATS =')
      .replace(/\b(?:const|let|var)\s+WC26_PROCESSED\s*=/, 'WC26_PROCESSED =');
    const sb = { WC26_STATS: {}, WC26_PROCESSED: [] };
    vm.createContext(sb);
    vm.runInContext(code, sb);
    existingStats = sb.WC26_STATS  || {};
    processedIds  = new Set(sb.WC26_PROCESSED || []);
    console.log(`Resumed: ${Object.keys(existingStats).length} players, ${processedIds.size} matches already processed.`);
  } catch (e) {
    console.warn('Could not parse existing stats, starting fresh:', e.message);
  }
}

// ── Normalised name matching ───────────────────────────────────────────────────

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
  const raw  = team.players;
  const first = Object.values(raw)[0];
  const flat  = Array.isArray(first) ? Object.values(raw).flat() : Object.values(raw);
  flat.forEach(p => {
    const full = p.fullName || p.name;
    if (full) nameMap.set(norm(full), full);
  });
});
console.log(`Loaded ${nameMap.size} players from SQUADS.`);

function findPlayer(apiName) {
  if (!apiName) return null;
  const n = norm(apiName);
  if (nameMap.has(n)) return nameMap.get(n);
  const last = n.split(' ').pop();
  const hits = [...nameMap.entries()].filter(([k]) => k === last || k.endsWith(' ' + last));
  return hits.length === 1 ? hits[0][1] : null;
}

// ── HTTP helper ───────────────────────────────────────────────────────────────

function apiGet(endpoint) {
  return new Promise((resolve, reject) => {
    https.get(
      {
        hostname: 'v3.football.api-sports.io',
        path:     endpoint,
        headers:  { 'x-apisports-key': API_KEY },
      },
      res => {
        let body = '';
        res.on('data', d => (body += d));
        res.on('end', () => {
          if (res.statusCode !== 200) {
            return reject(new Error(`HTTP ${res.statusCode}: ${body.slice(0, 200)}`));
          }
          try {
            const parsed = JSON.parse(body);
            if (parsed.errors && Object.keys(parsed.errors).length) {
              return reject(new Error('API error: ' + JSON.stringify(parsed.errors)));
            }
            resolve(parsed);
          } catch (e) {
            reject(new Error('JSON parse: ' + e.message));
          }
        });
      }
    ).on('error', reject);
  });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const stats = { ...existingStats };
  const bump = (name, field) => {
    if (!name) return;
    if (!stats[name]) stats[name] = { apps: 0, goals: 0, assists: 0 };
    stats[name][field]++;
  };

  // 1. Fetch all finished WC 2026 fixtures (1 API call)
  console.log(`\nFetching finished WC ${SEASON} fixtures (league ${LEAGUE_ID})...`);
  let fixtures;
  try {
    const data = await apiGet(`/fixtures?league=${LEAGUE_ID}&season=${SEASON}&status=FT`);
    fixtures = data.response || [];
    console.log(`  ${fixtures.length} finished fixture(s) found.`);
    if (fixtures.length === 0) {
      console.log('  Tip: verify LEAGUE_ID is correct at api-football.com/documentation');
    }
  } catch (e) {
    console.error('Failed to fetch fixtures:', e.message);
    process.exit(1);
  }

  const newFixtures = fixtures.filter(f => !processedIds.has(f.fixture.id));
  console.log(`  ${newFixtures.length} new fixture(s) to process.\n`);

  if (newFixtures.length === 0) {
    writeStats(stats, processedIds, fixtures.length, new Date().toISOString());
    return;
  }

  // 2. For each new fixture: events (goals/assists) + lineups (appearances)
  for (let i = 0; i < newFixtures.length; i++) {
    const f   = newFixtures[i];
    const fid = f.fixture.id;
    const label = `${f.teams.home.name} ${f.goals.home ?? '?'}–${f.goals.away ?? '?'} ${f.teams.away.name}`;
    console.log(`[${i + 1}/${newFixtures.length}] ${label}`);

    if (i > 0) await sleep(DELAY_MS);

    // Events — goals and assists
    let goalCount = 0, assistCount = 0;
    try {
      const evData = await apiGet(`/fixtures/events?fixture=${fid}&type=Goal`);
      if (i === 0) {
        const sample = (evData.response || [])[0];
        if (sample) console.log('  Sample event:', JSON.stringify(sample));
        else        console.log('  Events response (empty):', JSON.stringify(evData.response));
      }
      for (const ev of (evData.response || [])) {
        if (ev.detail === 'Own Goal') continue;
        const scorer   = findPlayer(ev.player?.name);
        const assister = findPlayer(ev.assist?.name);
        if (scorer)   { bump(scorer,   'goals');   goalCount++;   }
        if (assister) { bump(assister, 'assists'); assistCount++; }
      }
    } catch (e) {
      console.warn(`  Events error: ${e.message}`);
    }

    await sleep(DELAY_MS);

    // Lineups — appearances
    let appCount = 0;
    const appeared = new Set();
    try {
      const luData = await apiGet(`/fixtures/lineups?fixture=${fid}`);
      if (i === 0) {
        const sample = (luData.response || [])[0];
        if (sample) console.log('  Sample lineup:', sample.team?.name, '| startXI[0]:', JSON.stringify(sample.startXI?.[0]));
        else        console.log('  Lineups response (empty):', JSON.stringify(luData.response));
      }
      for (const team of (luData.response || [])) {
        for (const entry of [...(team.startXI || []), ...(team.substitutes || [])]) {
          const name = findPlayer(entry.player?.name);
          if (name && !appeared.has(name)) {
            appeared.add(name);
            bump(name, 'apps');
            appCount++;
          }
        }
      }
    } catch (e) {
      console.warn(`  Lineups error: ${e.message}`);
    }

    console.log(`  Goals: ${goalCount}  Assists: ${assistCount}  Apps: ${appCount}`);
    processedIds.add(fid);
  }

  writeStats(stats, processedIds, fixtures.length, new Date().toISOString());
}

function writeStats(stats, processedSet, totalMatches, ts) {
  const processedArr = [...processedSet];
  const playerCount  = Object.keys(stats).length;
  const lines = [
    `// Auto-generated by scripts/update-wc26-stats.js — do not edit manually`,
    `// Last updated: ${ts}`,
    `// Matches processed: ${processedArr.length}/${totalMatches} · Players with data: ${playerCount}`,
    `const WC26_PROCESSED = ${JSON.stringify(processedArr)};`,
    `const WC26_STATS = ${JSON.stringify(stats, null, 2)};`,
    '',
  ];
  fs.writeFileSync(STATS_OUT, lines.join('\n'), 'utf8');
  console.log(`\nWrote ${playerCount} players, ${processedArr.length}/${totalMatches} matches → ${STATS_OUT}`);
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
