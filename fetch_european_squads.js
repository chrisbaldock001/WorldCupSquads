const { chromium } = require('./node_modules/playwright');
const fs = require('fs');

const TEAMS = [
  { name: 'England',     slug: 'england' },
  { name: 'France',      slug: 'france' },
  { name: 'Germany',     slug: 'germany' },
  { name: 'Spain',       slug: 'spain' },
  { name: 'Portugal',    slug: 'portugal' },
  { name: 'Netherlands', slug: 'netherlands', altSlug: 'the-netherlands' },
  { name: 'Belgium',     slug: 'belgium' },
];

const BASE_URL = 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/teams';

const POSITION_MAP = {
  'Goalkeepers': 'GK',
  'Goalkeeper': 'GK',
  'GK': 'GK',
  'Defenders': 'DEF',
  'Defender': 'DEF',
  'DEF': 'DEF',
  'Midfielders': 'MID',
  'Midfielder': 'MID',
  'MID': 'MID',
  'Forwards': 'FWD',
  'Forward': 'FWD',
  'FWD': 'FWD',
  'Attacker': 'FWD',
  'Attackers': 'FWD',
  'ATT': 'FWD',
};

function extractSquadData(nextData) {
  try {
    const props = nextData.props || {};
    const pageProps = props.pageProps || {};

    function findByKey(obj, targetKey, depth = 0) {
      if (depth > 12 || !obj || typeof obj !== 'object') return undefined;
      if (Array.isArray(obj)) {
        for (const item of obj) {
          const found = findByKey(item, targetKey, depth + 1);
          if (found !== undefined) return found;
        }
        return undefined;
      }
      if (obj[targetKey] !== undefined) return obj[targetKey];
      for (const key of Object.keys(obj)) {
        const found = findByKey(obj[key], targetKey, depth + 1);
        if (found !== undefined) return found;
      }
      return undefined;
    }

    function findPlayerArray(obj, depth = 0) {
      if (depth > 10 || !obj || typeof obj !== 'object') return null;
      if (Array.isArray(obj)) {
        // Check if this looks like a player array
        if (obj.length >= 3) {
          const sample = obj[0];
          if (sample && typeof sample === 'object' &&
              (sample.shirtNumber !== undefined || sample.internationalName ||
               sample.name || sample.shortName || sample.jerseyNumber)) {
            return obj;
          }
        }
        for (const item of obj) {
          const found = findPlayerArray(item, depth + 1);
          if (found) return found;
        }
        return null;
      }
      for (const key of Object.keys(obj)) {
        if (['players', 'squad', 'squadPlayers', 'teamPlayers', 'squadMembers'].includes(key)) {
          const val = obj[key];
          if (Array.isArray(val) && val.length >= 3) return val;
          const found = findPlayerArray(val, depth + 1);
          if (found) return found;
        }
      }
      for (const key of Object.keys(obj)) {
        const found = findPlayerArray(obj[key], depth + 1);
        if (found) return found;
      }
      return null;
    }

    // Try to find grouped players (by position)
    function findGroupedPlayers(obj, depth = 0) {
      if (depth > 10 || !obj || typeof obj !== 'object') return null;
      if (Array.isArray(obj)) {
        for (const item of obj) {
          const found = findGroupedPlayers(item, depth + 1);
          if (found) return found;
        }
        return null;
      }
      // Check if obj looks like { Goalkeepers: [...], Defenders: [...] }
      const keys = Object.keys(obj);
      const positionKeys = keys.filter(k =>
        ['Goalkeepers', 'Goalkeeper', 'Defenders', 'Defender', 'Midfielders',
         'Midfielder', 'Forwards', 'Forward', 'Attackers', 'Attacker', 'GK', 'DEF', 'MID', 'FWD'].includes(k)
      );
      if (positionKeys.length >= 2) return obj;

      for (const key of keys) {
        const found = findGroupedPlayers(obj[key], depth + 1);
        if (found) return found;
      }
      return null;
    }

    // Deep search for group name
    function findGroup(obj, depth = 0) {
      if (depth > 12 || !obj || typeof obj !== 'object') return null;
      if (Array.isArray(obj)) {
        for (const item of obj) {
          const found = findGroup(item, depth + 1);
          if (found) return found;
        }
        return null;
      }
      // Look for group info
      for (const key of Object.keys(obj)) {
        const val = obj[key];
        if ((key === 'groupName' || key === 'groupLabel' || key === 'group') && typeof val === 'string' && val.length <= 20) {
          return val;
        }
        if (key === 'group' && val && typeof val === 'object' && val.name) {
          return val.name;
        }
      }
      for (const key of Object.keys(obj)) {
        const found = findGroup(obj[key], depth + 1);
        if (found) return found;
      }
      return null;
    }

    // Find group opponents
    function findGroupOpponents(obj, depth = 0) {
      if (depth > 12 || !obj || typeof obj !== 'object') return null;
      if (Array.isArray(obj)) {
        // Check if this is an array of teams in a group
        if (obj.length >= 3 && obj.length <= 6) {
          const sample = obj[0];
          if (sample && (sample.teamName || sample.name || sample.internationalName)) {
            return obj.map(t => t.teamName || t.name || t.internationalName).filter(Boolean);
          }
        }
        for (const item of obj) {
          const found = findGroupOpponents(item, depth + 1);
          if (found) return found;
        }
        return null;
      }
      for (const key of Object.keys(obj)) {
        if (['groupTeams', 'opponents', 'groupMembers', 'teams'].includes(key)) {
          const found = findGroupOpponents(obj[key], depth + 1);
          if (found) return found;
        }
      }
      for (const key of Object.keys(obj)) {
        const found = findGroupOpponents(obj[key], depth + 1);
        if (found) return found;
      }
      return null;
    }

    const teamName = findByKey(pageProps, 'teamName') ||
                     findByKey(pageProps, 'internationalName') ||
                     findByKey(pageProps, 'name');

    const coach = findByKey(pageProps, 'coach') ||
                  findByKey(pageProps, 'headCoach') ||
                  findByKey(pageProps, 'manager') ||
                  findByKey(pageProps, 'coachName');

    const group = findGroup(pageProps);
    const groupOpponents = findGroupOpponents(pageProps);

    const flatPlayers = findPlayerArray(pageProps);
    const groupedPlayers = findGroupedPlayers(pageProps);

    return {
      teamName,
      coach,
      group,
      groupOpponents,
      flatPlayers,
      groupedPlayers,
      raw_pageProps_keys: Object.keys(pageProps).slice(0, 40),
    };
  } catch (e) {
    return { error: e.message };
  }
}

