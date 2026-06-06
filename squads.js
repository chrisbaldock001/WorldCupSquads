/* squads.js — World Cup 2026 squad data
   Fields per player: number, name (shirt), fullName, club, image (direct URL), wiki (Wikipedia article title)
   Teams without players yet show a "coming soon" message on the team page. */

const SQUADS = {

  /* ── CONCACAF ──────────────────────────────────────────────── */

  "usa": {
    name: "United States",
    coach: "Mauricio Pochettino",
    flag: "us",
    group: "D",
    groupTeams: "Paraguay · Australia · Türkiye",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Turner",  fullName: "Matt Turner",   club: "New England Revolution", wiki: "Matt_Turner_(soccer)" },
        { number: 24, name: "Freese",  fullName: "Matt Freese",   club: "New York City FC",       wiki: "Matt_Freese" },
        { number: 25, name: "Brady",   fullName: "Chris Brady",   club: "Chicago Fire FC",        wiki: "Chris_Brady_(goalkeeper,_born_2003)" }
      ],
      "Defenders": [
        { number: 2,  name: "Dest",        fullName: "Sergiño Dest",      club: "PSV Eindhoven",            wiki: "Sergiño_Dest" },
        { number: 3,  name: "Richards",    fullName: "Chris Richards",    club: "Crystal Palace",           wiki: "Chris_Richards_(soccer)" },
        { number: 5,  name: "Robinson",    fullName: "Antonee Robinson",  club: "Fulham",                   wiki: "Antonee_Robinson" },
        { number: 6,  name: "Trusty",      fullName: "Auston Trusty",     club: "Celtic",                   wiki: "Auston_Trusty" },
        { number: 12, name: "M. Robinson", fullName: "Miles Robinson",    club: "FC Cincinnati",            wiki: "Miles_Robinson_(soccer)" },
        { number: 13, name: "Ream",        fullName: "Tim Ream",          club: "Charlotte FC",             wiki: "Tim_Ream" },
        { number: 16, name: "Freeman",     fullName: "Alex Freeman",      club: "Villarreal",               wiki: "Alex_Freeman_(soccer)" },
        { number: 18, name: "Arfsten",     fullName: "Max Arfsten",       club: "Columbus Crew",            wiki: "Max_Arfsten" },
        { number: 22, name: "McKenzie",    fullName: "Mark McKenzie",     club: "Toulouse",                 wiki: "Mark_McKenzie_(soccer)" },
        { number: 23, name: "Scally",      fullName: "Joe Scally",        club: "Borussia Mönchengladbach", wiki: "Joe_Scally" }
      ],
      "Midfielders": [
        { number: 4,  name: "Adams",     fullName: "Tyler Adams",         club: "AFC Bournemouth",          wiki: "Tyler_Adams_(soccer)" },
        { number: 7,  name: "Reyna",     fullName: "Gio Reyna",           club: "Borussia Mönchengladbach", wiki: "Giovanni_Reyna" },
        { number: 8,  name: "McKennie",  fullName: "Weston McKennie",     club: "Juventus",                 wiki: "Weston_McKennie" },
        { number: 14, name: "Berhalter", fullName: "Sebastian Berhalter", club: "Vancouver Whitecaps FC",   wiki: "Sebastian_Berhalter" },
        { number: 15, name: "Roldan",    fullName: "Cristian Roldan",     club: "Seattle Sounders FC",      wiki: "Cristian_Roldan" },
        { number: 17, name: "Tillman",   fullName: "Malik Tillman",       club: "Bayer Leverkusen",         wiki: "Malik_Tillman" }
      ],
      "Forwards": [
        { number: 9,  name: "Pepi",     fullName: "Ricardo Pepi",       club: "PSV Eindhoven",        wiki: "Ricardo_Pepi" },
        { number: 10, name: "Pulisic",  fullName: "Christian Pulisic",  club: "AC Milan",             wiki: "Christian_Pulisic" },
        { number: 11, name: "Aaronson", fullName: "Brenden Aaronson",   club: "Leeds United",         wiki: "Brenden_Aaronson" },
        { number: 19, name: "Wright",   fullName: "Haji Wright",         club: "Coventry City",        wiki: "Haji_Wright" },
        { number: 20, name: "Balogun",  fullName: "Folarin Balogun",    club: "AS Monaco",            wiki: "Folarin_Balogun" },
        { number: 21, name: "Weah",     fullName: "Timothy Weah",       club: "Olympique Marseille",  wiki: "Timothy_Weah" },
        { number: 26, name: "Zendejas", fullName: "Alejandro Zendejas", club: "Club América",         wiki: "Alejandro_Zendejas" }
      ]
    }
  },

  "mexico": {
    name: "Mexico",
    coach: "",
    flag: "mx",
    group: "",
    groupTeams: "",
    players: {}
  },

  "canada": {
    name: "Canada",
    coach: "",
    flag: "ca",
    group: "",
    groupTeams: "",
    players: {}
  },

  "panama": {
    name: "Panama",
    coach: "",
    flag: "pa",
    group: "",
    groupTeams: "",
    players: {}
  },

  "haiti": {
    name: "Haiti",
    coach: "",
    flag: "ht",
    group: "",
    groupTeams: "",
    players: {}
  },

  "curacao": {
    name: "Curaçao",
    coach: "",
    flag: "cw",
    group: "",
    groupTeams: "",
    players: {}
  },

  /* ── CONMEBOL ──────────────────────────────────────────────── */

  "argentina": {
    name: "Argentina",
    coach: "",
    flag: "ar",
    group: "",
    groupTeams: "",
    players: {}
  },

  "brazil": {
    name: "Brazil",
    coach: "Carlo Ancelotti",
    flag: "br",
    group: "C",
    groupTeams: "Morocco · Scotland · Haiti",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Alisson",  fullName: "Alisson Becker",            club: "Liverpool",            wiki: "Alisson_Becker" },
        { number: 12, name: "Weverton", fullName: "Weverton Pereira da Silva", club: "Grêmio",               wiki: "Weverton_(footballer)" },
        { number: 23, name: "Ederson",  fullName: "Ederson Moraes",            club: "Fenerbahçe",           wiki: "Ederson_(footballer,_born_1993)" }
      ],
      "Defenders": [
        { number: 2,  name: "Wesley",            fullName: "Wesley",                          club: "AS Roma",              wiki: "Wesley_(footballer,_born_2001)" },
        { number: 3,  name: "Gabriel Magalhães", fullName: "Gabriel Magalhães",               club: "Arsenal",              wiki: "Gabriel_Magalhães" },
        { number: 4,  name: "Marquinhos",        fullName: "Marcos Aoás Corrêa",              club: "Paris Saint-Germain",  image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Marquinhos_capitaine_du_PSG_2022.jpg" },
        { number: 6,  name: "Alex Sandro",       fullName: "Alex Sandro Lobo Silva",         club: "Flamengo",             wiki: "Alex_Sandro" },
        { number: 13, name: "Danilo",            fullName: "Danilo Luiz da Silva",           club: "Flamengo",             wiki: "Danilo_(footballer,_born_1991)" },
        { number: 14, name: "Bremer",            fullName: "Gleison Bremer Silva Nascimento",club: "Juventus",             wiki: "Gleison_Bremer" },
        { number: 15, name: "Léo Pereira",       fullName: "Léo Pereira",                   club: "Flamengo",             wiki: "Léo_Pereira_(Brazilian_footballer)" },
        { number: 16, name: "Douglas Santos",    fullName: "Douglas Santos",                 club: "Zenit St. Petersburg", wiki: "Douglas_Santos_(footballer)" },
        { number: 24, name: "Roger Ibañez",      fullName: "Roger Ibañez da Silva Neves",   club: "Al-Ahli",              wiki: "Roger_Ibañez" }
      ],
      "Midfielders": [
        { number: 5,  name: "Casemiro",        fullName: "Carlos Henrique Casimiro",         club: "Manchester United", wiki: "Casemiro" },
        { number: 8,  name: "Bruno Guimarães", fullName: "Bruno Guimarães Rodrigues Moura", club: "Newcastle United",  wiki: "Bruno_Guimarães" },
        { number: 17, name: "Fabinho",         fullName: "Fábio Henrique Tavares",           club: "Al-Ittihad",       wiki: "Fabinho_(footballer,_born_1993)" },
        { number: 18, name: "Danilo Barbosa",  fullName: "Danilo Barbosa",                  club: "Botafogo",         wiki: "Danilo_Barbosa" },
        { number: 20, name: "Paquetá",         fullName: "Lucas Tolentino Coelho de Lima",  club: "Flamengo",         wiki: "Lucas_Paquetá" }
      ],
      "Forwards": [
        { number: 7,  name: "Vinícius Jr",   fullName: "Vinicius José Paixão de Oliveira Júnior", club: "Real Madrid",          wiki: "Vinícius_Júnior" },
        { number: 9,  name: "Matheus Cunha", fullName: "Matheus Santos Carneiro Cunha",           club: "Manchester United",    wiki: "Matheus_Cunha" },
        { number: 10, name: "Neymar",        fullName: "Neymar da Silva Santos Júnior",           club: "Santos",               wiki: "Neymar" },
        { number: 11, name: "Raphinha",      fullName: "Raphael Dias Belloli",                    club: "Barcelona",            wiki: "Raphinha" },
        { number: 19, name: "Endrick",       fullName: "Endrick Felipe Moreira de Sousa",         club: "Real Madrid",          wiki: "Endrick" },
        { number: 21, name: "Luiz Henrique", fullName: "Luiz Henrique Bié",                       club: "Zenit St. Petersburg", wiki: "Luiz_Henrique_(footballer,_born_2001)" },
        { number: 22, name: "Martinelli",    fullName: "Gabriel Silva Martinelli",                club: "Arsenal",              wiki: "Gabriel_Martinelli" },
        { number: 25, name: "Igor Thiago",   fullName: "Igor Thiago",                             club: "Brentford",            wiki: "Igor_Thiago" },
        { number: 26, name: "Rayan",         fullName: "Rayan Vitor Simplício Rocha",             club: "Bournemouth",          wiki: "Rayan_(footballer,_born_2006)" }
      ]
    }
  },

  "colombia": {
    name: "Colombia",
    coach: "",
    flag: "co",
    group: "",
    groupTeams: "",
    players: {}
  },

  "ecuador": {
    name: "Ecuador",
    coach: "",
    flag: "ec",
    group: "",
    groupTeams: "",
    players: {}
  },

  "paraguay": {
    name: "Paraguay",
    coach: "",
    flag: "py",
    group: "",
    groupTeams: "",
    players: {}
  },

  "uruguay": {
    name: "Uruguay",
    coach: "",
    flag: "uy",
    group: "",
    groupTeams: "",
    players: {}
  },

  /* ── UEFA ──────────────────────────────────────────────────── */

  "england": {
    name: "England",
    coach: "",
    flag: "gb-eng",
    group: "",
    groupTeams: "",
    players: {}
  },

  "france": {
    name: "France",
    coach: "",
    flag: "fr",
    group: "",
    groupTeams: "",
    players: {}
  },

  "germany": {
    name: "Germany",
    coach: "",
    flag: "de",
    group: "",
    groupTeams: "",
    players: {}
  },

  "spain": {
    name: "Spain",
    coach: "",
    flag: "es",
    group: "",
    groupTeams: "",
    players: {}
  },

  "portugal": {
    name: "Portugal",
    coach: "",
    flag: "pt",
    group: "",
    groupTeams: "",
    players: {}
  },

  "netherlands": {
    name: "Netherlands",
    coach: "",
    flag: "nl",
    group: "",
    groupTeams: "",
    players: {}
  },

  "belgium": {
    name: "Belgium",
    coach: "",
    flag: "be",
    group: "",
    groupTeams: "",
    players: {}
  },

  "croatia": {
    name: "Croatia",
    coach: "",
    flag: "hr",
    group: "",
    groupTeams: "",
    players: {}
  },

  "austria": {
    name: "Austria",
    coach: "",
    flag: "at",
    group: "",
    groupTeams: "",
    players: {}
  },

  "switzerland": {
    name: "Switzerland",
    coach: "",
    flag: "ch",
    group: "",
    groupTeams: "",
    players: {}
  },

  "norway": {
    name: "Norway",
    coach: "",
    flag: "no",
    group: "",
    groupTeams: "",
    players: {}
  },

  "scotland": {
    name: "Scotland",
    coach: "",
    flag: "gb-sct",
    group: "",
    groupTeams: "",
    players: {}
  },

  "bosnia-herzegovina": {
    name: "Bosnia & Herzegovina",
    coach: "",
    flag: "ba",
    group: "",
    groupTeams: "",
    players: {}
  },

  "czechia": {
    name: "Czechia",
    coach: "",
    flag: "cz",
    group: "",
    groupTeams: "",
    players: {}
  },

  "sweden": {
    name: "Sweden",
    coach: "",
    flag: "se",
    group: "",
    groupTeams: "",
    players: {}
  },

  "turkiye": {
    name: "Türkiye",
    coach: "",
    flag: "tr",
    group: "",
    groupTeams: "",
    players: {}
  },

  /* ── CAF ───────────────────────────────────────────────────── */

  "morocco": {
    name: "Morocco",
    coach: "",
    flag: "ma",
    group: "",
    groupTeams: "",
    players: {}
  },

  "senegal": {
    name: "Senegal",
    coach: "",
    flag: "sn",
    group: "",
    groupTeams: "",
    players: {}
  },

  "egypt": {
    name: "Egypt",
    coach: "",
    flag: "eg",
    group: "",
    groupTeams: "",
    players: {}
  },

  "algeria": {
    name: "Algeria",
    coach: "",
    flag: "dz",
    group: "",
    groupTeams: "",
    players: {}
  },

  "tunisia": {
    name: "Tunisia",
    coach: "",
    flag: "tn",
    group: "",
    groupTeams: "",
    players: {}
  },

  "cote-divoire": {
    name: "Côte d'Ivoire",
    coach: "",
    flag: "ci",
    group: "",
    groupTeams: "",
    players: {}
  },

  "ghana": {
    name: "Ghana",
    coach: "",
    flag: "gh",
    group: "",
    groupTeams: "",
    players: {}
  },

  "south-africa": {
    name: "South Africa",
    coach: "",
    flag: "za",
    group: "",
    groupTeams: "",
    players: {}
  },

  "cape-verde": {
    name: "Cape Verde",
    coach: "",
    flag: "cv",
    group: "",
    groupTeams: "",
    players: {}
  },

  "dr-congo": {
    name: "DR Congo",
    coach: "",
    flag: "cd",
    group: "",
    groupTeams: "",
    players: {}
  },

  /* ── AFC ───────────────────────────────────────────────────── */

  "japan": {
    name: "Japan",
    coach: "",
    flag: "jp",
    group: "",
    groupTeams: "",
    players: {}
  },

  "south-korea": {
    name: "South Korea",
    coach: "",
    flag: "kr",
    group: "",
    groupTeams: "",
    players: {}
  },

  "australia": {
    name: "Australia",
    coach: "",
    flag: "au",
    group: "",
    groupTeams: "",
    players: {}
  },

  "iran": {
    name: "Iran",
    coach: "",
    flag: "ir",
    group: "",
    groupTeams: "",
    players: {}
  },

  "saudi-arabia": {
    name: "Saudi Arabia",
    coach: "",
    flag: "sa",
    group: "",
    groupTeams: "",
    players: {}
  },

  "qatar": {
    name: "Qatar",
    coach: "",
    flag: "qa",
    group: "",
    groupTeams: "",
    players: {}
  },

  "jordan": {
    name: "Jordan",
    coach: "",
    flag: "jo",
    group: "",
    groupTeams: "",
    players: {}
  },

  "uzbekistan": {
    name: "Uzbekistan",
    coach: "",
    flag: "uz",
    group: "",
    groupTeams: "",
    players: {}
  },

  "iraq": {
    name: "Iraq",
    coach: "",
    flag: "iq",
    group: "",
    groupTeams: "",
    players: {}
  },

  /* ── OFC ───────────────────────────────────────────────────── */

  "new-zealand": {
    name: "New Zealand",
    coach: "",
    flag: "nz",
    group: "",
    groupTeams: "",
    players: {}
  }

};
