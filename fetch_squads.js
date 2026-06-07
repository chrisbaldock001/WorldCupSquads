const { chromium } = require('./node_modules/playwright');
const fs = require('fs');

const TEAMS = [
  { name: 'Morocco',      slug: 'morocco' },
  { name: 'Senegal',      slug: 'senegal' },
  { name: 'Egypt',        slug: 'egypt' },
  { name: 'Algeria',      slug: 'algeria' },
  { name: 'Tunisia',      slug: 'tunisia' },
  { name: 'Cote dIvoire', slug: 'cote-divoire', altSlug: 'ivory-coast' },
  { name: 'Ghana',        slug: 'ghana' },
  { name: 'South Africa', slug: 'south-africa' },
  { name: 'Cape Verde',   slug: 'cape-verde' },
  { name: 'DR Congo',     slug: 'dr-congo', altSlug: 'congo-dr' },
];

const BASE_URL = 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/teams';

function extractSquadData(nextData) {
  try {
    const props = nextData.props || {};
    const pageProps = props.pageProps || {};

    // Try to find squad/team data in various locations
    const result = {
      raw_keys: Object.keys(pageProps).slice(0, 30),
      pageProps: {},
    };

    // Recursively search for player arrays
    function findPlayers(obj, depth = 0) {
      if (depth > 8 || !obj || typeof obj !== 'object') return null;
      if (Array.isArray(obj)) {
        if (obj.length > 0 && obj[0] && (obj[0].shirtNumber !== undefined || obj[0].internationalName || obj[0].name)) {
          return obj;
        }
        for (const item of obj) {
          const found = findPlayers(item, depth + 1);
          if (found) return found;
        }
        return null;
      }
      for (const key of Object.keys(obj)) {
        const val = obj[key];
        if (key === 'players' || key === 'squad' || key === 'squadPlayers') {
          if (Array.isArray(val) && val.length > 0) return val;
          const found = findPlayers(val, depth + 1);
          if (found) return found;
        }
      }
      for (const key of Object.keys(obj)) {
        const found = findPlayers(obj[key], depth + 1);
        if (found) return found;
      }
      return null;
    }

    function findByKey(obj, targetKey, depth = 0) {
      if (depth > 10 || !obj || typeof obj !== 'object') return undefined;
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

    result.players = findPlayers(pageProps);
    result.coach = findByKey(pageProps, 'coach') || findByKey(pageProps, 'headCoach') || findByKey(pageProps, 'manager');
    result.group = findByKey(pageProps, 'group') || findByKey(pageProps, 'groupName') || findByKey(pageProps, 'groupLabel');
    result.teamName = findByKey(pageProps, 'teamName') || findByKey(pageProps, 'name') || findByKey(pageProps, 'internationalName');

    // Store a sample of pageProps for debugging
    for (const [k, v] of Object.entries(pageProps)) {
      result.pageProps[k] = typeof v === 'object' ? '[object]' : v;
    }

    return result;
  } catch (e) {
    return { error: e.message };
  }
}

async function fetchTeamSquad(page, teamName, slug) {
  const url = `${BASE_URL}/${slug}/squad`;
  console.log(`Fetching: ${url}`);

  try {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    const status = response ? response.status() : 0;
    console.log(`  Status: ${status} for ${slug}`);

    if (status === 404 || status === 403) {
      return { success: false, status, slug };
    }

    // Extract __NEXT_DATA__
    const nextDataRaw = await page.evaluate(() => {
      const el = document.getElementById('__NEXT_DATA__');
      return el ? el.textContent : null;
    });

    if (!nextDataRaw) {
      // Try waiting a bit and re-extracting
      await page.waitForTimeout(2000);
      const nextDataRaw2 = await page.evaluate(() => {
        const el = document.getElementById('__NEXT_DATA__');
        return el ? el.textContent : null;
      });
      if (!nextDataRaw2) {
        const title = await page.title();
        const html = await page.content();
        return { success: false, status, slug, error: 'No __NEXT_DATA__ found', title, htmlLen: html.length };
      }
      return { success: true, status, slug, teamName, nextData: JSON.parse(nextDataRaw2) };
    }

    return { success: true, status, slug, teamName, nextData: JSON.parse(nextDataRaw) };
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
  const results = {};

  for (const team of TEAMS) {
    const res = await fetchTeamSquad(page, team.name, team.slug);
    results[team.name] = res;

    if (!res.success && team.altSlug) {
      console.log(`  Trying alternate slug: ${team.altSlug}`);
      const res2 = await fetchTeamSquad(page, team.name, team.altSlug);
      if (res2.success) {
        results[team.name] = { ...res2, usedAltSlug: true };
      } else {
        results[team.name] = { primary: res, alternate: res2 };
      }
    }

    // Small delay to be polite
    await page.waitForTimeout(1000);
  }

  await browser.close();

  // Save raw results for inspection
  fs.writeFileSync('/tmp/fifa_raw_results.json', JSON.stringify(results, null, 2));
  console.log('\nResults saved to /tmp/fifa_raw_results.json');

  // Print summary
  for (const [team, res] of Object.entries(results)) {
    if (res.success) {
      const data = extractSquadData(res.nextData);
      console.log(`\n=== ${team} (slug: ${res.slug}) ===`);
      console.log(`  Players found: ${data.players ? data.players.length : 0}`);
      console.log(`  Coach: ${JSON.stringify(data.coach)}`);
      console.log(`  Group: ${JSON.stringify(data.group)}`);
      console.log(`  PageProps keys: ${data.raw_keys.join(', ')}`);
      if (data.players && data.players.length > 0) {
        console.log(`  Sample player: ${JSON.stringify(data.players[0])}`);
      }
    } else {
      console.log(`\n=== ${team} FAILED ===`);
      console.log(`  ${JSON.stringify(res)}`);
    }
  }
}

main().catch(console.error);