function formatPlayer(p) {
  return {
    number: p.shirtNumber || p.jerseyNumber || p.number || null,
    name: p.shortName || p.displayName || p.internationalName || p.name || '',
    fullName: p.name || p.internationalName || p.fullName || '',
    club: p.currentClub?.name || p.club?.name || p.club || p.currentTeam?.name || p.clubName || '',
  };
}

function groupPlayersByPosition(flatPlayers) {
  const grouped = { Goalkeepers: [], Defenders: [], Midfielders: [], Forwards: [] };
  const posMap = {
    'GK': 'Goalkeepers', 'Goalkeeper': 'Goalkeepers', 'Goalkeepers': 'Goalkeepers',
    'DEF': 'Defenders', 'Defender': 'Defenders', 'Defenders': 'Defenders',
    'MID': 'Midfielders', 'Midfielder': 'Midfielders', 'Midfielders': 'Midfielders',
    'FWD': 'Forwards', 'Forward': 'Forwards', 'Forwards': 'Forwards',
    'ATT': 'Forwards', 'Attacker': 'Forwards', 'Attackers': 'Forwards',
  };

  for (const p of flatPlayers) {
    const pos = p.position || p.positionGroup || p.fieldPosition || p.positionName || '';
    const posStr = typeof pos === 'object' ? (pos.name || pos.code || '') : pos;
    const bucket = posMap[posStr] || 'Midfielders'; // fallback
    grouped[bucket].push(formatPlayer(p));
  }

  // Sort each group by shirt number
  for (const grp of Object.values(grouped)) {
    grp.sort((a, b) => (a.number || 99) - (b.number || 99));
  }
  return grouped;
}

async function fetchTeamSquad(page, teamName, slug) {
  const url = `${BASE_URL}/${slug}/squad`;
  console.log(`\nFetching: ${url}`);

  try {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    const status = response ? response.status() : 0;
    console.log(`  Status: ${status}`);

    if (status === 404) {
      return { success: false, status, slug, error: '404 Not Found' };
    }

    // Wait a moment for JS to settle
    await page.waitForTimeout(3000);

    const nextDataRaw = await page.evaluate(() => {
      const el = document.getElementById('__NEXT_DATA__');
      return el ? el.textContent : null;
    });

    if (!nextDataRaw) {
      const title = await page.title();
      const bodyText = await page.evaluate(() => document.body ? document.body.innerText.slice(0, 500) : '');
      return { success: false, status, slug, error: 'No __NEXT_DATA__', title, bodyText };
    }

    const nextData = JSON.parse(nextDataRaw);
    const extracted = extractSquadData(nextData);
    return { success: true, status, slug, teamName, extracted, nextDataSize: nextDataRaw.length };
  } catch (e) {
    return { success: false, slug, error: e.message };
  }
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    locale: 'en-US',
    ignoreHTTPSErrors: true,
    extraHTTPHeaders: {
      'Accept-Language': 'en-US,en;q=0.9',
    },
  });

  const page = await context.newPage();
  const rawResults = {};
  const finalSquads = {};

  for (const team of TEAMS) {
    let res = await fetchTeamSquad(page, team.name, team.slug);

    if (!res.success && team.altSlug) {
      console.log(`  Trying alt slug: ${team.altSlug}`);
      const res2 = await fetchTeamSquad(page, team.name, team.altSlug);
      if (res2.success) {
        res = { ...res2, usedAltSlug: true };
      }
    }

    rawResults[team.name] = res;

    if (res.success && res.extracted) {
      const ex = res.extracted;
      let players;

      if (ex.groupedPlayers) {
        // Already grouped by position
        players = {};
        for (const [posKey, arr] of Object.entries(ex.groupedPlayers)) {
          const label = {
            'Goalkeepers': 'Goalkeepers', 'Goalkeeper': 'Goalkeepers', 'GK': 'Goalkeepers',
            'Defenders': 'Defenders', 'Defender': 'Defenders', 'DEF': 'Defenders',
            'Midfielders': 'Midfielders', 'Midfielder': 'Midfielders', 'MID': 'Midfielders',
            'Forwards': 'Forwards', 'Forward': 'Forwards', 'FWD': 'Forwards',
            'Attackers': 'Forwards', 'Attacker': 'Forwards', 'ATT': 'Forwards',
          }[posKey] || posKey;
          if (!players[label]) players[label] = [];
          players[label].push(...(Array.isArray(arr) ? arr.map(formatPlayer) : []));
        }
      } else if (ex.flatPlayers && ex.flatPlayers.length > 0) {
        players = groupPlayersByPosition(ex.flatPlayers);
      }

      const coachName = typeof ex.coach === 'object' ? (ex.coach?.name || ex.coach?.internationalName || ex.coach?.displayName || JSON.stringify(ex.coach)) : ex.coach;
      const groupOpponentStr = Array.isArray(ex.groupOpponents) ? ex.groupOpponents.join(' · ') : '';

      finalSquads[team.name] = {
        teamName: ex.teamName || team.name,
        coach: coachName || 'Unknown',
        group: ex.group || 'Unknown',
        groupOpponents: groupOpponentStr,
        players: players || {},
        slug: res.slug,
      };

      console.log(`  SUCCESS: ${team.name} - ${(ex.flatPlayers || []).length} players, coach: ${coachName}, group: ${ex.group}`);
      console.log(`  pageProps keys: ${ex.raw_pageProps_keys.join(', ')}`);
    } else {
      console.log(`  FAILED: ${team.name} - ${res.error || 'unknown error'}`);
      if (res.bodyText) console.log(`  Body: ${res.bodyText}`);
    }

    await page.waitForTimeout(1500);
  }

  await browser.close();

  // Save both raw and processed
  fs.writeFileSync('/tmp/european_squads_raw.json', JSON.stringify(rawResults, null, 2));
  fs.writeFileSync('/tmp/european_squads.json', JSON.stringify(finalSquads, null, 2));

  console.log('\n\n===== FINAL OUTPUT =====');
  console.log(JSON.stringify(finalSquads, null, 2));
  console.log('\nRaw saved to /tmp/european_squads_raw.json');
  console.log('Processed saved to /tmp/european_squads.json');
}

main().catch(e => {
  console.error('Fatal error:', e);
  process.exit(1);
});
