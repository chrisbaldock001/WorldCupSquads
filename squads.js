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
    coach: "Javier Aguirre",
    flag: "mx",
    group: "A",
    groupTeams: "South Korea · South Africa · Czechia",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Rangel",    fullName: "Raúl Rangel",        club: "Guadalajara",    wiki: "Raúl_Rangel_(footballer)" },
        { number: 12, name: "Acevedo",   fullName: "Carlos Acevedo",     club: "Santos Laguna",  wiki: "Carlos_Acevedo" },
        { number: 13, name: "Ochoa",     fullName: "Guillermo Ochoa",    club: "América",        wiki: "Guillermo_Ochoa" }
      ],
      "Defenders": [
        { number: 2,  name: "J. Sánchez",fullName: "Jorge Sánchez",      club: "PAOK",           wiki: "Jorge_Sánchez_(footballer,_born_1997)" },
        { number: 3,  name: "Montes",    fullName: "César Montes",       club: "Lokomotiv Moscow",wiki: "César_Montes" },
        { number: 5,  name: "Vásquez",   fullName: "Johan Vásquez",      club: "Genoa",          wiki: "Johan_Vásquez_(footballer,_born_1998)" },
        { number: 15, name: "I. Reyes",  fullName: "Israel Reyes",       club: "Club América",   wiki: "Israel_Reyes" },
        { number: 20, name: "M. Chávez", fullName: "Mateo Chávez",       club: "AZ Alkmaar",     wiki: "Mateo_Chávez" },
        { number: 23, name: "Gallardo",  fullName: "Jesús Gallardo",     club: "Toluca",         wiki: "Jesús_Gallardo" }
      ],
      "Midfielders": [
        { number: 4,  name: "Álvarez",   fullName: "Edson Álvarez",      club: "West Ham United",wiki: "Edson_Álvarez" },
        { number: 6,  name: "Lira",      fullName: "Érik Lira",          club: "Cruz Azul",      wiki: "Érik_Lira" },
        { number: 7,  name: "Romo",      fullName: "Luis Romo",          club: "Guadalajara",    wiki: "Luis_Romo" },
        { number: 8,  name: "Fidalgo",   fullName: "Álvaro Fidalgo",     club: "Real Betis",     wiki: "Álvaro_Fidalgo" },
        { number: 17, name: "O. Pineda", fullName: "Orbelín Pineda",     club: "AEK Athens",     wiki: "Orbelín_Pineda" },
        { number: 18, name: "O. Vargas", fullName: "Obed Vargas",        club: "Atlético Madrid",wiki: "Obed_Vargas" },
        { number: 24, name: "L. Chávez", fullName: "Luis Chávez",        club: "Dynamo Moscow",  wiki: "Luis_Chávez_(footballer)" },
        { number: 26, name: "B. Gutiérrez",fullName: "Brian Gutiérrez",  club: "Guadalajara",   wiki: "Brian_Gutiérrez" }
      ],
      "Forwards": [
        { number: 9,  name: "R. Jiménez",  fullName: "Raúl Jiménez",       club: "Fulham",       wiki: "Raúl_Jiménez" },
        { number: 10, name: "A. Vega",     fullName: "Alexis Vega",        club: "Toluca",       wiki: "Alexis_Vega_(Mexican_footballer)" },
        { number: 11, name: "S. Giménez",  fullName: "Santiago Giménez",   club: "AC Milan",     wiki: "Santiago_Giménez" },
        { number: 14, name: "A. González", fullName: "Armando González",   club: "Guadalajara",  wiki: "Armando_González_(footballer,_born_2003)" },
        { number: 16, name: "Quiñones",    fullName: "Julián Quiñones",    club: "Al-Qadsiah",   wiki: "Julián_Quiñones" },
        { number: 19, name: "G. Mora",     fullName: "Gilberto Mora",      club: "Club Tijuana",  wiki: "Gilberto_Mora_(footballer,_born_2008)" },
        { number: 21, name: "C. Huerta",   fullName: "César Huerta",       club: "Anderlecht",   wiki: "César_Huerta" },
        { number: 22, name: "G. Martínez", fullName: "Guillermo Martínez", club: "Pumas UNAM",   wiki: "Guillermo_Martínez_(footballer)" },
        { number: 25, name: "R. Alvarado", fullName: "Roberto Alvarado",   club: "Guadalajara",  wiki: "Roberto_Alvarado" }
      ]
    }
  },

  "canada": {
    name: "Canada",
    coach: "Jesse Marsch",
    flag: "ca",
    group: "B",
    groupTeams: "Switzerland · Bosnia & Herzegovina · Qatar",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "St. Clair", fullName: "Dayne St. Clair",  club: "Inter Miami",    wiki: "Dayne_St._Clair" },
        { number: 16, name: "Crépeau",   fullName: "Maxime Crépeau",   club: "Orlando City",   wiki: "Maxime_Crépeau" },
        { number: 18, name: "Goodman",   fullName: "Owen Goodman",     club: "Crystal Palace", wiki: "Owen_Goodman" }
      ],
      "Defenders": [
        { number: 2,  name: "Johnston",       fullName: "Alistair Johnston", club: "Celtic",          wiki: "Alistair_Johnston" },
        { number: 3,  name: "A. Jones",       fullName: "Alfie Jones",       club: "Middlesbrough",   wiki: "Alfie_Jones" },
        { number: 4,  name: "De Fougerolles", fullName: "Luc de Fougerolles",club: "Fulham",          wiki: "Luc_de_Fougerolles" },
        { number: 5,  name: "Waterman",       fullName: "Joel Waterman",     club: "Chicago Fire",    wiki: "Joel_Waterman" },
        { number: 6,  name: "Sigur",          fullName: "Niko Sigur",        club: "Hajduk Split",    wiki: "Niko_Sigur" },
        { number: 13, name: "Cornelius",      fullName: "Derek Cornelius",   club: "Marseille",       wiki: "Derek_Cornelius" },
        { number: 15, name: "Bombito",        fullName: "Moïse Bombito",     club: "OGC Nice",        wiki: "Moïse_Bombito" },
        { number: 19, name: "Davies",         fullName: "Alphonso Davies",   club: "Bayern Munich",   wiki: "Alphonso_Davies" },
        { number: 22, name: "Laryea",         fullName: "Richie Laryea",     club: "Toronto FC",      wiki: "Richie_Laryea" }
      ],
      "Midfielders": [
        { number: 7,  name: "Eustáquio",  fullName: "Stephen Eustáquio", club: "Porto",          wiki: "Stephen_Eustáquio" },
        { number: 8,  name: "Koné",       fullName: "Ismaël Koné",       club: "Sassuolo",       wiki: "Ismaël_Koné" },
        { number: 11, name: "Buchanan",   fullName: "Tajon Buchanan",    club: "Villarreal",     wiki: "Tajon_Buchanan" },
        { number: 14, name: "Ahmed",      fullName: "Ali Ahmed",         club: "Norwich City",   wiki: "Ali_Ahmed_(soccer)" },
        { number: 17, name: "Shaffelburg",fullName: "Jacob Shaffelburg", club: "LAFC",           wiki: "Jacob_Shaffelburg" },
        { number: 20, name: "Millar",     fullName: "Liam Millar",       club: "Hull City",      wiki: "Liam_Millar" },
        { number: 21, name: "Osorio",     fullName: "Jonathan Osorio",   club: "Toronto FC",     wiki: "Jonathan_Osorio" },
        { number: 23, name: "Saliba",     fullName: "Nathan Saliba",     club: "Anderlecht",     wiki: "Nathan_Saliba" },
        { number: 24, name: "Choinière",  fullName: "Mathieu Choinière", club: "LAFC",           wiki: "Mathieu_Choinière" }
      ],
      "Forwards": [
        { number: 9,  name: "Larin",      fullName: "Cyle Larin",       club: "Mallorca",    wiki: "Cyle_Larin" },
        { number: 10, name: "J. David",   fullName: "Jonathan David",   club: "Juventus",    wiki: "Jonathan_David" },
        { number: 12, name: "P. David",   fullName: "Promise David",    club: "Union SG",    wiki: "Promise_David" },
        { number: 25, name: "Oluwaseyi",  fullName: "Tani Oluwaseyi",   club: "Villarreal",  wiki: "Tani_Oluwaseyi" }
      ]
    }
  },

  "panama": {
    name: "Panama",
    coach: "Thomas Christiansen",
    flag: "pa",
    group: "L",
    groupTeams: "England · Croatia · Ghana",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Mosquera",      fullName: "Orlando Mosquera",        club: "Al-Fayha",              wiki: "Orlando_Mosquera" },
        { number: 12, name: "L. Mejía",      fullName: "Luis Mejía",              club: "Club Nacional",         wiki: "Luis_Mejía_(footballer)" },
        { number: 23, name: "Samudio",       fullName: "César Samudio",           club: "CD Marathon",           wiki: "César_Samudio_(footballer)" }
      ],
      "Defenders": [
        { number: 2,  name: "Blackman",      fullName: "César Blackman",          club: "Slovan Bratislava",     wiki: "César_Blackman" },
        { number: 3,  name: "Gutiérrez",     fullName: "Jorge Gutiérrez",         club: "Dep. La Guaira",        wiki: "Jorge_Gutiérrez_(Panamanian_footballer)" },
        { number: 4,  name: "Murillo",       fullName: "Amir Murillo",            club: "Beşiktaş",              wiki: "Amir_Murillo" },
        { number: 5,  name: "Escobar",       fullName: "Fidel Escobar",           club: "Deportivo Saprissa",    wiki: "Fidel_Escobar_(footballer)" },
        { number: 6,  name: "Andrade",       fullName: "Andrés Andrade",          club: "LASK",                  wiki: "Andrés_Andrade_(Panamanian_footballer)" },
        { number: 13, name: "Fariña",        fullName: "Edgardo Fariña",          club: "FC Pari Nizhny Novgorod", wiki: "Edgardo_Fariña" },
        { number: 15, name: "Córdoba",       fullName: "José Córdoba",            club: "Norwich City",          wiki: "José_Córdoba_(footballer)" },
        { number: 21, name: "Davis",         fullName: "Eric Davis",              club: "CD Plaza Amador",       wiki: "Eric_Davis_(Panamanian_footballer)" },
        { number: 25, name: "Ramos",         fullName: "Jiovani Ramos",           club: "Academia P.C.",         wiki: "Jiovani_Ramos" },
        { number: 26, name: "Miller",        fullName: "Roderick Miller",         club: "Turan Tovuz",           wiki: "Roderick_Miller_(footballer)" }
      ],
      "Midfielders": [
        { number: 8,  name: "Godoy",         fullName: "Aníbal Godoy",            club: "San Diego FC",          wiki: "Aníbal_Godoy" },
        { number: 14, name: "Carrasquilla",  fullName: "Adalberto Carrasquilla",  club: "UNAM Pumas",            wiki: "Adalberto_Carrasquilla" },
        { number: 16, name: "Londoño",       fullName: "Azarías Londoño",         club: "CD U. Católica",        wiki: "Azarías_Londoño" },
        { number: 17, name: "Harvey",        fullName: "Carlos Harvey",           club: "Minnesota United",      wiki: "Carlos_Harvey_(footballer)" },
        { number: 18, name: "Martínez",      fullName: "Cristian Martínez",       club: "I. Kiryat Shmona",      wiki: "Cristian_Martínez_(Panamanian_footballer)" },
        { number: 19, name: "J. Rodríguez",  fullName: "José Luis Rodríguez",     club: "FC Juárez",             wiki: "José_Luis_Rodríguez_(Panamanian_footballer)" },
        { number: 20, name: "Yanis",         fullName: "Cesar Yanis",             club: "CD Cobresal",           wiki: "Cesar_Yanis" },
        { number: 22, name: "Bárcenas",      fullName: "Yoel Bárcenas",           club: "Mazatlán FC",           wiki: "Yoel_Bárcenas" },
        { number: 24, name: "Quintero",      fullName: "Alberto Quintero",        club: "CD Plaza Amador",       wiki: "Alberto_Quintero_(footballer)" }
      ],
      "Forwards": [
        { number: 7,  name: "I. Díaz",       fullName: "Ismael Díaz",             club: "Club León",             wiki: "Ismael_Díaz_(footballer)" },
        { number: 9,  name: "Waterman",      fullName: "Cecilio Waterman",        club: "Univ. de Concepción",   wiki: "Cecilio_Waterman" },
        { number: 10, name: "Fajardo",       fullName: "José Fajardo",            club: "CD U. Católica",        wiki: "José_Fajardo_(Panamanian_footballer)" },
        { number: 11, name: "T. Rodríguez",  fullName: "Tomás Rodríguez",         club: "Deportivo Saprissa",    wiki: "Tomás_Rodríguez_(Panamanian_footballer)" }
      ]
    }
  },

  "haiti": {
    name: "Haiti",
    coach: "Sébastien Migné",
    flag: "ht",
    group: "C",
    groupTeams: "Brazil · Morocco · Scotland",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Placide",       fullName: "Johny Placide",           club: "SC Bastia",             wiki: "Johny_Placide" },
        { number: 12, name: "A. Pierre",     fullName: "Alexandre Pierre",        club: "FC Sochaux",            wiki: "Alexandre_Pierre_(footballer)" },
        { number: 23, name: "Duverger",      fullName: "Josué Duverger",          club: "Unattached",            wiki: "Josué_Duverger" }
      ],
      "Defenders": [
        { number: 2,  name: "Arcus",         fullName: "Carlens Arcus",           club: "Angers SCO",            wiki: "Carlens_Arcus" },
        { number: 3,  name: "Lacroix",       fullName: "Duke Lacroix",            club: "Col. Springs SW",       wiki: "Duke_Lacroix" },
        { number: 4,  name: "Delcroix",      fullName: "Hannes Delcroix",         club: "FC Lugano",             wiki: "Hannes_Delcroix" },
        { number: 5,  name: "Duverne",       fullName: "Jean-Kévin Duverne",      club: "KAA Gent",              wiki: "Jean-Kévin_Duverne" },
        { number: 6,  name: "Thermoncy",     fullName: "Keeto Thermoncy",         club: "BSC Young Boys II",     wiki: "Keeto_Thermoncy" },
        { number: 13, name: "Expérience",    fullName: "Martin Expérience",       club: "AS Nancy",              wiki: "Martin_Expérience" },
        { number: 15, name: "Adé",           fullName: "Ricardo Adé",             club: "LDU Quito",             wiki: "Ricardo_Adé" },
        { number: 21, name: "Paugain",       fullName: "Wilguens Paugain",        club: "Zulte Waregem",         wiki: "Wilguens_Paugain" }
      ],
      "Midfielders": [
        { number: 8,  name: "Sainté",        fullName: "Carl Sainté",             club: "El Paso Locomotive",    wiki: "Carl_Sainté" },
        { number: 10, name: "Bellegarde",    fullName: "Jean-Ricner Bellegarde",  club: "Wolverhampton",         wiki: "Jean-Ricner_Bellegarde" },
        { number: 14, name: "Jean Jacques",  fullName: "Danley Jean Jacques",     club: "Philadelphia Union",    wiki: "Danley_Jean_Jacques" },
        { number: 16, name: "Simon",         fullName: "Dominique Simon",         club: "Tatran Prešov",         wiki: "Dominique_Simon_(footballer)" },
        { number: 17, name: "L. Pierre",     fullName: "Léverton Pierre",         club: "FC Vizela",             wiki: "Léverton_Pierre" },
        { number: 18, name: "W. Pierre",     fullName: "Woodensky Pierre",        club: "Real Hope FA",          wiki: "Woodensky_Pierre" },
        { number: 19, name: "Pierrot",       fullName: "Frantzdy Pierrot",        club: "Rizespor",              wiki: "Frantzdy_Pierrot" }
      ],
      "Forwards": [
        { number: 7,  name: "Isidor",        fullName: "Wilson Isidor",           club: "Sunderland AFC",        wiki: "Wilson_Isidor" },
        { number: 9,  name: "Louicius",      fullName: "Don Deedson Louicius",    club: "FC Dallas",             wiki: "Don_Deedson_Louicius" },
        { number: 11, name: "Nazon",         fullName: "Duckens Nazon",           club: "Esteghlal FC",          wiki: "Duckens_Nazon" },
        { number: 20, name: "Casimir",       fullName: "Josué Casimir",           club: "AJ Auxerre",            wiki: "Josué_Casimir" },
        { number: 22, name: "Joseph",        fullName: "Lenny Joseph",            club: "Ferencvárosi TC",       wiki: "Lenny_Joseph_(footballer)" },
        { number: 24, name: "Providence",    fullName: "Ruben Providence",        club: "Almere City FC",        wiki: "Ruben_Providence" },
        { number: 25, name: "Etienne",       fullName: "Derrick Etienne",         club: "Toronto FC",            wiki: "Derrick_Etienne_Jr." },
        { number: 26, name: "Fortuné",       fullName: "Yassin Fortuné",          club: "Unattached",            wiki: "Yassin_Fortuné" }
      ]
    }
  },

  "curacao": {
    name: "Curaçao",
    coach: "Dick Advocaat",
    flag: "cw",
    group: "E",
    groupTeams: "Germany · Ecuador · Côte d'Ivoire",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Room",          fullName: "Eloy Room",               club: "FC Famalicão",          wiki: "Eloy_Room" },
        { number: 12, name: "MacDonald",     fullName: "Sherjill MacDonald",      club: "FC Volendam",           wiki: "Sherjill_MacDonald" },
        { number: 23, name: "Vandebroek",    fullName: "Jorn Vandebroek",         club: "FCV Dender",            wiki: "Jorn_Vandebroek" }
      ],
      "Defenders": [
        { number: 2,  name: "Brenet",        fullName: "Joshua Brenet",           club: "Kayserispor",           wiki: "Joshua_Brenet" },
        { number: 3,  name: "Floranus",      fullName: "Sherel Floranus",         club: "PEC Zwolle",            wiki: "Sherel_Floranus" },
        { number: 4,  name: "van Eijma",     fullName: "Roshon van Eijma",        club: "RKC Waalwijk",          wiki: "Roshon_van_Eijma" },
        { number: 5,  name: "Obispo",        fullName: "Armando Obispo",          club: "PSV Eindhoven",         wiki: "Armando_Obispo" },
        { number: 6,  name: "Fonville",      fullName: "Deveron Fonville",        club: "NEC Nijmegen",          wiki: "Deveron_Fonville" },
        { number: 13, name: "Gaari",         fullName: "Jurien Gaari",            club: "Abha Club",             wiki: "Jurien_Gaari" },
        { number: 15, name: "Bazoer",        fullName: "Riechedly Bazoer",        club: "Konyaspor",             wiki: "Riechedly_Bazoer" },
        { number: 21, name: "Sambo",         fullName: "Shurandy Sambo",          club: "Sparta Rotterdam",      wiki: "Shurandy_Sambo" }
      ],
      "Midfielders": [
        { number: 7,  name: "J. Bacuna",     fullName: "Juninho Bacuna",          club: "FC Volendam",           wiki: "Juninho_Bacuna" },
        { number: 8,  name: "L. Bacuna",     fullName: "Leandro Bacuna",          club: "İğdır FK",              wiki: "Leandro_Bacuna" },
        { number: 14, name: "Comenencia",    fullName: "Livano Comenencia",       club: "FC Zurich",             wiki: "Livano_Comenencia" },
        { number: 16, name: "Felida",        fullName: "Kevin Felida",            club: "FC Den Bosch",          wiki: "Kevin_Felida" },
        { number: 17, name: "Martha",        fullName: "Ar'jany Martha",          club: "Rotherham United",      wiki: "Ar'jany_Martha" },
        { number: 18, name: "Noslin",        fullName: "Tyrese Noslin",           club: "Telstar",               wiki: "Tyrese_Noslin" },
        { number: 20, name: "Roemeratoe",    fullName: "Godfried Roemeratoe",     club: "RKC Waalwijk",          wiki: "Godfried_Roemeratoe" }
      ],
      "Forwards": [
        { number: 9,  name: "Antonisse",     fullName: "Jeremy Antonisse",        club: "AO Kifisia",            wiki: "Jeremy_Antonisse" },
        { number: 10, name: "Chong",         fullName: "Tahith Chong",            club: "Sheffield United",      wiki: "Tahith_Chong" },
        { number: 11, name: "Gorre",         fullName: "Kenji Gorre",             club: "Maccabi Haifa",         wiki: "Kenji_Gorre" },
        { number: 19, name: "Hansen",        fullName: "Sontje Hansen",           club: "Middlesbrough",         wiki: "Sontje_Hansen" },
        { number: 22, name: "Kastaneer",     fullName: "Gervane Kastaneer",       club: "Terengganu FC",         wiki: "Gervane_Kastaneer" },
        { number: 24, name: "Kuwas",         fullName: "Brandley Kuwas",          club: "FC Volendam",           wiki: "Brandley_Kuwas" },
        { number: 25, name: "Locadia",       fullName: "Jürgen Locadia",          club: "Miami FC",              wiki: "Jürgen_Locadia" },
        { number: 26, name: "Margaritha",    fullName: "Jearl Margaritha",        club: "Beerschot",             wiki: "Jearl_Margaritha" }
      ]
    }
  },

  /* ── CONMEBOL ──────────────────────────────────────────────── */

  "argentina": {
    name: "Argentina",
    coach: "Lionel Scaloni",
    flag: "ar",
    group: "J",
    groupTeams: "Algeria · Austria · Jordan",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "J. Musso",       fullName: "Juan Musso",          club: "Atlético de Madrid",     wiki: "Juan_Musso" },
        { number: 12, name: "G. Rulli",        fullName: "Gerónimo Rulli",      club: "Olympique de Marseille", wiki: "Gerónimo_Rulli" },
        { number: 23, name: "E. Martínez",     fullName: "Emiliano Martínez",   club: "Aston Villa",            wiki: "Emiliano_Martínez" }
      ],
      "Defenders": [
        { number: 2,  name: "L. Balerdi",      fullName: "Leonardo Balerdi",    club: "Olympique de Marseille", wiki: "Leonardo_Balerdi" },
        { number: 3,  name: "N. Tagliafico",   fullName: "Nicolás Tagliafico",  club: "Olympique Lyonnais",     wiki: "Nicolás_Tagliafico" },
        { number: 4,  name: "G. Montiel",      fullName: "Gonzalo Montiel",     club: "River Plate",            wiki: "Gonzalo_Montiel" },
        { number: 6,  name: "L. Martínez",     fullName: "Lisandro Martínez",   club: "Manchester United",      wiki: "Lisandro_Martínez" },
        { number: 13, name: "C. Romero",       fullName: "Cristian Romero",     club: "Tottenham Hotspur",      wiki: "Cristian_Romero" },
        { number: 19, name: "N. Otamendi",     fullName: "Nicolás Otamendi",    club: "Benfica",                wiki: "Nicolás_Otamendi" },
        { number: 25, name: "F. Medina",       fullName: "Facundo Medina",      club: "Olympique de Marseille", wiki: "Facundo_Medina_(footballer)" },
        { number: 26, name: "N. Molina",       fullName: "Nahuel Molina",       club: "Atlético de Madrid",     wiki: "Nahuel_Molina" }
      ],
      "Midfielders": [
        { number: 5,  name: "L. Paredes",      fullName: "Leandro Paredes",     club: "Boca Juniors",           wiki: "Leandro_Paredes" },
        { number: 7,  name: "R. De Paul",      fullName: "Rodrigo De Paul",     club: "Inter Miami CF",         wiki: "Rodrigo_De_Paul" },
        { number: 8,  name: "V. Barco",        fullName: "Valentín Barco",      club: "RC Strasbourg",          wiki: "Valentín_Barco" },
        { number: 11, name: "G. Lo Celso",     fullName: "Giovani Lo Celso",    club: "Real Betis",             wiki: "Giovani_Lo_Celso" },
        { number: 14, name: "E. Palacios",     fullName: "Exequiel Palacios",   club: "Bayer Leverkusen",       wiki: "Exequiel_Palacios" },
        { number: 20, name: "Mac Allister",    fullName: "Alexis Mac Allister", club: "Liverpool",              wiki: "Alexis_Mac_Allister" },
        { number: 24, name: "E. Fernández",    fullName: "Enzo Fernández",      club: "Chelsea",                wiki: "Enzo_Fernández" }
      ],
      "Forwards": [
        { number: 9,  name: "J. Álvarez",      fullName: "Julián Álvarez",      club: "Atlético de Madrid",     wiki: "Julián_Álvarez" },
        { number: 10, name: "Messi",           fullName: "Lionel Messi",        club: "Inter Miami CF",         wiki: "Lionel_Messi" },
        { number: 15, name: "N. González",     fullName: "Nicolás González",    club: "Atlético de Madrid",     wiki: "Nicolás_González_(footballer,_born_1998)" },
        { number: 16, name: "T. Almada",       fullName: "Thiago Almada",       club: "Atlético de Madrid",     wiki: "Thiago_Almada" },
        { number: 17, name: "G. Simeone",      fullName: "Giuliano Simeone",    club: "Atlético de Madrid",     wiki: "Giuliano_Simeone" },
        { number: 18, name: "N. Paz",          fullName: "Nicolás Paz",         club: "Como",                   wiki: "Nico_Paz" },
        { number: 21, name: "J. López",        fullName: "José Manuel López",   club: "Palmeiras",              wiki: "José_Manuel_López_(footballer)" },
        { number: 22, name: "L. Martínez",     fullName: "Lautaro Martínez",    club: "Internazionale",         wiki: "Lautaro_Martínez" }
      ]
    }
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
        { number: 12, name: "Weverton", fullName: "Weverton Pereira da Silva", club: "Grêmio",               wiki: "Weverton_(footballer,_born_1987)" },
        { number: 23, name: "Ederson",  fullName: "Ederson Moraes",            club: "Fenerbahçe",           wiki: "Ederson_(footballer,_born_1993)" }
      ],
      "Defenders": [
        { number: 2,  name: "Wesley",            fullName: "Wesley",                          club: "AS Roma",              wiki: "Wesley_França" },
        { number: 3,  name: "Gabriel Magalhães", fullName: "Gabriel Magalhães",               club: "Arsenal",              wiki: "Gabriel_Magalhães" },
        { number: 4,  name: "Marquinhos",        fullName: "Marcos Aoás Corrêa",              club: "Paris Saint-Germain",  image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Marquinhos_capitaine_du_PSG_2022.jpg" },
        { number: 6,  name: "Alex Sandro",       fullName: "Alex Sandro Lobo Silva",         club: "Flamengo",             wiki: "Alex_Sandro" },
        { number: 13, name: "Danilo",            fullName: "Danilo Luiz da Silva",           club: "Flamengo",             wiki: "Danilo_(footballer,_born_July_1991)" },
        { number: 14, name: "Bremer",            fullName: "Gleison Bremer Silva Nascimento",club: "Juventus",             wiki: "Gleison_Bremer" },
        { number: 15, name: "Léo Pereira",       fullName: "Léo Pereira",                   club: "Flamengo",             wiki: "Léo_Pereira_(footballer,_born_1996)" },
        { number: 16, name: "Douglas Santos",    fullName: "Douglas Santos",                 club: "Zenit St. Petersburg", wiki: "Douglas_Santos_(footballer,_born_1994)" },
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
        { number: 19, name: "Endrick",       fullName: "Endrick Felipe Moreira de Sousa",         club: "Real Madrid",          wiki: "Endrick_(footballer,_born_2006)" },
        { number: 21, name: "Luiz Henrique", fullName: "Luiz Henrique Bié",                       club: "Zenit St. Petersburg", wiki: "Luiz_Henrique_(footballer,_born_2001)" },
        { number: 22, name: "Martinelli",    fullName: "Gabriel Silva Martinelli",                club: "Arsenal",              wiki: "Gabriel_Martinelli" },
        { number: 25, name: "Igor Thiago",   fullName: "Igor Thiago",                             club: "Brentford",            wiki: "Igor_Thiago" },
        { number: 26, name: "Rayan",         fullName: "Rayan Vitor Simplício Rocha",             club: "Bournemouth",          wiki: "Rayan_(footballer,_born_2006)" }
      ]
    }
  },

  "colombia": {
    name: "Colombia",
    coach: "Néstor Lorenzo",
    flag: "co",
    group: "K",
    groupTeams: "Portugal · DR Congo · Uzbekistan",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "C. Vargas",      fullName: "Camilo Vargas",          club: "Atlas",               wiki: "Camilo_Vargas" },
        { number: 12, name: "Á. Montero",     fullName: "Álvaro Montero",         club: "Vélez Sarsfield",     wiki: "Álvaro_Montero_(Colombian_footballer)" },
        { number: 23, name: "D. Ospina",      fullName: "David Ospina",           club: "Atlético Nacional",   wiki: "David_Ospina" }
      ],
      "Defenders": [
        { number: 2,  name: "D. Muñoz",       fullName: "Daniel Muñoz",           club: "Crystal Palace",      wiki: "Daniel_Muñoz_(footballer)" },
        { number: 3,  name: "J. Mojica",      fullName: "Johan Mojica",           club: "Mallorca",            wiki: "Johan_Mojica" },
        { number: 4,  name: "S. Arias",       fullName: "Santiago Arias",         club: "Independiente",       wiki: "Santiago_Arias" },
        { number: 5,  name: "D. Sánchez",     fullName: "Dávinson Sánchez",       club: "Galatasaray",         wiki: "Davinson_Sánchez" },
        { number: 6,  name: "J. Lucumí",      fullName: "Jhon Lucumí",            club: "Bologna",             wiki: "Jhon_Lucumí" },
        { number: 13, name: "Y. Mina",        fullName: "Yerry Mina",             club: "Cagliari",            wiki: "Yerry_Mina" },
        { number: 15, name: "D. Machado",     fullName: "Déiver Machado",         club: "Nantes",              wiki: "Deiver_Machado" },
        { number: 16, name: "W. Ditta",       fullName: "Willer Ditta",           club: "Cruz Azul",           wiki: "Willer_Ditta" }
      ],
      "Midfielders": [
        { number: 8,  name: "J. Lerma",       fullName: "Jefferson Lerma",        club: "Crystal Palace",      wiki: "Jefferson_Lerma" },
        { number: 9,  name: "J. Arias",       fullName: "Jhon Arias",             club: "Palmeiras",           wiki: "Jhon_Arias_(footballer)" },
        { number: 10, name: "J. Rodríguez",   fullName: "James Rodríguez",        club: "Minnesota United",    wiki: "James_Rodríguez" },
        { number: 11, name: "J. Carrascal",   fullName: "Jorge Carrascal",        club: "Flamengo",            wiki: "Jorge_Carrascal" },
        { number: 14, name: "J. Quintero",    fullName: "Juan Fernando Quintero", club: "River Plate",         wiki: "Juan_Fernando_Quintero" },
        { number: 17, name: "R. Ríos",        fullName: "Richard Ríos",           club: "Benfica",             wiki: "Richard_Ríos" },
        { number: 18, name: "G. Puerta",      fullName: "Gustavo Puerta",         club: "Racing de Santander", wiki: "Gustavo_Puerta" },
        { number: 19, name: "K. Castaño",     fullName: "Kevin Castaño",          club: "River Plate",         wiki: "Kevin_Castaño" },
        { number: 20, name: "J. Campaz",      fullName: "Jaminton Campaz",        club: "Rosario Central",     wiki: "Jaminton_Campaz" },
        { number: 21, name: "J. Portilla",    fullName: "Juan Camilo Portilla",   club: "Athletico Paranaense",wiki: "Juan_Portilla" }
      ],
      "Forwards": [
        { number: 7,  name: "L. Díaz",        fullName: "Luis Díaz",              club: "Bayern Munich",       wiki: "Luis_Díaz_(footballer,_born_2001)" },
        { number: 22, name: "J. Córdoba",     fullName: "Jhon Córdoba",           club: "Krasnodar",           wiki: "Jhon_Córdoba" },
        { number: 24, name: "L. Suárez",      fullName: "Luis Suárez",            club: "Sporting CP",         wiki: "Luis_Suárez_(footballer,_born_1997)" },
        { number: 25, name: "Cucho Hernández",fullName: "Juan Camilo Hernández",  club: "Real Betis",          wiki: "Cucho_Hernández" },
        { number: 26, name: "C. Gómez",       fullName: "Carlos Andrés Gómez",    club: "Vasco da Gama",       wiki: "Andrés_Gómez_(footballer)" }
      ]
    }
  },

  "ecuador": {
    name: "Ecuador",
    coach: "Sebastián Beccacece",
    flag: "ec",
    group: "E",
    groupTeams: "Germany · Curaçao · Côte d'Ivoire",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Galíndez",     fullName: "Hernán Galíndez",       club: "Huracán",             wiki: "Hernán_Galíndez" },
        { number: 12, name: "Ramírez",       fullName: "Moisés Ramírez",        club: "AE Kifisias",         wiki: "Moisés_Ramírez_(goalkeeper)" },
        { number: 23, name: "Valle",         fullName: "Gonzalo Valle",         club: "LDU Quito",           wiki: "Gonzalo_Valle" }
      ],
      "Defenders": [
        { number: 2,  name: "Preciado",      fullName: "Ángelo Preciado",       club: "Atlético Mineiro",    wiki: "Ángelo_Preciado" },
        { number: 3,  name: "Estupiñán",     fullName: "Pervis Estupiñán",      club: "AC Milan",            wiki: "Pervis_Estupiñán" },
        { number: 4,  name: "Medina",        fullName: "Yaimar Medina",         club: "Racing Genk",         wiki: "Yaimar_Medina" },
        { number: 5,  name: "Pacho",         fullName: "Willian Pacho",         club: "Paris Saint-Germain", wiki: "Willian_Pacho" },
        { number: 6,  name: "Ordóñez",       fullName: "Joel Ordóñez",          club: "Club Brugge",         wiki: "Joel_Ordóñez" },
        { number: 13, name: "Torres",        fullName: "Félix Torres",          club: "Internacional",       wiki: "Félix_Torres_(footballer,_born_1997)" },
        { number: 14, name: "Hincapié",      fullName: "Piero Hincapié",        club: "Arsenal",             wiki: "Piero_Hincapié" },
        { number: 15, name: "Porozo",        fullName: "Jackson Porozo",        club: "Club Tijuana",        wiki: "Jackson_Porozo" }
      ],
      "Midfielders": [
        { number: 7,  name: "Plata",         fullName: "Gonzalo Plata",         club: "Flamengo",            wiki: "Gonzalo_Plata" },
        { number: 8,  name: "M. Caicedo",    fullName: "Moisés Caicedo",        club: "Chelsea",             wiki: "Moisés_Caicedo" },
        { number: 10, name: "K. Páez",       fullName: "Kendry Páez",           club: "River Plate",         wiki: "Kendry_Páez" },
        { number: 11, name: "Angulo",        fullName: "Nilson Angulo",         club: "Sunderland",          wiki: "Nilson_Angulo" },
        { number: 16, name: "Alcívar",       fullName: "Jordy Alcívar",         club: "Independiente del Valle", wiki: "Jordy_Alcívar" },
        { number: 17, name: "Castillo",      fullName: "Denil Castillo",        club: "FC Midtjylland",      wiki: "Denil_Castillo" },
        { number: 18, name: "Yeboah",        fullName: "John Yeboah",           club: "Venezia",             wiki: "John_Yeboah_(Ecuadorian_footballer)" },
        { number: 19, name: "Franco",        fullName: "Alan Franco",           club: "Atlético Mineiro",    wiki: "Alan_Franco" },
        { number: 20, name: "Vite",          fullName: "Pedro Vite",            club: "Pumas UNAM",          wiki: "Pedro_Vite" },
        { number: 22, name: "Minda",         fullName: "Alan Minda",            club: "Atlético Mineiro",    wiki: "Alan_Minda" }
      ],
      "Forwards": [
        { number: 9,  name: "E. Valencia",   fullName: "Enner Valencia",        club: "Pachuca",             wiki: "Enner_Valencia" },
        { number: 21, name: "K. Rodríguez",  fullName: "Kevin Rodríguez",       club: "Union Saint-Gilloise",wiki: "Kevin_Rodríguez_(footballer)" },
        { number: 24, name: "J. Caicedo",    fullName: "Jordy Caicedo",         club: "Huracán",             wiki: "Jordy_Caicedo" },
        { number: 25, name: "A. Valencia",   fullName: "Anthony Valencia",      club: "Royal Antwerp",       wiki: "Anthony_Valencia_(Ecuadorian_footballer)" },
        { number: 26, name: "Arévalo",       fullName: "Jérémy Arévalo",        club: "VfB Stuttgart",       wiki: "Jérémy_Arévalo" }
      ]
    }
  },

  "paraguay": {
    name: "Paraguay",
    coach: "Gustavo Alfaro",
    flag: "py",
    group: "D",
    groupTeams: "USA · Australia · Türkiye",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Fernández",     fullName: "Gatito Fernández",        club: "Cerro Porteño",         wiki: "Gastón_Fernández_(goalkeeper)" },
        { number: 12, name: "O. Gill",       fullName: "Orlando Gill",            club: "CA San Lorenzo",        wiki: "Orlando_Gill" },
        { number: 23, name: "Olveira",       fullName: "Gastón Olveira",          club: "Club Olimpia",          wiki: "Gastón_Olveira" }
      ],
      "Defenders": [
        { number: 2,  name: "Velázquez",     fullName: "Gustavo Velázquez",       club: "Cerro Porteño",         wiki: "Gustavo_Velázquez_(footballer)" },
        { number: 3,  name: "Balbuena",      fullName: "Fabián Balbuena",         club: "Grêmio",                wiki: "Fabián_Balbuena" },
        { number: 4,  name: "Alderete",      fullName: "Omar Alderete",           club: "Sunderland AFC",        wiki: "Omar_Alderete" },
        { number: 5,  name: "Cáceres",       fullName: "Juan José Cáceres",       club: "Dinamo Moscow",         wiki: "Juan_José_Cáceres" },
        { number: 6,  name: "G. Gómez",      fullName: "Gustavo Gómez",          club: "Palmeiras",             wiki: "Gustavo_Gómez_(footballer)" },
        { number: 13, name: "Alonso",        fullName: "Junior Alonso",           club: "Atlético Mineiro",      wiki: "Junior_Alonso" },
        { number: 15, name: "Canale",        fullName: "José Canale",             club: "CA Lanús",              wiki: "José_Canale_(footballer)" },
        { number: 21, name: "Maidana",       fullName: "Alexandro Maidana",       club: "CA Talleres",           wiki: "Alexandro_Maidana" }
      ],
      "Midfielders": [
        { number: 7,  name: "Sosa",          fullName: "Ramón Sosa",              club: "Palmeiras",             wiki: "Ramón_Sosa" },
        { number: 8,  name: "D. Gómez",      fullName: "Diego Gómez",             club: "Brighton & H.A.",       wiki: "Diego_Gómez_(footballer)" },
        { number: 14, name: "Cubas",         fullName: "Andrés Cubas",            club: "Vancouver Whitecaps",   wiki: "Andrés_Cubas" },
        { number: 16, name: "Mauricio",      fullName: "Mauricio",                club: "Palmeiras",             wiki: "Mauricio_(Paraguayan_footballer)" },
        { number: 17, name: "Bobadilla",     fullName: "Damián Bobadilla",        club: "São Paulo FC",          wiki: "Damián_Bobadilla" },
        { number: 18, name: "Ojeda",         fullName: "Braian Ojeda",            club: "Orlando City SC",       wiki: "Braian_Ojeda" },
        { number: 19, name: "Galarza",       fullName: "Matías Galarza",          club: "Atlanta United FC",     wiki: "Matías_Galarza" },
        { number: 20, name: "Caballero",     fullName: "Gustavo Caballero",       club: "CA Independiente",      wiki: "Gustavo_Caballero_(footballer)" }
      ],
      "Forwards": [
        { number: 9,  name: "Sanabria",      fullName: "Antonio Sanabria",        club: "Real Betis",            wiki: "Antonio_Sanabria" },
        { number: 10, name: "Almirón",       fullName: "Miguel Almirón",          club: "Atlanta United FC",     wiki: "Miguel_Almirón" },
        { number: 11, name: "Enciso",        fullName: "Julio Enciso",            club: "RC Strasbourg",         wiki: "Julio_Enciso" },
        { number: 22, name: "Arce",          fullName: "Álex Arce",               club: "Club León",             wiki: "Álex_Arce" },
        { number: 24, name: "Ávalos",        fullName: "Gabriel Ávalos",          club: "Club Olimpia",          wiki: "Gabriel_Ávalos_(footballer)" },
        { number: 25, name: "Pitta",         fullName: "Isidro Pitta",            club: "Guaraní AFC",           wiki: "Isidro_Pitta" }
      ]
    }
  },

  "uruguay": {
    name: "Uruguay",
    coach: "Marcelo Bielsa",
    flag: "uy",
    group: "H",
    groupTeams: "Spain · Saudi Arabia · Cape Verde",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Muslera",      fullName: "Fernando Muslera",      club: "Galatasaray",         wiki: "Fernando_Muslera" },
        { number: 12, name: "Rochet",        fullName: "Sergio Rochet",         club: "Internacional",       wiki: "Sergio_Rochet" },
        { number: 23, name: "Mele",          fullName: "Santiago Mele",         club: "Junior FC",           wiki: "Santiago_Mele" }
      ],
      "Defenders": [
        { number: 2,  name: "Varela",        fullName: "Guillermo Varela",      club: "Flamengo",            wiki: "Guillermo_Varela" },
        { number: 3,  name: "Olivera",       fullName: "Mathías Olivera",       club: "Napoli",              wiki: "Mathías_Olivera" },
        { number: 4,  name: "Cáceres",       fullName: "Sebastián Cáceres",     club: "Club América",        wiki: "Sebastián_Cáceres_(footballer)" },
        { number: 5,  name: "R. Araújo",     fullName: "Ronald Araújo",         club: "Barcelona",           wiki: "Ronald_Araújo" },
        { number: 13, name: "Giménez",       fullName: "José María Giménez",    club: "Atlético Madrid",     wiki: "José_María_Giménez" },
        { number: 16, name: "Piquerez",      fullName: "Joaquín Piquerez",      club: "Palmeiras",           wiki: "Joaquín_Piquerez" },
        { number: 17, name: "Viña",          fullName: "Matías Viña",           club: "Fluminense",          wiki: "Matías_Viña" },
        { number: 24, name: "Bueno",         fullName: "Santiago Bueno",        club: "Wolverhampton",       wiki: "Santiago_Bueno" }
      ],
      "Midfielders": [
        { number: 6,  name: "Bentancur",     fullName: "Rodrigo Bentancur",     club: "Tottenham",           wiki: "Rodrigo_Bentancur" },
        { number: 7,  name: "De la Cruz",    fullName: "Nicolás de la Cruz",    club: "Flamengo",            wiki: "Nicolás_de_la_Cruz" },
        { number: 8,  name: "Valverde",      fullName: "Federico Valverde",     club: "Real Madrid",         wiki: "Federico_Valverde" },
        { number: 10, name: "De Arrascaeta", fullName: "Giorgian de Arrascaeta",club: "Flamengo",            wiki: "Giorgian_de_Arrascaeta" },
        { number: 14, name: "Ugarte",        fullName: "Manuel Ugarte",         club: "Manchester United",   wiki: "Manuel_Ugarte_(footballer)" },
        { number: 15, name: "E. Martínez",   fullName: "Emiliano Martínez",     club: "Palmeiras",           wiki: "Emiliano_Martínez_(footballer,_born_1999)" },
        { number: 18, name: "Sanabria",      fullName: "Juan Manuel Sanabria",  club: "Atlético San Luis",   wiki: "Juan_Manuel_Sanabria" },
        { number: 19, name: "Canobbio",      fullName: "Agustín Canobbio",      club: "Fluminense",          wiki: "Agustín_Canobbio" },
        { number: 20, name: "Zalazar",       fullName: "Rodrigo Zalazar",       club: "SC Braga",            wiki: "Rodrigo_Zalazar" },
        { number: 22, name: "M. Araújo",     fullName: "Maximiliano Araújo",    club: "Sporting CP",         wiki: "Maximiliano_Araújo" },
        { number: 25, name: "Pellistri",     fullName: "Facundo Pellistri",     club: "Panathinaikos",       wiki: "Facundo_Pellistri" },
        { number: 26, name: "B. Rodríguez",  fullName: "Brian Rodríguez",       club: "Club América",        wiki: "Brian_Rodríguez_(footballer)" }
      ],
      "Forwards": [
        { number: 9,  name: "Núñez",         fullName: "Darwin Núñez",          club: "Al-Hilal",            wiki: "Darwin_Núñez" },
        { number: 11, name: "Aguirre",       fullName: "Rodrigo Aguirre",       club: "Club América",        wiki: "Rodrigo_Aguirre_(footballer)" },
        { number: 21, name: "Viñas",         fullName: "Federico Viñas",        club: "Real Oviedo",         wiki: "Federico_Viñas" }
      ]
    }
  },

  /* ── UEFA ──────────────────────────────────────────────────── */

  "england": {
    name: "England",
    coach: "Thomas Tuchel",
    flag: "gb-eng",
    group: "L",
    groupTeams: "Croatia · Ghana · Panama",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Pickford",   fullName: "Jordan Pickford",  club: "Everton",           wiki: "Jordan_Pickford" },
        { number: 13, name: "Henderson",  fullName: "Dean Henderson",   club: "Crystal Palace",    wiki: "Dean_Henderson" },
        { number: 23, name: "Trafford",   fullName: "James Trafford",   club: "Manchester City",   wiki: "James_Trafford" }
      ],
      "Defenders": [
        { number: 2,  name: "Konsa",      fullName: "Ezri Konsa",       club: "Aston Villa",       wiki: "Ezri_Konsa" },
        { number: 3,  name: "O'Reilly",   fullName: "Nico O'Reilly",    club: "Manchester City",   wiki: "Nico_O'Reilly" },
        { number: 5,  name: "Stones",     fullName: "John Stones",      club: "Manchester City",   wiki: "John_Stones" },
        { number: 6,  name: "Guehi",      fullName: "Marc Guehi",       club: "Manchester City",   wiki: "Marc_Guéhi" },
        { number: 12, name: "Livramento", fullName: "Tino Livramento",  club: "Newcastle United",  wiki: "Tino_Livramento" },
        { number: 15, name: "Burn",       fullName: "Dan Burn",         club: "Newcastle United",  wiki: "Dan_Burn" },
        { number: 24, name: "James",      fullName: "Reece James",      club: "Chelsea",           wiki: "Reece_James" },
        { number: 25, name: "Quansah",    fullName: "Jarell Quansah",   club: "Bayer Leverkusen",  wiki: "Jarell_Quansah" },
        { number: 26, name: "Spence",     fullName: "Djed Spence",      club: "Tottenham Hotspur", wiki: "Djed_Spence" }
      ],
      "Midfielders": [
        { number: 4,  name: "Rice",       fullName: "Declan Rice",      club: "Arsenal",           wiki: "Declan_Rice" },
        { number: 8,  name: "Anderson",   fullName: "Elliot Anderson",  club: "Nottingham Forest", wiki: "Elliot_Anderson_(footballer)" },
        { number: 10, name: "Bellingham", fullName: "Jude Bellingham",  club: "Real Madrid",       wiki: "Jude_Bellingham" },
        { number: 14, name: "Henderson",  fullName: "Jordan Henderson", club: "Brentford",         wiki: "Jordan_Henderson" },
        { number: 16, name: "Mainoo",     fullName: "Kobbie Mainoo",    club: "Manchester United", wiki: "Kobbie_Mainoo" },
        { number: 17, name: "Rogers",     fullName: "Morgan Rogers",    club: "Aston Villa",       wiki: "Morgan_Rogers_(footballer)" },
        { number: 21, name: "Eze",        fullName: "Eberechi Eze",     club: "Arsenal",           wiki: "Eberechi_Eze" }
      ],
      "Forwards": [
        { number: 7,  name: "Saka",       fullName: "Bukayo Saka",      club: "Arsenal",           wiki: "Bukayo_Saka" },
        { number: 9,  name: "Kane",       fullName: "Harry Kane",       club: "Bayern Munich",     wiki: "Harry_Kane" },
        { number: 11, name: "Rashford",   fullName: "Marcus Rashford",  club: "Barcelona",         wiki: "Marcus_Rashford" },
        { number: 18, name: "Gordon",     fullName: "Anthony Gordon",   club: "Newcastle United",  wiki: "Anthony_Gordon_(footballer)" },
        { number: 19, name: "Watkins",    fullName: "Ollie Watkins",    club: "Aston Villa",       wiki: "Ollie_Watkins" },
        { number: 20, name: "Madueke",    fullName: "Noni Madueke",     club: "Chelsea",           wiki: "Noni_Madueke" },
        { number: 22, name: "Toney",      fullName: "Ivan Toney",       club: "Al-Ahli",           wiki: "Ivan_Toney" }
      ]
    }
  },

  "france": {
    name: "France",
    coach: "Didier Deschamps",
    flag: "fr",
    group: "I",
    groupTeams: "Senegal · Norway · Iraq",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Samba",      fullName: "Brice Samba",         club: "Rennes",               wiki: "Brice_Samba" },
        { number: 16, name: "Maignan",    fullName: "Mike Maignan",        club: "AC Milan",             wiki: "Mike_Maignan" },
        { number: 23, name: "Risser",     fullName: "Robin Risser",        club: "Lens",                 wiki: "Robin_Risser" }
      ],
      "Defenders": [
        { number: 2,  name: "Gusto",      fullName: "Malo Gusto",          club: "Chelsea",              wiki: "Malo_Gusto" },
        { number: 3,  name: "Digne",      fullName: "Lucas Digne",         club: "Aston Villa",          wiki: "Lucas_Digne" },
        { number: 4,  name: "Upamecano", fullName: "Dayot Upamecano",     club: "Bayern Munich",        wiki: "Dayot_Upamecano" },
        { number: 5,  name: "Kounde",     fullName: "Jules Koundé",        club: "Barcelona",            wiki: "Jules_Koundé" },
        { number: 15, name: "Konate",     fullName: "Ibrahima Konaté",     club: "Liverpool",            wiki: "Ibrahima_Konaté" },
        { number: 17, name: "Saliba",     fullName: "William Saliba",      club: "Arsenal",              wiki: "William_Saliba" },
        { number: 19, name: "T. Hernandez", fullName: "Theo Hernandez",   club: "Al Hilal",             wiki: "Théo_Hernandez" },
        { number: 21, name: "L. Hernandez", fullName: "Lucas Hernandez",  club: "Paris Saint-Germain",  wiki: "Lucas_Hernández_(footballer)" },
        { number: 26, name: "Lacroix",    fullName: "Maxence Lacroix",     club: "Crystal Palace",       wiki: "Maxence_Lacroix" }
      ],
      "Midfielders": [
        { number: 6,  name: "Kone",       fullName: "Manu Koné",           club: "AS Roma",              wiki: "Manu_Koné" },
        { number: 8,  name: "Tchouameni", fullName: "Aurélien Tchouaméni", club: "Real Madrid",          wiki: "Aurélien_Tchouaméni" },
        { number: 13, name: "Kante",      fullName: "N'Golo Kanté",        club: "Fenerbahçe",           wiki: "N'Golo_Kanté" },
        { number: 14, name: "Rabiot",     fullName: "Adrien Rabiot",       club: "AC Milan",             wiki: "Adrien_Rabiot" },
        { number: 18, name: "Zaire-Emery", fullName: "Warren Zaïre-Emery", club: "Paris Saint-Germain", wiki: "Warren_Zaïre-Emery" }
      ],
      "Forwards": [
        { number: 7,  name: "Dembele",    fullName: "Ousmane Dembélé",     club: "Paris Saint-Germain",  wiki: "Ousmane_Dembélé" },
        { number: 9,  name: "Thuram",     fullName: "Marcus Thuram",       club: "Inter Milan",          wiki: "Marcus_Thuram" },
        { number: 10, name: "Mbappe",     fullName: "Kylian Mbappé",       club: "Real Madrid",          wiki: "Kylian_Mbappé" },
        { number: 11, name: "Olise",      fullName: "Michael Olise",       club: "Bayern Munich",        wiki: "Michael_Olise" },
        { number: 12, name: "Barcola",    fullName: "Bradley Barcola",     club: "Paris Saint-Germain",  wiki: "Bradley_Barcola" },
        { number: 20, name: "Doue",       fullName: "Désiré Doué",         club: "Paris Saint-Germain",  wiki: "Désiré_Doué" },
        { number: 22, name: "Mateta",     fullName: "Jean-Philippe Mateta", club: "Crystal Palace",      wiki: "Jean-Philippe_Mateta" },
        { number: 24, name: "Cherki",     fullName: "Rayan Cherki",        club: "Manchester City",      wiki: "Rayan_Cherki" },
        { number: 25, name: "Akliouche", fullName: "Maghnes Akliouche",   club: "Monaco",               wiki: "Maghnes_Akliouche" }
      ]
    }
  },

  "germany": {
    name: "Germany",
    coach: "Julian Nagelsmann",
    flag: "de",
    group: "E",
    groupTeams: "Ecuador · Curaçao · Côte d'Ivoire",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Neuer",    fullName: "Manuel Neuer",      club: "Bayern Munich",        wiki: "Manuel_Neuer" },
        { number: 12, name: "Baumann",  fullName: "Oliver Baumann",    club: "Hoffenheim",           wiki: "Oliver_Baumann" },
        { number: 21, name: "Nübel",    fullName: "Alexander Nübel",   club: "VfB Stuttgart",        wiki: "Alexander_Nübel" }
      ],
      "Defenders": [
        { number: 2,  name: "Rüdiger",       fullName: "Antonio Rüdiger",      club: "Real Madrid",           wiki: "Antonio_Rüdiger" },
        { number: 3,  name: "Anton",          fullName: "Waldemar Anton",       club: "Borussia Dortmund",     wiki: "Waldemar_Anton" },
        { number: 4,  name: "Tah",            fullName: "Jonathan Tah",         club: "Bayern Munich",         wiki: "Jonathan_Tah" },
        { number: 5,  name: "Pavlovic",       fullName: "Aleksandar Pavlovic",  club: "Bayern Munich",         wiki: "Aleksandar_Pavlović" },
        { number: 15, name: "Schlotterbeck",  fullName: "Nico Schlotterbeck",   club: "Borussia Dortmund",     wiki: "Nico_Schlotterbeck" },
        { number: 18, name: "Brown",          fullName: "Nathaniel Brown",      club: "Eintracht Frankfurt",   wiki: "Nathaniel_Brown_(footballer)" },
        { number: 22, name: "Raum",           fullName: "David Raum",           club: "RB Leipzig",            wiki: "David_Raum" },
        { number: 24, name: "Thiaw",          fullName: "Malick Thiaw",         club: "Newcastle United",      wiki: "Malick_Thiaw" }
      ],
      "Midfielders": [
        { number: 6,  name: "Kimmich",   fullName: "Joshua Kimmich",    club: "Bayern Munich",         wiki: "Joshua_Kimmich" },
        { number: 8,  name: "Goretzka",  fullName: "Leon Goretzka",     club: "Bayern Munich",         wiki: "Leon_Goretzka" },
        { number: 10, name: "Musiala",   fullName: "Jamal Musiala",     club: "Bayern Munich",         wiki: "Jamal_Musiala" },
        { number: 13, name: "Groß",      fullName: "Pascal Groß",       club: "Brighton & Hove Albion",wiki: "Pascal_Groß" },
        { number: 16, name: "Stiller",   fullName: "Angelo Stiller",    club: "VfB Stuttgart",         wiki: "Angelo_Stiller" },
        { number: 17, name: "Wirtz",     fullName: "Florian Wirtz",     club: "Liverpool",             wiki: "Florian_Wirtz" },
        { number: 20, name: "Amiri",     fullName: "Nadiem Amiri",      club: "Mainz",                 wiki: "Nadiem_Amiri" },
        { number: 23, name: "Nmecha",    fullName: "Felix Nmecha",      club: "Borussia Dortmund",     wiki: "Felix_Nmecha" }
      ],
      "Forwards": [
        { number: 7,  name: "Havertz",    fullName: "Kai Havertz",       club: "Arsenal",               wiki: "Kai_Havertz" },
        { number: 9,  name: "Leweling",   fullName: "Jamie Leweling",    club: "VfB Stuttgart",         wiki: "Jamie_Leweling" },
        { number: 11, name: "Woltemade",  fullName: "Nick Woltemade",    club: "Newcastle United",      wiki: "Nick_Woltemade" },
        { number: 14, name: "Beier",      fullName: "Maximilian Beier",  club: "Borussia Dortmund",     wiki: "Maximilian_Beier" },
        { number: 19, name: "Sané",       fullName: "Leroy Sané",        club: "Galatasaray",           wiki: "Leroy_Sané" },
        { number: 25, name: "Ouédraogo",  fullName: "Assan Ouédraogo",   club: "Schalke 04",            wiki: "Assan_Ouédraogo" },
        { number: 26, name: "Undav",      fullName: "Deniz Undav",       club: "VfB Stuttgart",         wiki: "Deniz_Undav" }
      ]
    }
  },

  "spain": {
    name: "Spain",
    coach: "Luis de la Fuente",
    flag: "es",
    group: "H",
    groupTeams: "Uruguay · Saudi Arabia · Cape Verde",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Raya",    fullName: "David Raya",    club: "Arsenal",         wiki: "David_Raya" },
        { number: 13, name: "García",  fullName: "Joan García",   club: "Espanyol",        wiki: "Joan_García_(goalkeeper)" },
        { number: 23, name: "Simón",   fullName: "Unai Simón",    club: "Athletic Club",   wiki: "Unai_Simón" }
      ],
      "Defenders": [
        { number: 2,  name: "Pubill",    fullName: "Marc Pubill",        club: "Almería",          wiki: "Marc_Pubill" },
        { number: 3,  name: "Grimaldo",  fullName: "Alejandro Grimaldo", club: "Bayer Leverkusen", wiki: "Álex_Grimaldo" },
        { number: 4,  name: "E. García", fullName: "Eric García",        club: "Girona",           wiki: "Eric_García_(footballer,_born_2001)" },
        { number: 12, name: "Porro",     fullName: "Pedro Porro",        club: "Tottenham Hotspur",wiki: "Pedro_Porro" },
        { number: 14, name: "Laporte",   fullName: "Aymeric Laporte",    club: "Al-Nassr",         wiki: "Aymeric_Laporte" },
        { number: 22, name: "Cubarsí",   fullName: "Pau Cubarsí",        club: "FC Barcelona",     wiki: "Pau_Cubarsí" },
        { number: 24, name: "Cucurella", fullName: "Marc Cucurella",     club: "Chelsea",          wiki: "Marc_Cucurella" },
        { number: 25, name: "Muñoz",     fullName: "Víctor Muñoz",       club: "Girona",           wiki: "Víctor_Muñoz_(footballer)" }
      ],
      "Midfielders": [
        { number: 5,  name: "Llorente",  fullName: "Marcos Llorente",  club: "Atlético Madrid",  wiki: "Marcos_Llorente" },
        { number: 6,  name: "Merino",    fullName: "Mikel Merino",     club: "Arsenal",           wiki: "Mikel_Merino" },
        { number: 8,  name: "Fabián",    fullName: "Fabián Ruiz",      club: "PSG",               wiki: "Fabián_Ruiz" },
        { number: 9,  name: "Gavi",      fullName: "Gavi",             club: "FC Barcelona",      wiki: "Gavi_(footballer,_born_2004)" },
        { number: 16, name: "Rodri",     fullName: "Rodri",            club: "Manchester City",   wiki: "Rodri_(footballer,_born_1996)" },
        { number: 18, name: "Zubimendi", fullName: "Martín Zubimendi", club: "Arsenal",           wiki: "Martín_Zubimendi" },
        { number: 20, name: "Pedri",     fullName: "Pedri",            club: "FC Barcelona",      wiki: "Pedri" }
      ],
      "Forwards": [
        { number: 7,  name: "F. Torres",   fullName: "Ferran Torres",   club: "FC Barcelona",    wiki: "Ferran_Torres" },
        { number: 10, name: "D. Olmo",     fullName: "Dani Olmo",       club: "FC Barcelona",    wiki: "Dani_Olmo" },
        { number: 11, name: "Pino",        fullName: "Yeremy Pino",     club: "Villarreal",      wiki: "Yeremy_Pino" },
        { number: 15, name: "Baena",       fullName: "Álex Baena",      club: "Villarreal",      wiki: "Álex_Baena" },
        { number: 17, name: "N. Williams", fullName: "Nico Williams",   club: "Athletic Club",   wiki: "Nico_Williams" },
        { number: 19, name: "Yamal",       fullName: "Lamine Yamal",    club: "FC Barcelona",    wiki: "Lamine_Yamal" },
        { number: 21, name: "Oyarzabal",   fullName: "Mikel Oyarzabal", club: "Real Sociedad",   wiki: "Mikel_Oyarzabal" },
        { number: 26, name: "Iglesias",    fullName: "Borja Iglesias",  club: "Real Betis",      wiki: "Borja_Iglesias" }
      ]
    }
  },

  "portugal": {
    name: "Portugal",
    coach: "Roberto Martínez",
    flag: "pt",
    group: "K",
    groupTeams: "Colombia · DR Congo · Uzbekistan",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "D. Costa", fullName: "Diogo Costa",  club: "FC Porto",                   wiki: "Diogo_Costa" },
        { number: 12, name: "José Sá",  fullName: "José Sá",      club: "Wolverhampton Wanderers",     wiki: "José_Sá" },
        { number: 22, name: "Rui Silva",fullName: "Rui Silva",    club: "Sporting CP",                 wiki: "Rui_Silva_(goalkeeper)" }
      ],
      "Defenders": [
        { number: 2,  name: "Semedo",    fullName: "Nélson Semedo",    club: "Fenerbahçe",          wiki: "Nélson_Semedo" },
        { number: 3,  name: "R. Dias",   fullName: "Rúben Dias",       club: "Manchester City",     wiki: "Rúben_Dias" },
        { number: 4,  name: "T. Araújo", fullName: "Tomás Araújo",     club: "Benfica",             wiki: "Tomás_Araújo" },
        { number: 5,  name: "Dalot",     fullName: "Diogo Dalot",      club: "Manchester United",   wiki: "Diogo_Dalot" },
        { number: 13, name: "R. Veiga",  fullName: "Renato Veiga",     club: "Villarreal",          wiki: "Renato_Veiga" },
        { number: 14, name: "G. Inácio", fullName: "Gonçalo Inácio",   club: "Sporting CP",         wiki: "Gonçalo_Inácio" },
        { number: 20, name: "Cancelo",   fullName: "João Cancelo",     club: "FC Barcelona",        wiki: "João_Cancelo" },
        { number: 25, name: "N. Mendes", fullName: "Nuno Mendes",      club: "Paris Saint-Germain", wiki: "Nuno_Mendes_(footballer,_born_2002)" }
      ],
      "Midfielders": [
        { number: 6,  name: "M. Nunes",    fullName: "Matheus Nunes",    club: "Manchester City",    wiki: "Matheus_Nunes" },
        { number: 8,  name: "B. Fernandes",fullName: "Bruno Fernandes",  club: "Manchester United",  wiki: "Bruno_Fernandes" },
        { number: 15, name: "J. Neves",    fullName: "João Neves",       club: "Paris Saint-Germain",wiki: "João_Neves_(footballer)" },
        { number: 21, name: "R. Neves",    fullName: "Rúben Neves",      club: "Al Hilal",           wiki: "Rúben_Neves" },
        { number: 23, name: "Vitinha",     fullName: "Vitinha",          club: "Paris Saint-Germain",wiki: "Vitinha_(footballer,_born_February_2000)" },
        { number: 24, name: "Samú",        fullName: "Samú Costa",       club: "Mallorca",           wiki: "Samú_Costa_(footballer)" }
      ],
      "Forwards": [
        { number: 7,  name: "Ronaldo",    fullName: "Cristiano Ronaldo",   club: "Al Nassr",           wiki: "Cristiano_Ronaldo" },
        { number: 9,  name: "G. Ramos",   fullName: "Gonçalo Ramos",       club: "Paris Saint-Germain",wiki: "Gonçalo_Ramos" },
        { number: 10, name: "Bernardo",   fullName: "Bernardo Silva",      club: "Manchester City",    wiki: "Bernardo_Silva" },
        { number: 11, name: "João Félix", fullName: "João Félix",          club: "Al Nassr",           wiki: "João_Félix" },
        { number: 16, name: "Trincão",    fullName: "Francisco Trincão",   club: "Sporting CP",        wiki: "Francisco_Trincão" },
        { number: 17, name: "R. Leão",    fullName: "Rafael Leão",         club: "AC Milan",           wiki: "Rafael_Leão" },
        { number: 18, name: "Pedro Neto", fullName: "Pedro Neto",          club: "Chelsea",            wiki: "Pedro_Neto" },
        { number: 19, name: "G. Guedes",  fullName: "Gonçalo Guedes",      club: "Real Sociedad",      wiki: "Gonçalo_Guedes" },
        { number: 26, name: "Conceição",  fullName: "Francisco Conceição", club: "Juventus",           wiki: "Francisco_Conceição_(footballer)" }
      ]
    }
  },

  "netherlands": {
    name: "Netherlands",
    coach: "Ronald Koeman",
    flag: "nl",
    group: "F",
    groupTeams: "Japan · Sweden · Tunisia",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Verbruggen", fullName: "Bart Verbruggen", club: "Brighton & Hove Albion", wiki: "Bart_Verbruggen" },
        { number: 13, name: "Roefs",      fullName: "Robin Roefs",     club: "Sunderland",             wiki: "Robin_Roefs" },
        { number: 23, name: "Flekken",    fullName: "Mark Flekken",    club: "Bayer Leverkusen",        wiki: "Mark_Flekken" }
      ],
      "Defenders": [
        { number: 2,  name: "J. Timber",  fullName: "Jurriën Timber",     club: "Arsenal",               wiki: "Jurriën_Timber" },
        { number: 4,  name: "Van Dijk",   fullName: "Virgil van Dijk",    club: "Liverpool",             wiki: "Virgil_van_Dijk" },
        { number: 5,  name: "Aké",        fullName: "Nathan Aké",         club: "Manchester City",       wiki: "Nathan_Aké" },
        { number: 6,  name: "Dumfries",   fullName: "Denzel Dumfries",    club: "Inter Milan",           wiki: "Denzel_Dumfries" },
        { number: 7,  name: "Hato",       fullName: "Jorrel Hato",        club: "Chelsea",               wiki: "Jorrel_Hato" },
        { number: 8,  name: "Van de Ven", fullName: "Micky van de Ven",   club: "Tottenham Hotspur",     wiki: "Micky_van_de_Ven" },
        { number: 9,  name: "Van Hecke",  fullName: "Jan Paul van Hecke", club: "Brighton & Hove Albion",wiki: "Jan_Paul_van_Hecke" }
      ],
      "Midfielders": [
        { number: 3,  name: "De Roon",      fullName: "Marten de Roon",     club: "Atalanta",              wiki: "Marten_de_Roon" },
        { number: 10, name: "F. De Jong",   fullName: "Frenkie de Jong",    club: "FC Barcelona",          wiki: "Frenkie_de_Jong" },
        { number: 11, name: "Gravenberch", fullName: "Ryan Gravenberch",   club: "Liverpool",             wiki: "Ryan_Gravenberch" },
        { number: 12, name: "Koopmeiners", fullName: "Teun Koopmeiners",   club: "Juventus",              wiki: "Teun_Koopmeiners" },
        { number: 14, name: "Reijnders",   fullName: "Tijjani Reijnders",  club: "Manchester City",       wiki: "Tijjani_Reijnders" },
        { number: 15, name: "Til",         fullName: "Guus Til",           club: "PSV Eindhoven",         wiki: "Guus_Til" },
        { number: 16, name: "Q. Timber",   fullName: "Quinten Timber",     club: "Olympique Marseille",   wiki: "Quinten_Timber" },
        { number: 17, name: "Wieffer",     fullName: "Mats Wieffer",       club: "Brighton & Hove Albion",wiki: "Mats_Wieffer" }
      ],
      "Forwards": [
        { number: 18, name: "Gakpo",        fullName: "Cody Gakpo",            club: "Liverpool",         wiki: "Cody_Gakpo" },
        { number: 19, name: "Depay",        fullName: "Memphis Depay",         club: "Corinthians",       wiki: "Memphis_Depay" },
        { number: 20, name: "Malen",        fullName: "Donyell Malen",         club: "AS Roma",           wiki: "Donyell_Malen" },
        { number: 21, name: "Brobbey",      fullName: "Brian Brobbey",         club: "Sunderland",        wiki: "Brian_Brobbey" },
        { number: 22, name: "Weghorst",     fullName: "Wout Weghorst",         club: "Ajax",              wiki: "Wout_Weghorst" },
        { number: 24, name: "Kluivert",     fullName: "Justin Kluivert",       club: "Bournemouth",       wiki: "Justin_Kluivert" },
        { number: 25, name: "Lang",         fullName: "Noa Lang",              club: "Galatasaray",       wiki: "Noa_Lang" },
        { number: 26, name: "Summerville",  fullName: "Crysencio Summerville", club: "West Ham United",   wiki: "Crysencio_Summerville" }
      ]
    }
  },

  "belgium": {
    name: "Belgium",
    coach: "Rudi Garcia",
    flag: "be",
    group: "G",
    groupTeams: "Iran · Egypt · New Zealand",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Courtois",  fullName: "Thibaut Courtois",  club: "Real Madrid",        wiki: "Thibaut_Courtois" },
        { number: 12, name: "Lammens",   fullName: "Senne Lammens",     club: "Manchester United",  wiki: "Senne_Lammens" },
        { number: 13, name: "Penders",   fullName: "Mike Penders",      club: "Racing Strasbourg",  wiki: "Mike_Penders" }
      ],
      "Defenders": [
        { number: 2,  name: "Debast",    fullName: "Zeno Debast",       club: "Sporting CP",               wiki: "Zeno_Debast" },
        { number: 3,  name: "Theate",    fullName: "Arthur Theate",     club: "Eintracht Frankfurt",       wiki: "Arthur_Theate" },
        { number: 4,  name: "Mechele",   fullName: "Brandon Mechele",   club: "Club Brugge",               wiki: "Brandon_Mechele" },
        { number: 5,  name: "De Cuyper", fullName: "Maxim De Cuyper",   club: "Brighton & Hove Albion",    wiki: "Maxim_De_Cuyper" },
        { number: 15, name: "Meunier",   fullName: "Thomas Meunier",    club: "Lille",                     wiki: "Thomas_Meunier" },
        { number: 16, name: "De Winter", fullName: "Koni De Winter",    club: "AC Milan",                  wiki: "Koni_De_Winter" },
        { number: 18, name: "Seys",      fullName: "Joaquin Seys",      club: "Club Brugge",               wiki: "Joaquin_Seys" },
        { number: 21, name: "Castagne",  fullName: "Timothy Castagne",  club: "Fulham",                    wiki: "Timothy_Castagne" },
        { number: 25, name: "Ngoy",      fullName: "Nathan Ngoy",       club: "Lille",                     wiki: "Nathan_Ngoy" }
      ],
      "Midfielders": [
        { number: 6,  name: "Witsel",    fullName: "Axel Witsel",       club: "Girona",              wiki: "Axel_Witsel" },
        { number: 7,  name: "De Bruyne", fullName: "Kevin De Bruyne",   club: "Napoli",              wiki: "Kevin_De_Bruyne" },
        { number: 8,  name: "Tielemans", fullName: "Youri Tielemans",   club: "Aston Villa",         wiki: "Youri_Tielemans" },
        { number: 20, name: "Vanaken",   fullName: "Hans Vanaken",      club: "Club Brugge",         wiki: "Hans_Vanaken" },
        { number: 23, name: "Raskin",    fullName: "Nicolas Raskin",    club: "Rangers",             wiki: "Nicolas_Raskin" },
        { number: 24, name: "Onana",     fullName: "Amadou Onana",      club: "Aston Villa",         wiki: "Amadou_Onana" }
      ],
      "Forwards": [
        { number: 9,  name: "Lukaku",         fullName: "Romelu Lukaku",          club: "Napoli",       wiki: "Romelu_Lukaku" },
        { number: 10, name: "Trossard",       fullName: "Leandro Trossard",       club: "Arsenal",      wiki: "Leandro_Trossard" },
        { number: 11, name: "Doku",           fullName: "Jeremy Doku",            club: "Manchester City",wiki: "Jérémy_Doku" },
        { number: 14, name: "Lukebakio",      fullName: "Dodi Lukebakio",         club: "Benfica",      wiki: "Dodi_Lukebakio" },
        { number: 17, name: "De Ketelaere",   fullName: "Charles De Ketelaere",   club: "Atalanta",     wiki: "Charles_De_Ketelaere" },
        { number: 19, name: "Moreira",        fullName: "Diego Moreira",          club: "Strasbourg",   wiki: "Diego_Moreira_(footballer)" },
        { number: 22, name: "Saelemaekers",   fullName: "Alexis Saelemaekers",    club: "AC Milan",     wiki: "Alexis_Saelemaekers" },
        { number: 26, name: "Fernandez-Pardo",fullName: "Matias Fernandez-Pardo", club: "Lille",        wiki: "Matías_Fernández-Pardo" }
      ]
    }
  },

  "croatia": {
    name: "Croatia",
    coach: "Zlatko Dalić",
    flag: "hr",
    group: "L",
    groupTeams: "England · Ghana · Panama",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Livaković",   fullName: "Dominik Livaković",     club: "Dinamo Zagreb",       wiki: "Dominik_Livaković" },
        { number: 12, name: "Kotarski",     fullName: "Dominik Kotarski",      club: "FC Copenhagen",       wiki: "Dominik_Kotarski" },
        { number: 23, name: "Pandur",       fullName: "Ivor Pandur",           club: "Hull City",           wiki: "Ivor_Pandur" }
      ],
      "Defenders": [
        { number: 2,  name: "Stanišić",     fullName: "Josip Stanišić",        club: "Bayern Munich",       wiki: "Josip_Stanišić" },
        { number: 3,  name: "Erlić",        fullName: "Martin Erlić",          club: "Midtjylland",         wiki: "Martin_Erlić" },
        { number: 4,  name: "Gvardiol",     fullName: "Joško Gvardiol",        club: "Manchester City",     wiki: "Joško_Gvardiol" },
        { number: 5,  name: "Ćaleta-Car",   fullName: "Duje Ćaleta-Car",       club: "Real Sociedad",       wiki: "Duje_Ćaleta-Car" },
        { number: 6,  name: "Šutalo",       fullName: "Josip Šutalo",          club: "Ajax",                wiki: "Josip_Šutalo" },
        { number: 15, name: "Pongračić",    fullName: "Marin Pongračić",       club: "Fiorentina",          wiki: "Marin_Pongračić" },
        { number: 16, name: "Vušković",     fullName: "Luka Vušković",         club: "Hamburg",             wiki: "Luka_Vušković" }
      ],
      "Midfielders": [
        { number: 7,  name: "Vlašić",       fullName: "Nikola Vlašić",         club: "Torino",              wiki: "Nikola_Vlašić" },
        { number: 8,  name: "Kovačić",      fullName: "Mateo Kovačić",         club: "Manchester City",     wiki: "Mateo_Kovačić" },
        { number: 10, name: "Modrić",       fullName: "Luka Modrić",           club: "AC Milan",            wiki: "Luka_Modrić" },
        { number: 14, name: "M. Pašalić",   fullName: "Mario Pašalić",         club: "Atalanta",            wiki: "Mario_Pašalić" },
        { number: 17, name: "Baturina",     fullName: "Martin Baturina",       club: "Como",                wiki: "Martin_Baturina" },
        { number: 18, name: "Jakić",        fullName: "Kristijan Jakić",       club: "Augsburg",            wiki: "Kristijan_Jakić" },
        { number: 19, name: "L. Sučić",     fullName: "Luka Sučić",            club: "Real Sociedad",       wiki: "Luka_Sučić" },
        { number: 20, name: "Moro",         fullName: "Nikola Moro",           club: "Bologna",             wiki: "Nikola_Moro" },
        { number: 24, name: "P. Sučić",     fullName: "Petar Sučić",           club: "Inter Milan",         wiki: "Petar_Sučić" },
        { number: 25, name: "Fruk",         fullName: "Toni Fruk",             club: "Rijeka",              wiki: "Toni_Fruk" }
      ],
      "Forwards": [
        { number: 9,  name: "Kramarić",     fullName: "Andrej Kramarić",       club: "Hoffenheim",          wiki: "Andrej_Kramarić" },
        { number: 11, name: "Perišić",      fullName: "Ivan Perišić",          club: "PSV Eindhoven",       wiki: "Ivan_Perišić" },
        { number: 13, name: "Matanović",    fullName: "Igor Matanović",        club: "Freiburg",            wiki: "Igor_Matanović" },
        { number: 21, name: "Budimir",      fullName: "Ante Budimir",          club: "Osasuna",             wiki: "Ante_Budimir" },
        { number: 22, name: "Ma. Pašalić",  fullName: "Marco Pašalić",         club: "Orlando City",        wiki: "Marco_Pašalić" },
        { number: 26, name: "Musa",         fullName: "Petar Musa",            club: "Dallas",              wiki: "Petar_Musa" }
      ]
    }
  },

  "austria": {
    name: "Austria",
    coach: "Ralf Rangnick",
    flag: "at",
    group: "J",
    groupTeams: "Argentina · Algeria · Jordan",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "A. Schlager",   fullName: "Alexander Schlager",      club: "RB Salzburg",           wiki: "Alexander_Schlager" },
        { number: 12, name: "Pentz",         fullName: "Patrick Pentz",           club: "Brøndby IF",            wiki: "Patrick_Pentz" },
        { number: 23, name: "Wiegele",       fullName: "Florian Wiegele",         club: "Viktoria Plzeň",        wiki: "Florian_Wiegele" }
      ],
      "Defenders": [
        { number: 2,  name: "Posch",         fullName: "Stefan Posch",            club: "FSV Mainz 05",          wiki: "Stefan_Posch" },
        { number: 3,  name: "Friedl",        fullName: "Marco Friedl",            club: "Werder Bremen",         wiki: "Marco_Friedl" },
        { number: 4,  name: "Danso",         fullName: "Kevin Danso",             club: "Tottenham Hotspur",     wiki: "Kevin_Danso" },
        { number: 5,  name: "Lienhart",      fullName: "Philipp Lienhart",        club: "SC Freiburg",           wiki: "Philipp_Lienhart" },
        { number: 6,  name: "Prass",         fullName: "Alexander Prass",         club: "TSG Hoffenheim",        wiki: "Alexander_Prass" },
        { number: 8,  name: "Alaba",         fullName: "David Alaba",             club: "Real Madrid",           wiki: "David_Alaba" },
        { number: 13, name: "Mwene",         fullName: "Phillipp Mwene",          club: "FSV Mainz 05",          wiki: "Phillipp_Mwene" },
        { number: 15, name: "Affengruber",   fullName: "David Affengruber",       club: "Elche CF",              wiki: "David_Affengruber" },
        { number: 21, name: "Svoboda",       fullName: "Michael Svoboda",         club: "Venezia FC",            wiki: "Michael_Svoboda_(footballer)" }
      ],
      "Midfielders": [
        { number: 9,  name: "Sabitzer",      fullName: "Marcel Sabitzer",         club: "Borussia Dortmund",     wiki: "Marcel_Sabitzer" },
        { number: 14, name: "Seiwald",       fullName: "Nicolas Seiwald",         club: "RB Leipzig",            wiki: "Nicolas_Seiwald" },
        { number: 16, name: "X. Schlager",   fullName: "Xaver Schlager",          club: "RB Leipzig",            wiki: "Xaver_Schlager" },
        { number: 17, name: "Grillitsch",    fullName: "Florian Grillitsch",      club: "SC Braga",              wiki: "Florian_Grillitsch" },
        { number: 18, name: "Chukwuemeka",   fullName: "Carney Chukwuemeka",      club: "Borussia Dortmund",     wiki: "Carney_Chukwuemeka" },
        { number: 19, name: "Baumgartner",   fullName: "Christoph Baumgartner",   club: "RB Leipzig",            wiki: "Christoph_Baumgartner" },
        { number: 20, name: "Laimer",        fullName: "Konrad Laimer",           club: "Bayern München",        wiki: "Konrad_Laimer" },
        { number: 22, name: "Schmid",        fullName: "Romano Schmid",           club: "Werder Bremen",         wiki: "Romano_Schmid" },
        { number: 24, name: "Wimmer",        fullName: "Patrick Wimmer",          club: "VfL Wolfsburg",         wiki: "Patrick_Wimmer" },
        { number: 25, name: "Wanner",        fullName: "Paul Wanner",             club: "PSV Eindhoven",         wiki: "Paul_Wanner" },
        { number: 26, name: "Schöpf",        fullName: "Alessandro Schöpf",       club: "Wolfsberger AC",        wiki: "Alessandro_Schöpf" }
      ],
      "Forwards": [
        { number: 7,  name: "Arnautović",    fullName: "Marko Arnautović",        club: "Crvena Zvezda",         wiki: "Marko_Arnautović" },
        { number: 10, name: "Gregoritsch",   fullName: "Michael Gregoritsch",     club: "FC Augsburg",           wiki: "Michael_Gregoritsch" },
        { number: 11, name: "Kalajdžić",     fullName: "Saša Kalajdžić",         club: "LASK",                  wiki: "Saša_Kalajdžić" }
      ]
    }
  },

  "switzerland": {
    name: "Switzerland",
    coach: "Murat Yakin",
    flag: "ch",
    group: "B",
    groupTeams: "Canada · Bosnia & Herzegovina · Qatar",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Kobel",        fullName: "Gregor Kobel",          club: "Borussia Dortmund",   wiki: "Gregor_Kobel" },
        { number: 12, name: "Mvogo",         fullName: "Yvon Mvogo",            club: "Lorient",             wiki: "Yvon_Mvogo" },
        { number: 21, name: "Keller",        fullName: "Marvin Keller",         club: "BSC Young Boys",      wiki: "Marvin_Keller_(footballer)" }
      ],
      "Defenders": [
        { number: 2,  name: "Widmer",        fullName: "Silvan Widmer",         club: "Mainz",               wiki: "Silvan_Widmer" },
        { number: 3,  name: "Elvedi",        fullName: "Nico Elvedi",           club: "Borussia M'gladbach", wiki: "Nico_Elvedi" },
        { number: 4,  name: "Akanji",        fullName: "Manuel Akanji",         club: "Inter Milan",         wiki: "Manuel_Akanji" },
        { number: 5,  name: "Muheim",        fullName: "Miro Muheim",           club: "Hamburger SV",        wiki: "Miro_Muheim" },
        { number: 6,  name: "Jaquez",        fullName: "Luca Jaquez",           club: "VfB Stuttgart",       wiki: "Luca_Jaquez" },
        { number: 13, name: "Rodríguez",     fullName: "Ricardo Rodríguez",     club: "Real Betis",          wiki: "Ricardo_Rodríguez_(footballer)" },
        { number: 18, name: "Cömert",        fullName: "Eray Cömert",           club: "Valencia",            wiki: "Eray_Cömert" },
        { number: 24, name: "Amenda",        fullName: "Aurèle Amenda",         club: "Eintracht Frankfurt", wiki: "Aurèle_Amenda" }
      ],
      "Midfielders": [
        { number: 8,  name: "Freuler",       fullName: "Remo Freuler",          club: "Bologna",             wiki: "Remo_Freuler" },
        { number: 9,  name: "Manzambi",      fullName: "Johan Manzambi",        club: "SC Freiburg",         wiki: "Johan_Manzambi" },
        { number: 10, name: "Xhaka",         fullName: "Granit Xhaka",          club: "Sunderland",          wiki: "Granit_Xhaka" },
        { number: 14, name: "Jashari",       fullName: "Ardon Jashari",         club: "AC Milan",            wiki: "Ardon_Jashari" },
        { number: 15, name: "Sow",           fullName: "Djibril Sow",           club: "Sevilla",             wiki: "Djibril_Sow" },
        { number: 16, name: "Fassnacht",     fullName: "Christian Fassnacht",   club: "BSC Young Boys",      wiki: "Christian_Fassnacht" },
        { number: 20, name: "Aebischer",     fullName: "Michel Aebischer",      club: "Pisa",                wiki: "Michel_Aebischer" },
        { number: 22, name: "Rieder",        fullName: "Fabian Rieder",         club: "FC Augsburg",         wiki: "Fabian_Rieder" },
        { number: 25, name: "Zakaria",       fullName: "Denis Zakaria",         club: "Monaco",              wiki: "Denis_Zakaria" }
      ],
      "Forwards": [
        { number: 7,  name: "Embolo",        fullName: "Breel Embolo",          club: "Rennes",              wiki: "Breel_Embolo" },
        { number: 11, name: "Ndoye",         fullName: "Dan Ndoye",             club: "Nottingham Forest",   wiki: "Dan_Ndoye" },
        { number: 17, name: "Vargas",        fullName: "Rubén Vargas",          club: "Sevilla",             wiki: "Rubén_Vargas_(footballer)" },
        { number: 19, name: "Okafor",        fullName: "Noah Okafor",           club: "Leeds United",        wiki: "Noah_Okafor" },
        { number: 23, name: "Amdouni",       fullName: "Zeki Amdouni",          club: "Burnley",             wiki: "Zeki_Amdouni" },
        { number: 26, name: "Itten",         fullName: "Cédric Itten",          club: "Fortuna Düsseldorf",  wiki: "Cédric_Itten" }
      ]
    }
  },

  "norway": {
    name: "Norway",
    coach: "Ståle Solbakken",
    flag: "no",
    group: "I",
    groupTeams: "France · Senegal · Iraq",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Nyland",       fullName: "Ørjan Nyland",          club: "Sevilla",             wiki: "Ørjan_Nyland" },
        { number: 12, name: "Selvik",        fullName: "Egil Selvik",           club: "Watford",             wiki: "Egil_Selvik" },
        { number: 23, name: "Tangvik",       fullName: "Sander Tangvik",        club: "Hamburger SV",        wiki: "Sander_Tangvik" }
      ],
      "Defenders": [
        { number: 2,  name: "Ryerson",       fullName: "Julian Ryerson",        club: "Borussia Dortmund",   wiki: "Julian_Ryerson" },
        { number: 3,  name: "Bjørkan",       fullName: "Fredrik Bjørkan",       club: "Bodø/Glimt",          wiki: "Fredrik_Bjørkan" },
        { number: 4,  name: "Ajer",          fullName: "Kristoffer Ajer",       club: "Brentford",           wiki: "Kristoffer_Ajer" },
        { number: 5,  name: "Østigård",      fullName: "Leo Skiri Østigård",    club: "Genoa",               wiki: "Leo_Skiri_Østigård" },
        { number: 6,  name: "Heggem",        fullName: "Torbjørn Heggem",       club: "Bologna",             wiki: "Torbjørn_Heggem" },
        { number: 13, name: "Holmgren P.",   fullName: "Marcus Holmgren Pedersen",club: "Torino",            wiki: "Marcus_Holmgren_Pedersen" },
        { number: 14, name: "Møller Wolfe",  fullName: "David Møller Wolfe",    club: "Wolverhampton",       wiki: "David_Møller_Wolfe" },
        { number: 15, name: "Langås",        fullName: "Sondre Langås",         club: "Derby County",        wiki: "Sondre_Langås" },
        { number: 16, name: "Falchener",     fullName: "Henrik Falchener",      club: "Viking",              wiki: "Henrik_Falchener" }
      ],
      "Midfielders": [
        { number: 7,  name: "Aursnes",       fullName: "Fredrik Aursnes",       club: "Benfica",             wiki: "Fredrik_Aursnes" },
        { number: 8,  name: "Berge",         fullName: "Sander Berge",          club: "Fulham",              wiki: "Sander_Berge" },
        { number: 10, name: "Ødegaard",      fullName: "Martin Ødegaard",       club: "Arsenal",             wiki: "Martin_Ødegaard" },
        { number: 11, name: "Aasgaard",      fullName: "Thelo Aasgaard",        club: "Rangers",             wiki: "Thelo_Aasgaard" },
        { number: 17, name: "Berg",          fullName: "Patrick Berg",          club: "Bodø/Glimt",          wiki: "Patrick_Berg_(footballer)" },
        { number: 18, name: "Thorstvedt",    fullName: "Kristian Thorstvedt",   club: "Sassuolo",            wiki: "Kristian_Thorstvedt" },
        { number: 19, name: "Thorsby",       fullName: "Morten Thorsby",        club: "Cremonese",           wiki: "Morten_Thorsby" },
        { number: 20, name: "Schjelderup",   fullName: "Andreas Schjelderup",   club: "Benfica",             wiki: "Andreas_Schjelderup" },
        { number: 21, name: "Hauge",         fullName: "Jens Petter Hauge",     club: "Bodø/Glimt",          wiki: "Jens_Petter_Hauge" }
      ],
      "Forwards": [
        { number: 9,  name: "Haaland",       fullName: "Erling Haaland",        club: "Manchester City",     wiki: "Erling_Haaland" },
        { number: 22, name: "Sørloth",       fullName: "Alexander Sørloth",     club: "Atlético Madrid",     wiki: "Alexander_Sørloth" },
        { number: 24, name: "Strand Larsen", fullName: "Jørgen Strand Larsen",  club: "Crystal Palace",      wiki: "Jørgen_Strand_Larsen" },
        { number: 25, name: "Bobb",          fullName: "Oscar Bobb",            club: "Fulham",              wiki: "Oscar_Bobb" },
        { number: 26, name: "Nusa",          fullName: "Antonio Nusa",          club: "RB Leipzig",          wiki: "Antonio_Nusa" }
      ]
    }
  },

  "scotland": {
    name: "Scotland",
    coach: "Steve Clarke",
    flag: "gb-sct",
    group: "C",
    groupTeams: "Brazil · Morocco · Haiti",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Gunn",         fullName: "Angus Gunn",            club: "Nottingham Forest",   wiki: "Angus_Gunn" },
        { number: 12, name: "Kelly",         fullName: "Liam Kelly",            club: "Rangers",             wiki: "Liam_Kelly_(footballer,_born_1990)" },
        { number: 21, name: "Gordon",        fullName: "Craig Gordon",          club: "Hearts",              wiki: "Craig_Gordon" }
      ],
      "Defenders": [
        { number: 2,  name: "Hickey",        fullName: "Aaron Hickey",          club: "Brentford",           wiki: "Aaron_Hickey" },
        { number: 3,  name: "Robertson",     fullName: "Andy Robertson",        club: "Liverpool",           wiki: "Andy_Robertson" },
        { number: 5,  name: "Hanley",        fullName: "Grant Hanley",          club: "Hibernian",           wiki: "Grant_Hanley" },
        { number: 6,  name: "Tierney",       fullName: "Kieran Tierney",        club: "Celtic",              wiki: "Kieran_Tierney" },
        { number: 13, name: "Hendry",        fullName: "Jack Hendry",           club: "Al-Ettifaq",          wiki: "Jack_Hendry_(footballer)" },
        { number: 15, name: "Souttar",       fullName: "John Souttar",          club: "Rangers",             wiki: "John_Souttar" },
        { number: 16, name: "Hyam",          fullName: "Dominic Hyam",          club: "Wrexham",             wiki: "Dominic_Hyam" },
        { number: 22, name: "Patterson",     fullName: "Nathan Patterson",      club: "Everton",             wiki: "Nathan_Patterson_(footballer)" },
        { number: 24, name: "Ralston",       fullName: "Anthony Ralston",       club: "Celtic",              wiki: "Anthony_Ralston" },
        { number: 26, name: "McKenna",       fullName: "Scott McKenna",         club: "Dinamo Zagreb",       wiki: "Scott_McKenna_(footballer)" }
      ],
      "Midfielders": [
        { number: 4,  name: "McTominay",     fullName: "Scott McTominay",       club: "Napoli",              wiki: "Scott_McTominay" },
        { number: 7,  name: "McGinn",        fullName: "John McGinn",           club: "Aston Villa",         wiki: "John_McGinn_(footballer)" },
        { number: 8,  name: "Fletcher",      fullName: "Tyler Fletcher",        club: "Manchester United",   wiki: "Tyler_Fletcher" },
        { number: 11, name: "Christie",      fullName: "Ryan Christie",         club: "Bournemouth",         wiki: "Ryan_Christie" },
        { number: 17, name: "Gannon-Doak",   fullName: "Ben Gannon-Doak",       club: "Bournemouth",         wiki: "Ben_Gannon-Doak" },
        { number: 19, name: "Ferguson",      fullName: "Lewis Ferguson",        club: "Bologna",             wiki: "Lewis_Ferguson_(footballer)" },
        { number: 23, name: "McLean",        fullName: "Kenny McLean",          club: "Norwich City",        wiki: "Kenny_McLean" },
        { number: 25, name: "Curtis",        fullName: "Findlay Curtis",        club: "Kilmarnock",          wiki: "Findlay_Curtis" }
      ],
      "Forwards": [
        { number: 9,  name: "Dykes",         fullName: "Lyndon Dykes",          club: "Charlton Athletic",   wiki: "Lyndon_Dykes" },
        { number: 10, name: "Adams",         fullName: "Ché Adams",             club: "Torino",              wiki: "Ché_Adams" },
        { number: 14, name: "Stewart",       fullName: "Ross Stewart",          club: "Southampton",         wiki: "Ross_Stewart_(footballer)" },
        { number: 18, name: "Hirst",         fullName: "George Hirst",          club: "Ipswich Town",        wiki: "George_Hirst_(footballer)" },
        { number: 20, name: "Shankland",     fullName: "Lawrence Shankland",    club: "Hearts",              wiki: "Lawrence_Shankland" }
      ]
    }
  },

  "bosnia-herzegovina": {
    name: "Bosnia & Herzegovina",
    coach: "Sergej Barbarez",
    flag: "ba",
    group: "B",
    groupTeams: "Canada · Switzerland · Qatar",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Vasilj",        fullName: "Nikola Vasilj",           club: "FC St. Pauli",          wiki: "Nikola_Vasilj" },
        { number: 12, name: "Lušija",        fullName: "Ado Lušija",              club: "Velež Mostar",          wiki: "Ado_Lušija" },
        { number: 23, name: "Pirić",         fullName: "Ibrahim Šehić",           club: "NK Dinamo Zagreb",      wiki: "Ibrahim_Šehić" }
      ],
      "Defenders": [
        { number: 2,  name: "Kolasinac",     fullName: "Sead Kolašinac",          club: "Fenerbahçe",            wiki: "Sead_Kolašinac" },
        { number: 3,  name: "Šunjić",        fullName: "Ivan Šunjić",             club: "Dinamo Zagreb",         wiki: "Ivan_Šunjić" },
        { number: 4,  name: "Šatara",        fullName: "Jusuf Gazibegović",       club: "RB Salzburg",           wiki: "Jusuf_Gazibegović" },
        { number: 5,  name: "Bicakcic",      fullName: "Ermin Bičakčić",         club: "RB Leipzig",            wiki: "Ermin_Bičakčić" },
        { number: 6,  name: "Kovacevic",     fullName: "Dejan Kovačević",         club: "NK Vitesse",            wiki: "Dejan_Kovačević_(Bosnian_footballer)" },
        { number: 13, name: "Cipetic",       fullName: "Stipe Čipetić",          club: "Hajduk Split",          wiki: "Stipe_Čipetić" },
        { number: 15, name: "Dukan",         fullName: "Dino Đukanović",          club: "Stoke City",            wiki: "Dino_Đukanović" },
        { number: 25, name: "Stevic",        fullName: "Slobodan Stevic",         club: "FC Volendam",           wiki: "Slobodan_Stevic" }
      ],
      "Midfielders": [
        { number: 8,  name: "Tahirovic",     fullName: "Benjamin Tahirović",      club: "Ajax",                  wiki: "Benjamin_Tahirović" },
        { number: 10, name: "Gigovic",       fullName: "Armin Gigović",           club: "Sparta Prague",         wiki: "Armin_Gigović" },
        { number: 14, name: "Bajraktarevic", fullName: "Esmir Bajraktarević",     club: "PSV Eindhoven",         wiki: "Esmir_Bajraktarević" },
        { number: 16, name: "Saric",         fullName: "Domagoj Šarić",           club: "Real Valladolid",       wiki: "Domagoj_Šarić" },
        { number: 17, name: "Dijakovic",     fullName: "Kenan Dijaković",         club: "RB Leipzig",            wiki: "Kenan_Dijaković" },
        { number: 18, name: "Menalo",        fullName: "Siniša Stevanović",       club: "Stoke City",            wiki: "Siniša_Stevanović_(footballer)" },
        { number: 21, name: "Omeragic",      fullName: "Becir Omeragic",          club: "Montpellier",           wiki: "Becir_Omeragic" }
      ],
      "Forwards": [
        { number: 7,  name: "Pjanic",        fullName: "Miralem Pjanić",          club: "Sharjah FC",            wiki: "Miralem_Pjanić" },
        { number: 9,  name: "Džeko",         fullName: "Edin Džeko",              club: "Schalke 04",            wiki: "Edin_Džeko" },
        { number: 11, name: "Demirovic",     fullName: "Ermedin Demirović",       club: "VfB Stuttgart",         wiki: "Ermedin_Demirović" },
        { number: 19, name: "Hotic",         fullName: "Amar Dedić",              club: "RB Salzburg",           wiki: "Amar_Dedić" },
        { number: 20, name: "Krovinovic",    fullName: "Filip Krovinović",        club: "Dinamo Zagreb",         wiki: "Filip_Krovinović" },
        { number: 22, name: "Alajbegovic",   fullName: "Kerim Alajbegović",       club: "Venezia FC",            wiki: "Kerim_Alajbegović" },
        { number: 24, name: "Prevljak",      fullName: "Muamer Prevljak",         club: "Hammarby",              wiki: "Muamer_Prevljak" }
      ]
    }
  },

  "czechia": {
    name: "Czechia",
    coach: "Miroslav Koubek",
    flag: "cz",
    group: "A",
    groupTeams: "Mexico · South Korea · South Africa",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Kovář",         fullName: "Matěj Kovář",             club: "Bayer Leverkusen",      wiki: "Matěj_Kovář" },
        { number: 12, name: "Staněk",        fullName: "Jindřich Staněk",         club: "Sparta Prague",         wiki: "Jindřich_Staněk" },
        { number: 23, name: "Mandous",       fullName: "Aleš Mandous",            club: "Fenerbahçe",            wiki: "Aleš_Mandous" }
      ],
      "Defenders": [
        { number: 2,  name: "Coufal",        fullName: "Vladimír Coufal",         club: "West Ham United",       wiki: "Vladimír_Coufal" },
        { number: 3,  name: "Bořil",         fullName: "Jan Bořil",               club: "Slavia Prague",         wiki: "Jan_Bořil" },
        { number: 4,  name: "Krejčí L.",     fullName: "Ladislav Krejčí",         club: "Wolverhampton",         wiki: "Ladislav_Krejčí_(defender)" },
        { number: 5,  name: "Holes",         fullName: "Tomáš Holeš",             club: "Slavia Prague",         wiki: "Tomáš_Holeš" },
        { number: 6,  name: "Krejčí A.",     fullName: "Adam Krejčí",             club: "Sparta Prague",         wiki: "Adam_Krejčí" },
        { number: 13, name: "Havel",         fullName: "Ondřej Havel",            club: "Sparta Prague",         wiki: "Ondřej_Havel_(footballer)" },
        { number: 15, name: "Zima",          fullName: "David Zimič",             club: "Slavia Prague",         wiki: "David_Zima" },
        { number: 21, name: "Provod",        fullName: "Lukáš Provod",            club: "Slavia Prague",         wiki: "Lukáš_Provod" }
      ],
      "Midfielders": [
        { number: 8,  name: "Souček",        fullName: "Tomáš Souček",            club: "West Ham United",       wiki: "Tomáš_Souček" },
        { number: 10, name: "Šulc",          fullName: "Pavel Šulc",              club: "Olympique Lyonnais",    wiki: "Pavel_Šulc" },
        { number: 14, name: "Sadílek",       fullName: "Michal Sadílek",          club: "FC Twente",             wiki: "Michal_Sadílek" },
        { number: 16, name: "Červ",          fullName: "Mojmír Chytil",           club: "Feyenoord",             wiki: "Mojmír_Chytil" },
        { number: 17, name: "Lingr",         fullName: "Ondřej Lingr",            club: "Feyenoord",             wiki: "Ondřej_Lingr" },
        { number: 18, name: "Ivanschitz",    fullName: "Christoph Klarer",        club: "Borussia Dortmund",     wiki: "Christoph_Klarer" },
        { number: 20, name: "Cerny",         fullName: "Václav Černý",            club: "VfB Stuttgart",         wiki: "Václav_Černý_(footballer)" },
        { number: 22, name: "Soucek P.",     fullName: "Michal Trávník",          club: "Slavia Prague",         wiki: "Michal_Trávník" }
      ],
      "Forwards": [
        { number: 7,  name: "Hlozek",        fullName: "Adam Hložek",             club: "Hoffenheim",            wiki: "Adam_Hložek" },
        { number: 9,  name: "Schick",        fullName: "Patrik Schick",           club: "Bayer Leverkusen",      wiki: "Patrik_Schick" },
        { number: 11, name: "Matejovsky",    fullName: "Tomáš Chorý",             club: "Sporting CP",           wiki: "Tomáš_Chorý" },
        { number: 19, name: "Kuchta",        fullName: "Jan Kuchta",              club: "Lazio",                 wiki: "Jan_Kuchta" },
        { number: 24, name: "Vydra",         fullName: "Matěj Vydra",             club: "Sparta Prague",         wiki: "Matěj_Vydra" },
        { number: 25, name: "Barák",         fullName: "Antonín Barák",           club: "Fiorentina",            wiki: "Antonín_Barák" },
        { number: 26, name: "Sejk",          fullName: "Tomáš Sejk",              club: "Slavia Prague",         wiki: "Tomáš_Sejk" }
      ]
    }
  },

  "sweden": {
    name: "Sweden",
    coach: "Graham Potter",
    flag: "se",
    group: "F",
    groupTeams: "Netherlands · Japan · Tunisia",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "R. Olsen",      fullName: "Robin Olsen",             club: "Real Betis",            wiki: "Robin_Olsen" },
        { number: 12, name: "Johansson",     fullName: "Viktor Johansson",        club: "Nottm Forest",          wiki: "Viktor_Johansson_(footballer)" },
        { number: 22, name: "Wahlstedt",     fullName: "Leopold Wahlstedt",       club: "IFK Göteborg",          wiki: "Leopold_Wahlstedt" }
      ],
      "Defenders": [
        { number: 2,  name: "Gudmundsson",   fullName: "Gabriel Gudmundsson",     club: "KAA Gent",              wiki: "Gabriel_Gudmundsson" },
        { number: 3,  name: "Augustinsson",  fullName: "Ludwig Augustinsson",     club: "Club Brugge",           wiki: "Ludwig_Augustinsson" },
        { number: 4,  name: "Hien",          fullName: "Isak Hien",               club: "Atalanta",              wiki: "Isak_Hien" },
        { number: 5,  name: "Starfelt",      fullName: "Carl Starfelt",           club: "Valencia CF",           wiki: "Carl_Starfelt" },
        { number: 6,  name: "Krafth",        fullName: "Emil Krafth",             club: "Newcastle United",      wiki: "Emil_Krafth" },
        { number: 13, name: "Wahlqvist",     fullName: "Linus Wahlqvist",         club: "PAOK FC",               wiki: "Linus_Wahlqvist" },
        { number: 20, name: "Dahl",          fullName: "Samuel Dahl",             club: "Chelsea",               wiki: "Samuel_Dahl" }
      ],
      "Midfielders": [
        { number: 7,  name: "Bergvall",      fullName: "Lucas Bergvall",          club: "Tottenham Hotspur",     wiki: "Lucas_Bergvall" },
        { number: 8,  name: "Svanberg",      fullName: "Mattias Svanberg",        club: "VfL Wolfsburg",         wiki: "Mattias_Svanberg" },
        { number: 10, name: "Cajuste",       fullName: "Jens Cajuste",            club: "Brentford",             wiki: "Jens_Cajuste" },
        { number: 14, name: "Larsson",       fullName: "Hugo Larsson",            club: "Eintracht Frankfurt",   wiki: "Hugo_Larsson_(footballer)" },
        { number: 15, name: "Salétros",      fullName: "Anton Salétros",          club: "IFK Göteborg",          wiki: "Anton_Salétros" },
        { number: 16, name: "Nanasi",        fullName: "Sebastian Nanasi",        club: "CSKA Moscow",           wiki: "Sebastian_Nanasi" },
        { number: 18, name: "Ayari",         fullName: "Yasin Ayari",             club: "Brighton & H.A.",       wiki: "Yasin_Ayari" },
        { number: 21, name: "Swedberg",      fullName: "Williot Swedberg",        club: "Celta Vigo",            wiki: "Williot_Swedberg" },
        { number: 25, name: "Kulusevski",    fullName: "Dejan Kulusevski",        club: "Tottenham Hotspur",     wiki: "Dejan_Kulusevski" }
      ],
      "Forwards": [
        { number: 9,  name: "Isak",          fullName: "Alexander Isak",          club: "Newcastle United",      wiki: "Alexander_Isak" },
        { number: 11, name: "Elanga",        fullName: "Anthony Elanga",          club: "Nottm Forest",          wiki: "Anthony_Elanga" },
        { number: 17, name: "Gyökeres",      fullName: "Viktor Gyökeres",         club: "Arsenal",               wiki: "Viktor_Gyökeres" },
        { number: 19, name: "Nilsson",       fullName: "Gustaf Nilsson",          club: "Brøndby IF",            wiki: "Gustaf_Nilsson_(footballer)" },
        { number: 23, name: "Bardghji",      fullName: "Roony Bardghji",          club: "Chelsea",               wiki: "Roony_Bardghji" },
        { number: 24, name: "Karlsson",      fullName: "Jesper Karlsson",         club: "Bologna FC",            wiki: "Jesper_Karlsson" },
        { number: 26, name: "Ondrejka",      fullName: "Jacob Ondrejka",          club: "Burnley FC",            wiki: "Jacob_Ondrejka" }
      ]
    }
  },

  "turkiye": {
    name: "Türkiye",
    coach: "Vincenzo Montella",
    flag: "tr",
    group: "D",
    groupTeams: "USA · Paraguay · Australia",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Altay",         fullName: "Altay Bayındır",          club: "Manchester United",     wiki: "Altay_Bayındır" },
        { number: 12, name: "Günok",         fullName: "Mert Günok",              club: "Beşiktaş",              wiki: "Mert_Günok" },
        { number: 23, name: "Bayraktar",     fullName: "Berke Özer",              club: "Fenerbahçe",            wiki: "Berke_Özer" }
      ],
      "Defenders": [
        { number: 2,  name: "Celik",         fullName: "Zeki Çelik",              club: "AS Roma",               wiki: "Zeki_Çelik" },
        { number: 3,  name: "Müldür",        fullName: "Merih Demiral",           club: "Al-Qadsiah",            wiki: "Merih_Demiral" },
        { number: 4,  name: "Kabak",         fullName: "Ozan Kabak",              club: "Galatasaray",           wiki: "Ozan_Kabak" },
        { number: 5,  name: "Soyuncu",       fullName: "Çağlar Söyüncü",         club: "Atlético de Madrid",    wiki: "Çağlar_Söyüncü" },
        { number: 6,  name: "Ayhan",         fullName: "Kaan Ayhan",              club: "Galatasaray",           wiki: "Kaan_Ayhan" },
        { number: 13, name: "Emre Demir",    fullName: "Emre Demir",              club: "Kasımpaşa",             wiki: "Emre_Demir_(footballer)" },
        { number: 15, name: "Kadioglu",      fullName: "Ferdi Kadıoğlu",          club: "Fenerbahçe",            wiki: "Ferdi_Kadıoğlu" },
        { number: 21, name: "Muldur",        fullName: "Umut Meraş",              club: "Beşiktaş",              wiki: "Umut_Meraş" }
      ],
      "Midfielders": [
        { number: 7,  name: "Yüksek",        fullName: "İsmail Yüksek",           club: "Fenerbahçe",            wiki: "İsmail_Yüksek" },
        { number: 8,  name: "Çalhanoğlu",    fullName: "Hakan Çalhanoğlu",        club: "Inter Milan",           wiki: "Hakan_Çalhanoğlu" },
        { number: 10, name: "Güler",         fullName: "Arda Güler",              club: "Real Madrid",           wiki: "Arda_Güler" },
        { number: 14, name: "Özcan",         fullName: "Salih Özcan",             club: "Borussia Dortmund",     wiki: "Salih_Özcan" },
        { number: 16, name: "Kökçu",         fullName: "Orkun Kökçu",             club: "Beşiktaş",              wiki: "Orkun_Kökçu" },
        { number: 17, name: "Kökcü Alt",     fullName: "Kenan Yıldız",            club: "Juventus",              wiki: "Kenan_Yıldız" },
        { number: 18, name: "Aktürkoğlu",    fullName: "Kerem Aktürkoğlu",        club: "Galatasaray",           wiki: "Kerem_Aktürkoğlu" },
        { number: 19, name: "B. Yılmaz",     fullName: "Barış Alper Yılmaz",      club: "Galatasaray",           wiki: "Barış_Alper_Yılmaz" },
        { number: 20, name: "Uzun",          fullName: "Can Uzun",                club: "Eintracht Frankfurt",   wiki: "Can_Uzun" }
      ],
      "Forwards": [
        { number: 9,  name: "Yılmaz",        fullName: "Burak Yılmaz",            club: "Adana Demirspor",       wiki: "Burak_Yılmaz" },
        { number: 11, name: "Akgün",         fullName: "Yunus Akgün",             club: "Galatasaray",           wiki: "Yunus_Akgün" },
        { number: 22, name: "Kahveci",       fullName: "İrfan Can Kahveci",       club: "Fenerbahçe",            wiki: "İrfan_Can_Kahveci" },
        { number: 24, name: "Aydın",         fullName: "Oğuz Aydın",              club: "Fenerbahçe",            wiki: "Oğuz_Aydın" },
        { number: 25, name: "Gül",           fullName: "Deniz Gül",               club: "Porto",                 wiki: "Deniz_Gül" },
        { number: 26, name: "Dönmez",        fullName: "Ali Ülkü",                club: "Başakşehir",            wiki: "Ali_Ülkü" }
      ]
    }
  },

  /* ── CAF ───────────────────────────────────────────────────── */

  "morocco": {
    name: "Morocco",
    coach: "Mohamed Ouahbi",
    flag: "ma",
    group: "C",
    groupTeams: "Brazil · Scotland · Haiti",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Bounou",       fullName: "Yassine Bounou",        club: "Al-Hilal",            wiki: "Yassine_Bounou" },
        { number: 12, name: "El Kajoui",    fullName: "Munir El Kajoui",       club: "RS Berkane",          wiki: "Munir_El_Kajoui" },
        { number: 16, name: "Tagnaouti",    fullName: "Reda Tagnaouti",        club: "AS FAR",              wiki: "Reda_Tagnaouti" }
      ],
      "Defenders": [
        { number: 2,  name: "Hakimi",       fullName: "Achraf Hakimi",         club: "Paris Saint-Germain", wiki: "Achraf_Hakimi" },
        { number: 3,  name: "Mazraoui",     fullName: "Noussair Mazraoui",     club: "Manchester United",   wiki: "Noussair_Mazraoui" },
        { number: 4,  name: "Salah-Eddine", fullName: "Anass Salah-Eddine",    club: "PSV",                 wiki: "Anass_Salah-Eddine" },
        { number: 5,  name: "Aguerd",       fullName: "Nayef Aguerd",          club: "Marseille",           wiki: "Nayef_Aguerd" },
        { number: 6,  name: "El Ouahdi",    fullName: "Zakaria El Ouahdi",     club: "Genk",                wiki: "Zakaria_El_Ouahdi" },
        { number: 13, name: "Riad",         fullName: "Chadi Riad",            club: "Crystal Palace",      wiki: "Chadi_Riad" },
        { number: 14, name: "Diop",         fullName: "Issa Diop",             club: "Fulham",              wiki: "Issa_Diop_(footballer)" },
        { number: 15, name: "Belammari",    fullName: "Youssef Belammari",     club: "Al-Ahly",             wiki: "Youssef_Belammari" },
        { number: 17, name: "Halhal",       fullName: "Redouane Halhal",       club: "Mechelen",            wiki: "Redouane_Halhal" }
      ],
      "Midfielders": [
        { number: 7,  name: "Amrabat",      fullName: "Sofyan Amrabat",        club: "Real Betis",          wiki: "Sofyan_Amrabat" },
        { number: 8,  name: "Ounahi",       fullName: "Azzedine Ounahi",       club: "Girona",              wiki: "Azzedine_Ounahi" },
        { number: 11, name: "El Aynaoui",   fullName: "Neil El Aynaoui",       club: "Roma",                wiki: "Neil_El_Aynaoui" },
        { number: 18, name: "Saibari",      fullName: "Ismael Saibari",        club: "PSV",                 wiki: "Ismael_Saibari" },
        { number: 19, name: "El Mourabet",  fullName: "Samir El Mourabet",     club: "Strasbourg",          wiki: "Samir_El_Mourabet" },
        { number: 21, name: "Bouaddi",      fullName: "Ayyoub Bouaddi",        club: "Lille",               wiki: "Ayyoub_Bouaddi" },
        { number: 22, name: "G. Yassine",   fullName: "Gessime Yassine",       club: "Strasbourg",          wiki: "Gessime_Yassine" },
        { number: 23, name: "El Khannouss", fullName: "Bilal El Khannouss",    club: "VfB Stuttgart",       wiki: "Bilal_El_Khannouss" }
      ],
      "Forwards": [
        { number: 9,  name: "Rahimi",       fullName: "Soufiane Rahimi",       club: "Al-Ain",              wiki: "Soufiane_Rahimi" },
        { number: 10, name: "Brahim Díaz",  fullName: "Brahim Díaz",           club: "Real Madrid",         wiki: "Brahim_Díaz" },
        { number: 20, name: "El Kaabi",     fullName: "Ayoub El Kaabi",        club: "Olympiacos",          wiki: "Ayoub_El_Kaabi" },
        { number: 24, name: "Ezzalzouli",   fullName: "Abde Ezzalzouli",       club: "Real Betis",          wiki: "Abde_Ezzalzouli" },
        { number: 25, name: "Talbi",        fullName: "Chemsdine Talbi",       club: "Sunderland",          wiki: "Chemsdine_Talbi" },
        { number: 26, name: "Amaimouni",    fullName: "Ayoube Amaimouni",      club: "Eintracht Frankfurt", wiki: "Ayoube_Amaimouni" }
      ]
    }
  },

  "senegal": {
    name: "Senegal",
    coach: "Pape Thiaw",
    flag: "sn",
    group: "I",
    groupTeams: "France · Norway · Iraq",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Y. Diouf",    fullName: "Yehvann Diouf",         club: "Nice",                wiki: "Yehvann_Diouf" },
        { number: 16, name: "Mendy",        fullName: "Édouard Mendy",         club: "Al-Ahli",             wiki: "Édouard_Mendy" },
        { number: 23, name: "Diaw",         fullName: "Mory Diaw",             club: "Le Havre",            wiki: "Mory_Diaw" }
      ],
      "Defenders": [
        { number: 2,  name: "M. Sarr",      fullName: "Mamadou Sarr",          club: "Chelsea",             wiki: "Mamadou_Sarr" },
        { number: 3,  name: "Koulibaly",    fullName: "Kalidou Koulibaly",     club: "Al-Hilal",            wiki: "Kalidou_Koulibaly" },
        { number: 4,  name: "Seck",         fullName: "Abdoulaye Seck",        club: "Maccabi Haifa",       wiki: "Abdoulaye_Seck" },
        { number: 5,  name: "Diatta",       fullName: "Krépin Diatta",         club: "Monaco",              wiki: "Krépin_Diatta" },
        { number: 6,  name: "A. Mendy",     fullName: "Antoine Mendy",         club: "Nice",                wiki: "Antoine_Mendy_(footballer)" },
        { number: 7,  name: "Niakhaté",     fullName: "Moussa Niakhaté",       club: "Lyon",                wiki: "Moussa_Niakhaté" },
        { number: 15, name: "M. Diouf",     fullName: "El Hadji Malick Diouf", club: "West Ham",            wiki: "El_Hadji_Malick_Diouf" },
        { number: 17, name: "Jakobs",       fullName: "Ismaïl Jakobs",         club: "Galatasaray",         wiki: "Ismaïl_Jakobs" }
      ],
      "Midfielders": [
        { number: 8,  name: "I. Gueye",     fullName: "Idrissa Gana Gueye",    club: "Everton",             wiki: "Idrissa_Gana_Gueye" },
        { number: 9,  name: "P. Gueye",     fullName: "Pape Gueye",            club: "Villarreal",          wiki: "Pape_Gueye" },
        { number: 11, name: "L. Camara",    fullName: "Lamine Camara",         club: "Monaco",              wiki: "Lamine_Camara" },
        { number: 12, name: "H. Diarra",    fullName: "Habib Diarra",          club: "Sunderland",          wiki: "Habib_Diarra" },
        { number: 13, name: "Ciss",         fullName: "Pathé Ciss",            club: "Rayo Vallecano",      wiki: "Pathé_Ciss" },
        { number: 14, name: "PM Sarr",      fullName: "Pape Matar Sarr",       club: "Tottenham",           wiki: "Pape_Matar_Sarr" },
        { number: 22, name: "B. Ndiaye",    fullName: "Bara Sapoko Ndiaye",    club: "Bayern Munich",       wiki: "Bara_Sapoko_Ndiaye" }
      ],
      "Forwards": [
        { number: 10, name: "Mané",         fullName: "Sadio Mané",            club: "Al-Nassr",            wiki: "Sadio_Mané" },
        { number: 18, name: "I. Sarr",      fullName: "Ismaïla Sarr",          club: "Crystal Palace",      wiki: "Ismaïla_Sarr" },
        { number: 19, name: "Il. Ndiaye",   fullName: "Iliman Ndiaye",         club: "Everton",             wiki: "Iliman_Ndiaye" },
        { number: 20, name: "Diao",         fullName: "Assane Diao",           club: "Como",                wiki: "Assane_Diao" },
        { number: 21, name: "Mbaye",        fullName: "Ibrahim Mbaye",         club: "Paris Saint-Germain", wiki: "Ibrahim_Mbaye_(footballer)" },
        { number: 24, name: "Jackson",      fullName: "Nicolas Jackson",       club: "Bayern Munich",       wiki: "Nicolas_Jackson" },
        { number: 25, name: "Dieng",        fullName: "Bamba Dieng",           club: "Lorient",             wiki: "Bamba_Dieng" },
        { number: 26, name: "C. Ndiaye",    fullName: "Chérif Ndiaye",         club: "Samsunspor",          wiki: "Chérif_Ndiaye" }
      ]
    }
  },

  "egypt": {
    name: "Egypt",
    coach: "Hossam Hassan",
    flag: "eg",
    group: "G",
    groupTeams: "Belgium · Iran · New Zealand",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "El Shenawy",    fullName: "Mohamed El Shenawy",      club: "Al-Ahly",               wiki: "Mohamed_El-Shenawy" },
        { number: 12, name: "Gabaski",       fullName: "Mohamed Abu Gabal",       club: "Al-Ahly",               wiki: "Mohamed_Abu_Gabal" },
        { number: 23, name: "El-Hadary",     fullName: "Ibrahim Hasan",           club: "Zamalek SC",            wiki: "Ibrahim_Hasan_(footballer)" }
      ],
      "Defenders": [
        { number: 2,  name: "Hany",          fullName: "Mohamed Hany",            club: "Al-Ahly",               wiki: "Mohamed_Hany_(footballer)" },
        { number: 3,  name: "Gaber",         fullName: "Omar Gaber",              club: "Philadelphia Union",    wiki: "Omar_Gaber" },
        { number: 4,  name: "Hegazi",        fullName: "Ahmed Hegazi",            club: "Al-Ittihad",            wiki: "Ahmed_Hegazi_(footballer)" },
        { number: 5,  name: "Hamdy",         fullName: "Hamdy Fathy",             club: "Al-Wakrah",             wiki: "Hamdy_Fathy" },
        { number: 6,  name: "Fatouh",        fullName: "Ahmed El-Fotouh",         club: "Al-Ahly",               wiki: "Ahmed_El-Fotouh" },
        { number: 13, name: "Abdelmonem",    fullName: "Abdelmonem Gamal",        club: "Al-Ahly",               wiki: "Abdelmonem_Gamal" },
        { number: 15, name: "El Amleh",      fullName: "Akram Tawfik",            club: "Zamalek SC",            wiki: "Akram_Tawfik_(footballer)" },
        { number: 21, name: "Ashraf",        fullName: "Ahmed Ashraf",            club: "Anderlecht",            wiki: "Ahmed_Ashraf_(footballer)" }
      ],
      "Midfielders": [
        { number: 8,  name: "Elneny",        fullName: "Mohamed Elneny",          club: "Al-Ahly",               wiki: "Mohamed_Elneny" },
        { number: 14, name: "Ashour",        fullName: "Emam Ashour",             club: "Al-Ahly",               wiki: "Emam_Ashour" },
        { number: 16, name: "El Solia",      fullName: "Amr El Solia",            club: "Zamalek SC",            wiki: "Amr_El_Solia" },
        { number: 17, name: "Mohsen",        fullName: "Salah Mohsen",            club: "Al-Ahly",               wiki: "Salah_Mohsen" },
        { number: 18, name: "Abdelkarim",    fullName: "Hamza Abdelkarim",        club: "Barcelona Atlètic",     wiki: "Hamza_Abdelkarim" },
        { number: 19, name: "Magdi",         fullName: "Ahmed Magdi",             club: "Zamalek SC",            wiki: "Ahmed_Magdi_(footballer)" },
        { number: 22, name: "El Shahat",     fullName: "Ahmed El Shahat",         club: "Al-Ittihad",            wiki: "Ahmed_El_Shahat" }
      ],
      "Forwards": [
        { number: 7,  name: "Trézéguet",     fullName: "Ibrahim Trézéguet",       club: "Al-Ahly",               wiki: "Trézéguet_(footballer)" },
        { number: 9,  name: "Marmoush",      fullName: "Omar Marmoush",           club: "Manchester City",       wiki: "Omar_Marmoush" },
        { number: 10, name: "Salah",         fullName: "Mohamed Salah",           club: "Liverpool",             wiki: "Mohamed_Salah" },
        { number: 11, name: "Mohamed",       fullName: "Mostafa Mohamed",         club: "Galatasaray",           wiki: "Mostafa_Mohamed_(footballer)" },
        { number: 20, name: "Ramadan",       fullName: "Ramadan Sobhi",           club: "Al-Qadsiah",            wiki: "Ramadan_Sobhi" },
        { number: 24, name: "Karimi",        fullName: "Omar Kamal",              club: "Pyramids FC",           wiki: "Omar_Kamal_(footballer)" },
        { number: 25, name: "Hassan",        fullName: "Hossam Hassan Jr.",       club: "Zamalek SC",            wiki: "Hossam_Hassan" },
        { number: 26, name: "Zizo",          fullName: "Ahmed Zizo",              club: "Zamalek SC",            wiki: "Ahmed_Zizo" }
      ]
    }
  },

  "algeria": {
    name: "Algeria",
    coach: "Vladimir Petković",
    flag: "dz",
    group: "J",
    groupTeams: "Argentina · Austria · Jordan",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Oukidja",       fullName: "Alexandre Oukidja",       club: "Metz",                  wiki: "Alexandre_Oukidja" },
        { number: 12, name: "Benali",        fullName: "Mehdi Benali",            club: "NA Hussein Dey",        wiki: "Mehdi_Benali_(goalkeeper)" },
        { number: 23, name: "Saber",         fullName: "Smaïl Saber",             club: "USMA",                  wiki: "Smaïl_Saber" }
      ],
      "Defenders": [
        { number: 2,  name: "Abada",         fullName: "Achraf Abada",            club: "USM Alger",             wiki: "Achraf_Abada" },
        { number: 3,  name: "Aït-Nouri",     fullName: "Rayan Aït-Nouri",         club: "Manchester City",       wiki: "Rayan_Aït-Nouri" },
        { number: 4,  name: "Mandi",         fullName: "Aïssa Mandi",             club: "Lille OSC",             wiki: "Aïssa_Mandi" },
        { number: 5,  name: "Bensebaïni",    fullName: "Ramy Bensebaïni",         club: "Borussia Dortmund",     wiki: "Ramy_Bensebaïni" },
        { number: 6,  name: "Belghali",      fullName: "Rafik Belghali",          club: "Hellas Verona",         wiki: "Rafik_Belghali" },
        { number: 13, name: "Hadjam",        fullName: "Jaouen Hadjam",           club: "BSC Young Boys",        wiki: "Jaouen_Hadjam" },
        { number: 15, name: "Belaïd",        fullName: "Zinedine Belaïd",         club: "JS Kabylie",            wiki: "Zinedine_Belaïd" },
        { number: 20, name: "Tougaï",        fullName: "Mohamed Amine Tougaï",    club: "Espérance de Tunis",    wiki: "Mohamed_Amine_Tougaï" },
        { number: 21, name: "Chergui",       fullName: "Samir Chergui",           club: "Paris FC",              wiki: "Samir_Chergui" }
      ],
      "Midfielders": [
        { number: 7,  name: "Maza",          fullName: "Ibrahim Maza",            club: "Bayer Leverkusen",      wiki: "Ibrahim_Maza" },
        { number: 8,  name: "Boudaoui",      fullName: "Hicham Boudaoui",         club: "OGC Nice",              wiki: "Hicham_Boudaoui" },
        { number: 9,  name: "Zerrouki",      fullName: "Ramiz Zerrouki",          club: "FC Twente",             wiki: "Ramiz_Zerrouki" },
        { number: 14, name: "Chaïbi",        fullName: "Farès Chaïbi",            club: "Eintracht Frankfurt",   wiki: "Farès_Chaïbi" },
        { number: 16, name: "Bentaleb",      fullName: "Nabil Bentaleb",          club: "Lille OSC",             wiki: "Nabil_Bentaleb" },
        { number: 17, name: "Aouar",         fullName: "Houssem Aouar",           club: "Al-Ittihad",            wiki: "Houssem_Aouar" },
        { number: 18, name: "Titraoui",      fullName: "Yacine Titraoui",         club: "Royal Charleroi",       wiki: "Yacine_Titraoui" }
      ],
      "Forwards": [
        { number: 10, name: "Mahrez",        fullName: "Riyad Mahrez",            club: "Al-Ahli",               wiki: "Riyad_Mahrez" },
        { number: 11, name: "Amoura",        fullName: "Mohamed Amine Amoura",    club: "VfL Wolfsburg",         wiki: "Mohamed_Amine_Amoura" },
        { number: 19, name: "Gouiri",        fullName: "Amine Gouiri",            club: "Olympique Marseille",   wiki: "Amine_Gouiri" },
        { number: 22, name: "Hadj Moussa",   fullName: "Anis Hadj Moussa",        club: "Feyenoord",             wiki: "Anis_Hadj_Moussa" },
        { number: 24, name: "Ghedjemis",     fullName: "Farès Ghedjemis",         club: "Frosinone Calcio",      wiki: "Farès_Ghedjemis" },
        { number: 25, name: "Benbouali",     fullName: "Nadhir Benbouali",        club: "Élite United",          wiki: "Nadhir_Benbouali" },
        { number: 26, name: "Boulbina",      fullName: "Adil Boulbina",           club: "Al-Duhail",             wiki: "Adil_Boulbina" }
      ]
    }
  },

  "tunisia": {
    name: "Tunisia",
    coach: "Sabri Lamouchi",
    flag: "tn",
    group: "F",
    groupTeams: "Netherlands · Japan · Sweden",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Chamakh",       fullName: "Abdelmouhib Chamakh",     club: "Zamalek SC",            wiki: "Aymen_Mathlouthi" },
        { number: 16, name: "Dahmen",        fullName: "Aymen Dahmen",            club: "Montpellier",           wiki: "Aymen_Dahmen" },
        { number: 22, name: "Ben Hessen",    fullName: "Sabri Ben Hessen",        club: "Espérance de Tunis",    wiki: "Sabri_Ben_Hessen" }
      ],
      "Defenders": [
        { number: 2,  name: "Valery",        fullName: "Yan Valery",              club: "Southampton",           wiki: "Yan_Valery" },
        { number: 3,  name: "Ben Romdhane",  fullName: "Montassar Talbi",         club: "Lorient",               wiki: "Montassar_Talbi" },
        { number: 4,  name: "Meriah",        fullName: "Yassine Meriah",          club: "CS Sfaxien",            wiki: "Yassine_Meriah" },
        { number: 5,  name: "Bronn",         fullName: "Ali Maâloul",             club: "Al-Ahly",               wiki: "Ali_Maâloul" },
        { number: 6,  name: "Ben Hmida",     fullName: "Bilel Ifa",               club: "Espérance de Tunis",    wiki: "Bilel_Ifa" },
        { number: 13, name: "Talbi",         fullName: "Dylan Bronn",             club: "Getafe CF",             wiki: "Dylan_Bronn" },
        { number: 15, name: "Abdi",          fullName: "Ali Abdi",                club: "Montpellier",           wiki: "Ali_Abdi_(footballer)" },
        { number: 21, name: "Msakni",        fullName: "Youssef Msakni",          club: "Al-Arabi",              wiki: "Youssef_Msakni" }
      ],
      "Midfielders": [
        { number: 6,  name: "Skhiri",        fullName: "Ellyes Skhiri",           club: "Eintracht Frankfurt",   wiki: "Ellyes_Skhiri" },
        { number: 8,  name: "Ben Slimane",   fullName: "Anis Ben Slimane",        club: "Norwich City",          wiki: "Anis_Ben_Slimane" },
        { number: 10, name: "Mejbri",        fullName: "Hannibal Mejbri",         club: "Burnley FC",            wiki: "Hannibal_Mejbri" },
        { number: 14, name: "Laidouni",      fullName: "Aïssa Laidouni",          club: "Watford",               wiki: "Aïssa_Laidouni" },
        { number: 17, name: "Khenissi",      fullName: "Hamza Mathlouthi",        club: "Club Africain",         wiki: "Hamza_Mathlouthi" },
        { number: 18, name: "Jaziri",        fullName: "Taha Yassine Khenissi",   club: "Espérance de Tunis",    wiki: "Taha_Yassine_Khenissi" },
        { number: 19, name: "Ghandri",       fullName: "Nader Ghandri",           club: "Esperance",             wiki: "Nader_Ghandri" }
      ],
      "Forwards": [
        { number: 7,  name: "Khazri",        fullName: "Wahbi Khazri",            club: "Montpellier",           wiki: "Wahbi_Khazri" },
        { number: 9,  name: "Jebali",        fullName: "Issam Jebali",            club: "Anderlecht",            wiki: "Issam_Jebali" },
        { number: 11, name: "Chebbi",        fullName: "Sayfallah Ltaief",        club: "OH Leuven",             wiki: "Sayfallah_Ltaief" },
        { number: 20, name: "Sassi",         fullName: "Ghaylen Chaalali",        club: "Espérance de Tunis",    wiki: "Ghaylen_Chaalali" },
        { number: 23, name: "Slimane",       fullName: "Ferjani Sassi",           club: "Al-Nasr",               wiki: "Ferjani_Sassi" },
        { number: 24, name: "Drager",        fullName: "Mohamed Drager",          club: "Genoa",                 wiki: "Mohamed_Drager" },
        { number: 25, name: "Chaâlali",      fullName: "Hamdi Harbaoui",          club: "Espérance de Tunis",    wiki: "Hamdi_Harbaoui" }
      ]
    }
  },

  "cote-divoire": {
    name: "Côte d'Ivoire",
    coach: "Emerse Fae",
    flag: "ci",
    group: "E",
    groupTeams: "Germany · Ecuador · Curaçao",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Y. Fofana",     fullName: "Yahia Fofana",            club: "Rizespor",              wiki: "Yahia_Fofana" },
        { number: 12, name: "Koné",          fullName: "Mohamed Koné",            club: "Charleroi",             wiki: "Mohamed_Koné_(goalkeeper)" },
        { number: 23, name: "Lafont",        fullName: "Alban Lafont",            club: "Panathinaikos",         wiki: "Alban_Lafont" }
      ],
      "Defenders": [
        { number: 2,  name: "Singo",         fullName: "Wilfried Singo",          club: "Galatasaray",           wiki: "Wilfried_Singo" },
        { number: 3,  name: "Konan",         fullName: "Ghislain Konan",          club: "Gil Vicente",           wiki: "Ghislain_Konan" },
        { number: 4,  name: "Ndicka",        fullName: "Evan Ndicka",             club: "AS Roma",               wiki: "Evan_Ndicka" },
        { number: 5,  name: "O. Diomandé",   fullName: "Ousmane Diomandé",        club: "Sporting CP",           wiki: "Ousmane_Diomandé" },
        { number: 6,  name: "Kossounou",     fullName: "Odilon Kossounou",        club: "Atalanta",              wiki: "Odilon_Kossounou" },
        { number: 13, name: "Agbadou",       fullName: "Emmanuel Agbadou",        club: "Wolverhampton",         wiki: "Emmanuel_Agbadou" },
        { number: 15, name: "Akpa",          fullName: "Clément Akpa",            club: "AJ Auxerre",            wiki: "Clément_Akpa" },
        { number: 21, name: "G. Doué",       fullName: "Guela Doué",              club: "RC Strasbourg",         wiki: "Guela_Doué" }
      ],
      "Midfielders": [
        { number: 8,  name: "Sangaré",       fullName: "Ibrahim Sangaré",         club: "Nottm Forest",          wiki: "Ibrahim_Sangaré" },
        { number: 14, name: "S. Fofana",     fullName: "Seko Fofana",             club: "Stade Rennais",         wiki: "Seko_Fofana" },
        { number: 17, name: "Kessié",        fullName: "Franck Kessié",           club: "Al-Ahli",               wiki: "Franck_Kessié" },
        { number: 19, name: "Seri",          fullName: "Jean Michaël Seri",       club: "NK Maribor",            wiki: "Jean_Michaël_Seri" },
        { number: 20, name: "Guiagon",       fullName: "Parfait Guiagon",         club: "Charleroi",             wiki: "Parfait_Guiagon" },
        { number: 22, name: "Oulai",         fullName: "Christ Oulai",            club: "Trabzonspor",           wiki: "Christ_Oulai" }
      ],
      "Forwards": [
        { number: 7,  name: "Adingra",       fullName: "Simon Adingra",           club: "AS Monaco",             wiki: "Simon_Adingra" },
        { number: 9,  name: "Y. Diomandé",   fullName: "Yan Diomandé",            club: "RB Leipzig",            wiki: "Yan_Diomandé" },
        { number: 10, name: "Diallo",        fullName: "Amad Diallo",             club: "Manchester United",     wiki: "Amad_Diallo" },
        { number: 11, name: "Pépé",          fullName: "Nicolas Pépé",            club: "Villarreal CF",         wiki: "Nicolas_Pépé" },
        { number: 16, name: "Bonny",         fullName: "Ange-Yoan Bonny",         club: "Internazionale",        wiki: "Ange-Yoan_Bonny" },
        { number: 18, name: "Guessand",      fullName: "Evann Guessand",          club: "Aston Villa",           wiki: "Evann_Guessand" },
        { number: 24, name: "Wahi",          fullName: "Elye Wahi",               club: "OGC Nice",              wiki: "Elye_Wahi" },
        { number: 25, name: "Toure",         fullName: "Bazoumana Touré",         club: "Hoffenheim",            wiki: "Bazoumana_Touré" },
        { number: 26, name: "Diakite",       fullName: "Oumar Diakite",           club: "Cercle Brugge",         wiki: "Oumar_Diakite" }
      ]
    }
  },

  "ghana": {
    name: "Ghana",
    coach: "Carlos Queiroz",
    flag: "gh",
    group: "L",
    groupTeams: "England · Croatia · Panama",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Ati-Zigi",      fullName: "Lawrence Ati-Zigi",       club: "FC Sion",               wiki: "Lawrence_Ati-Zigi" },
        { number: 12, name: "Anang",         fullName: "Joseph Anang",            club: "St Patrick's Athletic", wiki: "Joseph_Anang" },
        { number: 16, name: "Asare",         fullName: "Benjamin Asare",          club: "Hearts of Oak",         wiki: "Benjamin_Asare_(footballer)" }
      ],
      "Defenders": [
        { number: 2,  name: "Seidu",         fullName: "Alidu Seidu",             club: "Clermont Foot",         wiki: "Alidu_Seidu" },
        { number: 3,  name: "Yirenkyi",      fullName: "Caleb Yirenkyi",          club: "Hammarby IF",           wiki: "Caleb_Yirenkyi" },
        { number: 4,  name: "Adjetey",       fullName: "Jonas Adjetey",           club: "Ottawa Atletico",       wiki: "Jonas_Adjetey" },
        { number: 6,  name: "Mumin",         fullName: "Abdul Mumin",             club: "Getafe CF",             wiki: "Abdul_Mumin" },
        { number: 14, name: "Mensah",        fullName: "Gideon Mensah",           club: "Auxerre",               wiki: "Gideon_Mensah_(footballer)" },
        { number: 17, name: "Rahman",        fullName: "Baba Abdul Rahman",       club: "PAOK FC",               wiki: "Baba_Rahman" },
        { number: 18, name: "Opoku",         fullName: "Jerome Opoku",            club: "Stade Rennais",         wiki: "Jerome_Opoku" },
        { number: 23, name: "Luckassen",     fullName: "Derrick Luckassen",       club: "PSV Eindhoven",         wiki: "Derrick_Luckassen" }
      ],
      "Midfielders": [
        { number: 5,  name: "Partey",        fullName: "Thomas Partey",           club: "Arsenal",               wiki: "Thomas_Partey" },
        { number: 8,  name: "Sibo",          fullName: "Kwasi Sibo",              club: "FC Nantes",             wiki: "Kwasi_Sibo" },
        { number: 13, name: "Bonsu Baah",    fullName: "Christopher Bonsu Baah",  club: "Watford FC",            wiki: "Christopher_Bonsu_Baah" },
        { number: 15, name: "Owusu",         fullName: "Elisha Owusu",            club: "AZ Alkmaar",            wiki: "Elisha_Owusu" },
        { number: 20, name: "Boakye",        fullName: "Augustine Boakye",        club: "Nürnberg",              wiki: "Augustine_Boakye" },
        { number: 21, name: "Peprah",        fullName: "Kojo Oppong Peprah",      club: "Union SG",              wiki: "Kojo_Oppong-Peprah" },
        { number: 25, name: "Adu",           fullName: "Prince Kwabena Adu",      club: "Hammarby IF",           wiki: "Prince_Kwabena_Adu" },
        { number: 26, name: "Senaya",        fullName: "Marvin Senaya",           club: "Toulouse FC",           wiki: "Marvin_Senaya" }
      ],
      "Forwards": [
        { number: 7,  name: "Issahaku",      fullName: "Fatawu Issahaku",         club: "Leicester City",        wiki: "Fatawu_Issahaku" },
        { number: 9,  name: "J. Ayew",       fullName: "Jordan Ayew",             club: "Crystal Palace",        wiki: "Jordan_Ayew" },
        { number: 10, name: "Thomas-Asante", fullName: "Brandon Thomas-Asante",   club: "West Bromwich",         wiki: "Brandon_Thomas-Asante" },
        { number: 11, name: "Semenyo",       fullName: "Antoine Semenyo",         club: "Bournemouth",           wiki: "Antoine_Semenyo" },
        { number: 19, name: "I. Williams",   fullName: "Iñaki Williams",          club: "Athletic Club",         wiki: "Iñaki_Williams" },
        { number: 22, name: "Sulemana",      fullName: "Kamaldeen Sulemana",      club: "Southampton",           wiki: "Kamaldeen_Sulemana" },
        { number: 24, name: "Nuamah",        fullName: "Ernest Nuamah",           club: "Crystal Palace",        wiki: "Ernest_Nuamah" }
      ]
    }
  },

  "south-africa": {
    name: "South Africa",
    coach: "Hugo Broos",
    flag: "za",
    group: "A",
    groupTeams: "Mexico · South Korea · Czechia",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Williams",      fullName: "Ronwen Williams",         club: "Mamelodi Sundowns",     wiki: "Ronwen_Williams" },
        { number: 12, name: "Goss",          fullName: "Ricardo Goss",            club: "Sekhukhune United",     wiki: "Ricardo_Goss" },
        { number: 23, name: "Chaine",        fullName: "Sipho Chaine",            club: "Orlando Pirates",       wiki: "Sipho_Chaine" }
      ],
      "Defenders": [
        { number: 2,  name: "Mudau",         fullName: "Khuliso Mudau",           club: "Mamelodi Sundowns",     wiki: "Khuliso_Mudau" },
        { number: 3,  name: "Makhanya",      fullName: "Olwethu Makhanya",        club: "Philadelphia Union",    wiki: "Olwethu_Makhanya" },
        { number: 4,  name: "Cross",         fullName: "Bradley Cross",           club: "Kaizer Chiefs",         wiki: "Bradley_Cross_(footballer)" },
        { number: 5,  name: "Sibisi",        fullName: "Nkosinathi Sibisi",       club: "Orlando Pirates",       wiki: "Nkosinathi_Sibisi" },
        { number: 6,  name: "Modiba",        fullName: "Aubrey Modiba",           club: "Mamelodi Sundowns",     wiki: "Aubrey_Modiba" },
        { number: 13, name: "Ndamane",       fullName: "Khulumani Ndamane",       club: "Mamelodi Sundowns",     wiki: "Khulumani_Ndamane" },
        { number: 15, name: "Okon",          fullName: "Ime Okon",                club: "Hannover 96",           wiki: "Ime_Okon" },
        { number: 20, name: "Kabini",        fullName: "Samukele Kabini",         club: "Molde FK",              wiki: "Samukele_Kabini" },
        { number: 21, name: "Matuludi",      fullName: "Thabang Matuludi",        club: "Polokwane City",        wiki: "Thabang_Matuludi" },
        { number: 25, name: "Mbokazi",       fullName: "Mbekezeli Mbokazi",       club: "Chicago Fire",          wiki: "Mbekezeli_Mbokazi" }
      ],
      "Midfielders": [
        { number: 7,  name: "Appollis",      fullName: "Oswin Appollis",          club: "Orlando Pirates",       wiki: "Oswin_Appollis" },
        { number: 8,  name: "Mokoena",       fullName: "Teboho Mokoena",          club: "Mamelodi Sundowns",     wiki: "Teboho_Mokoena" },
        { number: 10, name: "Adams",         fullName: "Jayden Adams",            club: "Mamelodi Sundowns",     wiki: "Jayden_Adams_(footballer)" },
        { number: 14, name: "Mbatha",        fullName: "Thalente Mbatha",         club: "Orlando Pirates",       wiki: "Thalente_Mbatha" },
        { number: 16, name: "Sebelebele",    fullName: "Kamogelo Sebelebele",     club: "Orlando Pirates",       wiki: "Kamogelo_Sebelebele" },
        { number: 19, name: "Sithole",       fullName: "Sphephelo Sithole",       club: "CD Tondela",            wiki: "Sphephelo_Sithole" }
      ],
      "Forwards": [
        { number: 9,  name: "Foster",        fullName: "Lyle Foster",             club: "Burnley FC",            wiki: "Lyle_Foster" },
        { number: 11, name: "Moremi",        fullName: "Tshepang Moremi",         club: "Orlando Pirates",       wiki: "Tshepang_Moremi" },
        { number: 17, name: "Makgopa",       fullName: "Evidence Makgopa",        club: "Orlando Pirates",       wiki: "Evidence_Makgopa" }
      ]
    }
  },

  "cape-verde": {
    name: "Cape Verde",
    coach: "Pedro Brito (Bubista)",
    flag: "cv",
    group: "H",
    groupTeams: "Spain · Uruguay · Saudi Arabia",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Vozinha",       fullName: "Marco Soares",            club: "FC Goa",                wiki: "Marco_Soares_(goalkeeper)" },
        { number: 12, name: "Kuca",          fullName: "Ian Kuca",                club: "FK Austria Wien",       wiki: "Ian_Kuca" },
        { number: 23, name: "Fortes",        fullName: "Kenny Rodrigues",         club: "Santa Coloma",          wiki: "Kenny_Rodrigues_(footballer)" }
      ],
      "Defenders": [
        { number: 2,  name: "L. Costa",      fullName: "Logan Costa",             club: "Villarreal CF",         wiki: "Logan_Costa" },
        { number: 3,  name: "Stopira",       fullName: "Stopira",                 club: "Antalyaspor",           wiki: "Stopira" },
        { number: 4,  name: "Borges",        fullName: "Diney Borges",            club: "Vitória SC",            wiki: "Diney_Borges" },
        { number: 5,  name: "Tavares",       fullName: "Jeffry Fortes",           club: "Desportivo Aves",       wiki: "Jeffry_Fortes" },
        { number: 6,  name: "Caló",          fullName: "Cláudio Caló",            club: "Famalicão",             wiki: "Cláudio_Caló" },
        { number: 13, name: "Fernandes",     fullName: "Roberto Fernandes",       club: "CS Marítimo",           wiki: "Roberto_Fernandes_(footballer)" },
        { number: 15, name: "Rodrigues G.",  fullName: "Garry Rodrigues",         club: "Konyaspor",             wiki: "Garry_Rodrigues" }
      ],
      "Midfielders": [
        { number: 7,  name: "Andrade",       fullName: "Josimar Andrade",         club: "FC Santa Coloma",       wiki: "Josimar_Andrade_(footballer)" },
        { number: 8,  name: "Semedo",        fullName: "Ryan Mendes",             club: "LOSC Lille",            wiki: "Ryan_Mendes" },
        { number: 14, name: "Benchimol",     fullName: "Nuno Benchimol",          club: "Al-Fayha",              wiki: "Nuno_Benchimol" },
        { number: 16, name: "Alves",         fullName: "Sory Kaba",               club: "FC Metz",               wiki: "Sory_Kaba" },
        { number: 17, name: "Monteiro",      fullName: "Elí Monteiro",            club: "FK Jerv",               wiki: "Elí_Monteiro" },
        { number: 20, name: "Morais",        fullName: "Jordan Morais",           club: "CD Nacional",           wiki: "Jordan_Morais_(footballer)" }
      ],
      "Forwards": [
        { number: 9,  name: "Mendes",        fullName: "Ryan Mendes",             club: "Konyaspor",             wiki: "Ryan_Mendes" },
        { number: 10, name: "Livramento",    fullName: "Dailon Livramento",       club: "Casa Pia AC",           wiki: "Dailon_Livramento" },
        { number: 11, name: "C. Rodrigues",  fullName: "Carlos Rodrigues",        wiki: "Carlos_Rodrigues_(Cape_Verdean_footballer)", club: "Odense BK" },
        { number: 18, name: "Duarte",        fullName: "Dániel Sobral",           club: "FC Penafiel",           wiki: "Dániel_Sobral" },
        { number: 19, name: "Pires",         fullName: "Elvis Pires",             club: "FK Crvena Zvezda",      wiki: "Elvis_Pires" },
        { number: 21, name: "Correia",       fullName: "Pedro Correia",           club: "FK Anzhi",              wiki: "Pedro_Correia_(footballer)" },
        { number: 22, name: "Norberto",      fullName: "Norberto Varela",         club: "CS Marítimo",           wiki: "Norberto_Varela" }
      ]
    }
  },

  "dr-congo": {
    name: "DR Congo",
    coach: "Sébastien Desabre",
    flag: "cd",
    group: "K",
    groupTeams: "Portugal · Colombia · Uzbekistan",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Mpasi",         fullName: "Joël Kiassumbua",         club: "Kasımpaşa",             wiki: "Joël_Kiassumbua" },
        { number: 12, name: "Mombembe",      fullName: "Lionel Mpasi",            club: "TP Mazembe",            wiki: "Lionel_Mpasi" },
        { number: 23, name: "Bukasa",        fullName: "Elia Meschack",           club: "AS Vita Club",          wiki: "Elia_Meschack" }
      ],
      "Defenders": [
        { number: 2,  name: "Wan-Bissaka",   fullName: "Aaron Wan-Bissaka",       club: "West Ham United",       wiki: "Aaron_Wan-Bissaka" },
        { number: 3,  name: "Tuanzebe",      fullName: "Axel Tuanzebe",           club: "Burnley FC",            wiki: "Axel_Tuanzebe" },
        { number: 4,  name: "Mbemba",        fullName: "Chancel Mbemba",          club: "OM Marseille",          wiki: "Chancel_Mbemba" },
        { number: 5,  name: "Mukiele",       fullName: "Nordi Mukiele",           club: "Bayer Leverkusen",      wiki: "Nordi_Mukiele" },
        { number: 6,  name: "Luyindama",     fullName: "Christian Luyindama",     club: "Galatasaray",           wiki: "Christian_Luyindama" },
        { number: 13, name: "Kayembe",       fullName: "Mandela Keïta",           club: "RSC Anderlecht",        wiki: "Mandela_Keïta" },
        { number: 15, name: "Ngonda",        fullName: "Michel Ngonda",           club: "AS Monaco",             wiki: "Michel_Ngonda" },
        { number: 21, name: "Limbombe",      fullName: "Arthur Masuaku",          club: "Besiktas",              wiki: "Arthur_Masuaku" }
      ],
      "Midfielders": [
        { number: 7,  name: "Manzambi",      fullName: "Cédric Bakambu",          club: "Real Betis",            wiki: "Cédric_Bakambu" },
        { number: 8,  name: "Makengo",       fullName: "Jean-Kévin Makengo",      club: "Udinese",               wiki: "Jean-Kévin_Makengo" },
        { number: 10, name: "Kakuta",        fullName: "Gael Kakuta",             club: "Standard Liège",        wiki: "Gaël_Kakuta" },
        { number: 14, name: "Bola",          fullName: "Théo Bola",               club: "RC Lens",               wiki: "Théo_Bola" },
        { number: 16, name: "Lwanga",        fullName: "Bruninho Lwanga",         club: "Standard Liège",        wiki: "Bruninho_Lwanga" },
        { number: 17, name: "Lilepo",        fullName: "Marcel Tisserand",        club: "Fenerbahçe",            wiki: "Marcel_Tisserand" },
        { number: 20, name: "Mputu",         fullName: "Dieumerci Ndongala",      club: "TP Mazembe",            wiki: "Dieumerci_Ndongala" }
      ],
      "Forwards": [
        { number: 9,  name: "Bongonda",      fullName: "Yoann Wissa",             club: "Newcastle United",      wiki: "Yoann_Wissa" },
        { number: 11, name: "Malango",       fullName: "Jérémy Doku",             club: "Manchester City",       wiki: "Jérémy_Doku" },
        { number: 18, name: "Ilunga",        fullName: "Fiston Mayele",           club: "Panathinaikos",         wiki: "Fiston_Mayele" },
        { number: 19, name: "Lukaku",        fullName: "Jordan Lukaku",           club: "Spezia Calcio",         wiki: "Jordan_Lukaku" },
        { number: 22, name: "Tshimanga",     fullName: "Isaac Mbenza",            club: "Sporting CP",           wiki: "Isaac_Mbenza" },
        { number: 24, name: "Banza",         fullName: "Simon Banza",             club: "Sporting CP",           wiki: "Simon_Banza" },
        { number: 25, name: "Omoijuanfo",    fullName: "Cédric Omoijuanfo",       club: "Stade Rennais",         wiki: "Cédric_Omoijuanfo" }
      ]
    }
  },

  /* ── AFC ───────────────────────────────────────────────────── */

  "japan": {
    name: "Japan",
    coach: "Hajime Moriyasu",
    flag: "jp",
    group: "F",
    groupTeams: "Netherlands · Sweden · Tunisia",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Z. Suzuki",   fullName: "Zion Suzuki",        club: "Parma",            wiki: "Zion_Suzuki" },
        { number: 12, name: "K. Osako",    fullName: "Keisuke Osako",      club: "Sanfrecce Hiroshima",wiki: "Keisuke_Osako" },
        { number: 23, name: "Hayakawa",    fullName: "Tomoki Hayakawa",    club: "Kashima Antlers",  wiki: "Tomoki_Hayakawa" }
      ],
      "Defenders": [
        { number: 2,  name: "Sugawara",    fullName: "Yukinari Sugawara",  club: "Werder Bremen",    wiki: "Yukinari_Sugawara" },
        { number: 3,  name: "Taniguchi",   fullName: "Shogo Taniguchi",    club: "Sint-Truiden",     wiki: "Shōgo_Taniguchi" },
        { number: 4,  name: "Itakura",     fullName: "Ko Itakura",         club: "Ajax",             wiki: "Ko_Itakura" },
        { number: 5,  name: "Nagatomo",    fullName: "Yuto Nagatomo",      club: "FC Tokyo",         wiki: "Yuto_Nagatomo" },
        { number: 16, name: "Watanabe",    fullName: "Tsuyoshi Watanabe",  club: "Feyenoord",        wiki: "Tsuyoshi_Watanabe_(footballer)" },
        { number: 20, name: "Seko",        fullName: "Ayumu Seko",         club: "Le Havre",         wiki: "Ayumu_Seko" },
        { number: 21, name: "H. Ito",      fullName: "Hiroki Ito",         club: "Bayern Munich",    wiki: "Hiroki_Ito_(footballer,_born_2001)" },
        { number: 22, name: "Tomiyasu",    fullName: "Takehiro Tomiyasu",  club: "Ajax",             wiki: "Takehiro_Tomiyasu" },
        { number: 25, name: "J. Suzuki",   fullName: "Junnosuke Suzuki",   club: "FC Copenhagen",    wiki: "Junnosuke_Suzuki" }
      ],
      "Midfielders": [
        { number: 6,  name: "Endo",        fullName: "Wataru Endo",        club: "Liverpool",        wiki: "Wataru_Endo" },
        { number: 7,  name: "Ao Tanaka",   fullName: "Ao Tanaka",          club: "Leeds United",     wiki: "Ao_Tanaka" },
        { number: 8,  name: "Kubo",        fullName: "Takefusa Kubo",      club: "Real Sociedad",    wiki: "Takefusa_Kubo" },
        { number: 10, name: "Doan",        fullName: "Ritsu Doan",         club: "Eintracht Frankfurt",wiki: "Ritsu_Dōan" },
        { number: 15, name: "Kamada",      fullName: "Daichi Kamada",      club: "Crystal Palace",   wiki: "Daichi_Kamada" },
        { number: 17, name: "I. Suzuki",   fullName: "Iori Suzuki",        club: "Sporting CP",      wiki: "Iori_Suzuki" },
        { number: 18, name: "Sano",        fullName: "Kaishū Sano",        club: "Mainz",            wiki: "Kaishū_Sano" }
      ],
      "Forwards": [
        { number: 11, name: "D. Maeda",    fullName: "Daizen Maeda",       club: "Celtic",           wiki: "Daizen_Maeda" },
        { number: 13, name: "Nakamura",    fullName: "Keito Nakamura",     club: "RC Lens",          wiki: "Keito_Nakamura" },
        { number: 14, name: "J. Ito",      fullName: "Junya Ito",          club: "Genk",             wiki: "Junya_Ito" },
        { number: 19, name: "Ogawa",       fullName: "Kōki Ogawa",         club: "NEC Nijmegen",     wiki: "Kōki_Ogawa" }
      ]
    }
  },

  "south-korea": {
    name: "South Korea",
    coach: "Hong Myung-bo",
    flag: "kr",
    group: "A",
    groupTeams: "Mexico · South Africa · Czechia",
    players: {
      "Goalkeepers": [
        { number: 12, name: "Song",        fullName: "Song Bum-keun",      club: "Jeonbuk Hyundai",  wiki: "Song_Bum-keun" },
        { number: 21, name: "Jo",          fullName: "Jo Hyeon-woo",       club: "Ulsan HD FC",      wiki: "Jo_Hyeon-woo" },
        { number: 1,  name: "Kim S.",      fullName: "Kim Seung-gyu",      club: "FC Tokyo",         wiki: "Kim_Seung-gyu" }
      ],
      "Defenders": [
        { number: 2,  name: "Lee H.",      fullName: "Lee Han-beom",       club: "FC Midtjylland",   wiki: "Lee_Han-beom" },
        { number: 4,  name: "Kim M.",      fullName: "Kim Min-jae",        club: "Bayern Munich",    wiki: "Kim_Min-jae" },
        { number: 5,  name: "Kim T.",      fullName: "Kim Tae-hyeon",      club: "Kashima Antlers",  wiki: "Kim_Tae-hyeon" },
        { number: 3,  name: "Lee G.",      fullName: "Lee Gi-hyuk",        club: "Gangwon FC",       wiki: "Lee_Gi-hyuk" },
        { number: 13, name: "Lee T.",      fullName: "Lee Tae-seok",       club: "Austria Wien",     wiki: "Lee_Tae-seok" },
        { number: 15, name: "Park",        fullName: "Park Jin-seob",      club: "Zhejiang FC",      wiki: "Park_Jin-seob" },
        { number: 20, name: "Kim M.H.",    fullName: "Kim Moon-hwan",      club: "Daejeon Hana",     wiki: "Kim_Moon-hwan" },
        { number: 22, name: "Seol",        fullName: "Seol Young-woo",     club: "FK Crvena zvezda", wiki: "Seol_Young-woo" },
        { number: 23, name: "Castrop",     fullName: "Jens Castrop",       club: "Borussia M'gladbach",wiki: "Jens_Castrop" },
        { number: 14, name: "Cho W.",      fullName: "Cho Wi-je",          club: "Jeonbuk Hyundai",  wiki: "Cho_Wi-je" }
      ],
      "Midfielders": [
        { number: 6,  name: "Hwang I.",    fullName: "Hwang In-beom",      club: "Feyenoord",        wiki: "Hwang_In-beom" },
        { number: 8,  name: "Yang",        fullName: "Yang Hyun-jun",      club: "Celtic",           wiki: "Yang_Hyun-jun" },
        { number: 9,  name: "Paik",        fullName: "Paik Seung-ho",      club: "Birmingham City",  wiki: "Paik_Seung-ho" },
        { number: 16, name: "Kim J.",      fullName: "Kim Jin-gyu",        club: "Jeonbuk Hyundai",  wiki: "Kim_Jin-gyu" },
        { number: 17, name: "Bae",         fullName: "Bae Jun-ho",         club: "Stoke City",       wiki: "Bae_Jun-ho" },
        { number: 24, name: "Eom",         fullName: "Eom Ji-sung",        club: "Swansea City",     wiki: "Eom_Ji-sung" },
        { number: 26, name: "Lee D.",      fullName: "Lee Dong-gyeong",    club: "Ulsan HD FC",      wiki: "Lee_Dong-gyeong" },
        { number: 10, name: "Lee J.",      fullName: "Lee Jae-sung",       club: "Mainz",            wiki: "Lee_Jae-sung" },
        { number: 19, name: "Lee K.",      fullName: "Lee Kang-in",        club: "Paris Saint-Germain",wiki: "Lee_Kang-in" },
        { number: 11, name: "Hwang H.",    fullName: "Hwang Hee-chan",     club: "Wolverhampton",    wiki: "Hwang_Hee-chan" }
      ],
      "Forwards": [
        { number: 7,  name: "Son",         fullName: "Son Heung-min",      club: "LAFC",             wiki: "Son_Heung-min" },
        { number: 18, name: "Oh",          fullName: "Oh Hyeon-gyu",       club: "Beşiktaş",         wiki: "Oh_Hyeon-gyu" },
        { number: 25, name: "Cho G.",      fullName: "Cho Gue-sung",       club: "Freiburg",         wiki: "Cho_Gue-sung" }
      ]
    }
  },

  "australia": {
    name: "Australia",
    coach: "Tony Popovic",
    flag: "au",
    group: "D",
    groupTeams: "USA · Paraguay · Türkiye",
    players: {
      "Goalkeepers": [
        { number: 1,  name: "Ryan",        fullName: "Maty Ryan",          club: "Levante UD",       wiki: "Mathew_Ryan" },
        { number: 12, name: "Izzo",        fullName: "Paul Izzo",          club: "Randers FC",       wiki: "Paul_Izzo" },
        { number: 18, name: "Beach",       fullName: "Patrick Beach",      club: "Melbourne City",   wiki: "Patrick_Beach_(footballer)" }
      ],
      "Defenders": [
        { number: 2,  name: "Degenek",     fullName: "Milos Degenek",      club: "APOEL FC",         wiki: "Miloš_Degenek" },
        { number: 3,  name: "Circati",     fullName: "Alessandro Circati", club: "Parma Calcio",     wiki: "Alessandro_Circati" },
        { number: 4,  name: "Italiano",    fullName: "Jacob Italiano",     club: "Grazer AK",        wiki: "Jacob_Italiano" },
        { number: 5,  name: "Bos",         fullName: "Jordan Bos",         club: "Feyenoord",        wiki: "Jordan_Bos" },
        { number: 6,  name: "Geria",       fullName: "Jason Geria",        club: "Albirex Niigata",  wiki: "Jason_Geria" },
        { number: 15, name: "Trewin",      fullName: "Kai Trewin",         club: "New York City FC", wiki: "Kai_Trewin" },
        { number: 16, name: "Behich",      fullName: "Aziz Behich",        club: "Melbourne City",   wiki: "Aziz_Behich" },
        { number: 19, name: "Souttar",     fullName: "Harry Souttar",      club: "Leicester City",   wiki: "Harry_Souttar" },
        { number: 21, name: "Burgess",     fullName: "Cameron Burgess",    club: "Swansea City",     wiki: "Cameron_Burgess_(footballer)" },
        { number: 25, name: "Herrington",  fullName: "Lucas Herrington",   club: "Colorado Rapids",  wiki: "Lucas_Herrington" }
      ],
      "Midfielders": [
        { number: 8,  name: "Metcalfe",    fullName: "Connor Metcalfe",    club: "St. Pauli",        wiki: "Connor_Metcalfe" },
        { number: 10, name: "Hrustic",     fullName: "Ajdin Hrustic",      club: "Heracles Almelo",  wiki: "Ajdin_Hrustić" },
        { number: 13, name: "O'Neill",     fullName: "Aiden O'Neill",      club: "New York City FC", wiki: "Aiden_O'Neill_(footballer)" },
        { number: 14, name: "Devlin",      fullName: "Cameron Devlin",     club: "Hearts",           wiki: "Cameron_Devlin" },
        { number: 22, name: "Irvine",      fullName: "Jackson Irvine",     club: "St. Pauli",        wiki: "Jackson_Irvine" },
        { number: 24, name: "Okon-Engstler",fullName: "Paul Okon-Engstler",club: "Sydney FC",        wiki: "Paul_Okon-Engstler" }
      ],
      "Forwards": [
        { number: 7,  name: "Leckie",      fullName: "Mathew Leckie",      club: "Melbourne City",   wiki: "Mathew_Leckie" },
        { number: 9,  name: "Toure",       fullName: "Mohamed Toure",      club: "Norwich City",     wiki: "Mohamed_Toure_(footballer)" },
        { number: 11, name: "Mabil",       fullName: "Awer Mabil",         club: "CD Castellón",     wiki: "Awer_Mabil" },
        { number: 17, name: "Irankunda",   fullName: "Nestory Irankunda",  club: "Watford",          wiki: "Nestory_Irankunda" },
        { number: 20, name: "Volpato",     fullName: "Cristian Volpato",   club: "Sassuolo",         wiki: "Cristian_Volpato" },
        { number: 23, name: "Velupillay",  fullName: "Nishan Velupillay",  club: "Melbourne Victory",wiki: "Nishan_Velupillay" },
        { number: 26, name: "Yengi",       fullName: "Tete Yengi",         club: "Machida Zelvia",   wiki: "Tete_Yengi" }
      ]
    }
  },

  "iran": {
    name: "Iran",
    coach: "Amir Ghalenoei",
    flag: "ir",
    group: "G",
    groupTeams: "Belgium · Egypt · New Zealand",
    players: {
      1:  { number: 1,  name: "Beyranvand",   fullName: "Alireza Beyranvand",        position: "GK",  club: "Lechia Gdańsk",           wiki: "Alireza_Beiranvand" },
      2:  { number: 2,  name: "Khalilzadeh",  fullName: "Shoja Khalilzadeh",         position: "DEF", club: "Al-Kholood",              wiki: "Shoja_Khalilzadeh" },
      3:  { number: 3,  name: "Kanaani",      fullName: "Hosein Kanaani",            position: "DEF", club: "Tractor SC",              wiki: "Hossein_Kanaani" },
      4:  { number: 4,  name: "Eiri",         fullName: "Daniyal Eiri",              position: "DEF", club: "Esteghlal",               wiki: "Daniyal_Eiri" },
      5:  { number: 5,  name: "Hajisafi",     fullName: "Ehsan Hajisafi",            position: "DEF", club: "Sepahan",                 wiki: "Ehsan_Hajisafi" },
      6:  { number: 6,  name: "Mohammadi",    fullName: "Milad Mohammadi",           position: "DEF", club: "Esteghlal",               wiki: "Milad_Mohammadi_(footballer)" },
      7:  { number: 7,  name: "Ezatollahi",   fullName: "Saeid Ezatollahi",          position: "MID", club: "Al-Kholood",              wiki: "Saeid_Ezatolahi" },
      8:  { number: 8,  name: "Cheshmi",      fullName: "Rouzbeh Cheshmi",           position: "MID", club: "Esteghlal",               wiki: "Rouzbeh_Cheshmi" },
      9:  { number: 9,  name: "Taremi",       fullName: "Mehdi Taremi",              position: "FWD", club: "Olympiacos",              wiki: "Mehdi_Taremi",     captain: true },
      10: { number: 10, name: "Jahanbakhsh",  fullName: "Alireza Jahanbakhsh",       position: "FWD", club: "AZ Alkmaar",              wiki: "Alireza_Jahanbakhsh" },
      11: { number: 11, name: "Hosseinzadeh", fullName: "Amirhossein Hosseinzadeh", position: "FWD", club: "Sepahan",                 wiki: "Amirhossein_Hosseinzadeh" },
      12: { number: 12, name: "Hoseini",      fullName: "Hosein Hoseini",            position: "GK",  club: "Persepolis",              wiki: "Hossein_Hosseini_(goalkeeper)" },
      13: { number: 13, name: "Hardani",      fullName: "Saleh Hardani",             position: "DEF", club: "Tractor SC",              wiki: "Saleh_Hardani" },
      14: { number: 14, name: "Ghorbani",     fullName: "Mohammed Ghorbani",         position: "MID", club: "Sepahan",                 wiki: "Mohammad_Ghorbani_(footballer)" },
      15: { number: 15, name: "Rezaiyan",     fullName: "Ramin Rezaiyan",            position: "DEF", club: "Al-Kholood",              wiki: "Ramin_Rezaeian" },
      16: { number: 16, name: "Ghoddos",      fullName: "Saman Ghoddos",             position: "MID", club: "Nottingham Forest",       wiki: "Saman_Ghoddos" },
      17: { number: 17, name: "Ghayedi",      fullName: "Mehdi Ghayedi",             position: "MID", club: "Esteghlal",               wiki: "Mehdi_Ghayedi" },
      18: { number: 18, name: "Razaghniya",   fullName: "Amir Razaghniya",           position: "MID", club: "Sepahan",                 wiki: "Amir_Mohammad_Razagh_Niya" },
      19: { number: 19, name: "Torabi",       fullName: "Mehdi Torabi",              position: "MID", club: "Persepolis",              wiki: "Mehdi_Torabi_(footballer)" },
      20: { number: 20, name: "Yousefi",      fullName: "Ariya Yousefi",             position: "MID", club: "Esteghlal",               wiki: "Arya_Yousefi" },
      21: { number: 21, name: "Nemati",       fullName: "Ali Nemati",                position: "DEF", club: "Esteghlal",               wiki: "Ali_Nemati_(footballer)" },
      22: { number: 22, name: "Mohebbi",      fullName: "Mohammed Mohebbi",          position: "MID", club: "Persepolis",              wiki: "Mohammad_Mohebbi_(footballer)" },
      23: { number: 23, name: "Niazmand",     fullName: "Payam Niazmand",            position: "GK",  club: "Nassaji",                 wiki: "Payam_Niazmand" },
      24: { number: 24, name: "Dargahi",      fullName: "Denis Dargahi",             position: "FWD", club: "Mjällby AIF",             wiki: "Denis_Dargahi" },
      25: { number: 25, name: "Alipour",      fullName: "Ali Alipour",               position: "FWD", club: "Al-Kholood",              wiki: "Ali_Alipour_(footballer,_born_1995)" },
      26: { number: 26, name: "Moghanloo",    fullName: "Shahriyar Moghanloo",       position: "FWD", club: "Persepolis",              wiki: "Shahriyar_Moghanloo" },
    }
  },

  "saudi-arabia": {
    name: "Saudi Arabia",
    coach: "Georgios Donis",
    flag: "sa",
    group: "H",
    groupTeams: "Spain · Uruguay · Cape Verde",
    players: {
      1:  { number: 1,  name: "Al-Owais",     fullName: "Mohammed Al-Owais",         position: "GK",  club: "Al-Hilal",                wiki: "Mohammed_Al-Owais" },
      2:  { number: 2,  name: "Abdulhamid",   fullName: "Saud Abdulhamid",           position: "DEF", club: "RC Lens",                 wiki: "Saud_Abdulhamid" },
      3:  { number: 3,  name: "Al-Amri",      fullName: "Abdulelah Al-Amri",         position: "DEF", club: "Al-Nassr",                wiki: "Abdulelah_Al-Amri" },
      4:  { number: 4,  name: "Al-Tambakti",  fullName: "Hassan Al-Tambakti",        position: "DEF", club: "Al-Hilal",                wiki: "Hassan_Al-Tambakti" },
      5:  { number: 5,  name: "Thikri",       fullName: "Jehad Thikri",              position: "DEF", club: "Al-Qadsiah",              wiki: "Jehad_Thikri" },
      6:  { number: 6,  name: "Lajami",       fullName: "Ali Lajami",                position: "DEF", club: "Al-Hilal",                wiki: "Ali_Lajami" },
      7:  { number: 7,  name: "Kanno",        fullName: "Mohammed Kanno",            position: "MID", club: "Al-Hilal",                wiki: "Mohammed_Kanno" },
      8:  { number: 8,  name: "K.Al-Ghannam", fullName: "Khalid Al-Ghannam",         position: "MID", club: "Al-Ettifaq",              wiki: "Khalid_Al-Ghannam_(footballer)" },
      9:  { number: 9,  name: "Al-Buraikan",  fullName: "Firas Al-Buraikan",         position: "FWD", club: "Al-Ahli",                 wiki: "Firas_Al-Buraikan" },
      10: { number: 10, name: "S.Al-Dawsari", fullName: "Salem Al-Dawsari",          position: "MID", club: "Al-Hilal",                wiki: "Salem_Al-Dawsari",  captain: true },
      11: { number: 11, name: "Al-Shehri",    fullName: "Saleh Al-Shehri",           position: "FWD", club: "Al-Ittihad",              wiki: "Saleh_Al-Shehri" },
      12: { number: 12, name: "Al-Aqidi",     fullName: "Nawaf Al-Aqidi",            position: "GK",  club: "Al-Nassr",                wiki: "Nawaf_Al-Aqidi" },
      13: { number: 13, name: "Kadesh",       fullName: "Hassan Kadesh",             position: "DEF", club: "Al-Ittihad",              wiki: "Hassan_Kadesh" },
      14: { number: 14, name: "Al-Khaibari",  fullName: "Abdullah Al-Khaibari",      position: "MID", club: "Al-Nassr",                wiki: "Abdullah_Al-Khaibari" },
      15: { number: 15, name: "Al-Shamat",    fullName: "Mohammed Abu Al-Shamat",    position: "DEF", club: "Al-Qadsiah",              wiki: "Mohammed_Abu_Al-Shamat" },
      16: { number: 16, name: "Al-Juwayr",    fullName: "Musab Al-Juwayr",           position: "MID", club: "Al-Qadsiah",              wiki: "Musab_Al-Juwayr" },
      17: { number: 17, name: "Al-Hajji",     fullName: "Alaa Al-Hajji",             position: "MID", club: "Neom SC",                 wiki: "Alaa_Al-Hajji" },
      18: { number: 18, name: "N.Al-Dawsari", fullName: "Nasser Al-Dawsari",         position: "MID", club: "Al-Hilal",                wiki: "Nasser_Al-Dawsari" },
      19: { number: 19, name: "Al-Johani",    fullName: "Ziyad Al-Johani",           position: "MID", club: "Al-Ahli",                 wiki: "Ziyad_Al-Johani" },
      20: { number: 20, name: "Yahya",        fullName: "Ayman Yahya",               position: "MID", club: "Al-Nassr",                wiki: "Ayman_Yahya" },
      21: { number: 21, name: "Al-Majrashi",  fullName: "Ali Majrashi",              position: "DEF", club: "Al-Ahli",                 wiki: "Ali_Majrashi" },
      22: { number: 22, name: "Al-Harbi",     fullName: "Moteb Al-Harbi",            position: "DEF", club: "Al-Hilal",                wiki: "Moteb_Al-Harbi" },
      23: { number: 23, name: "Al-Kassar",    fullName: "Ahmed Al-Kassar",           position: "GK",  club: "Al-Qadsiah",              wiki: "Ahmed_Al-Kassar" },
      24: { number: 24, name: "Boushal",      fullName: "Nawaf Boushal",             position: "DEF", club: "Al-Nassr",                wiki: "Nawaf_Boushal" },
      25: { number: 25, name: "S.Al-Ghannam", fullName: "Sultan Al-Ghannam",         position: "DEF", club: "Al-Nassr",                wiki: "Sultan_Al-Ghannam" },
      26: { number: 26, name: "Al-Hamdan",    fullName: "Abdullah Al-Hamdan",        position: "FWD", club: "Al-Nassr",                wiki: "Abdullah_Al-Hamdan_(footballer)" },
    }
  },

  "qatar": {
    name: "Qatar",
    coach: "Julen Lopetegui",
    flag: "qa",
    group: "B",
    groupTeams: "Canada · Switzerland · Bosnia & Herzegovina",
    players: {
      1:  { number: 1,  name: "Barsham",      fullName: "Meshaal Barsham",           position: "GK",  club: "Al-Duhail",               wiki: "Meshaal_Barsham" },
      2:  { number: 2,  name: "Pedro Miguel", fullName: "Pedro Miguel",              position: "DEF", club: "Al-Rayyan",               wiki: "Pedro_Miguel_(footballer)" },
      3:  { number: 3,  name: "Lucas Mendes", fullName: "Lucas Mendes",              position: "DEF", club: "Al-Duhail",               wiki: "Lucas_Mendes_(footballer,_born_1991)" },
      4:  { number: 4,  name: "Khoukhi",      fullName: "Boualem Khoukhi",           position: "DEF", club: "Al-Sadd",                 wiki: "Boualem_Khoukhi" },
      5:  { number: 5,  name: "Al-Brake",     fullName: "Sultan Al-Brake",           position: "DEF", club: "Al-Sadd",                 wiki: "Sultan_Al-Brake" },
      6:  { number: 6,  name: "Al-Alawi",     fullName: "Ayoub Al-Alawi",            position: "DEF", club: "Al-Arabi",                wiki: "Ayoub_Al-Alawi" },
      7:  { number: 7,  name: "Hatem",        fullName: "Abdulaziz Hatem",           position: "MID", club: "Al-Rayyan",               wiki: "Abdulaziz_Hatem" },
      8:  { number: 8,  name: "Madibo",       fullName: "Assim Madibo",              position: "MID", club: "Al-Duhail",               wiki: "Assim_Madibo" },
      9:  { number: 9,  name: "Al-Haydos",    fullName: "Hassan Al-Haydos",          position: "FWD", club: "Al-Sadd",                 wiki: "Hassan_Al-Haydos" },
      10: { number: 10, name: "Afif",         fullName: "Akram Afif",                position: "FWD", club: "Al-Sadd",                 wiki: "Akram_Afif",       captain: true },
      11: { number: 11, name: "Edmilson",     fullName: "Edmílson Júnior",           position: "FWD", club: "Al-Duhail",               wiki: "Edmílson_Júnior_(footballer,_born_1990)" },
      12: { number: 12, name: "Abunada",      fullName: "Mahmoud Abunada",           position: "GK",  club: "Al-Sadd",                 wiki: "Mahmoud_Abunada" },
      13: { number: 13, name: "Al-Hussain",   fullName: "Al-Hashmi Al-Hussain",      position: "DEF", club: "Al-Gharafa",              wiki: "Al-Hashmi_Al-Hussain" },
      14: { number: 14, name: "Boudiaf",      fullName: "Karim Boudiaf",             position: "MID", club: "Al-Duhail",               wiki: "Karim_Boudiaf" },
      15: { number: 15, name: "Abdurisag",    fullName: "Yusuf Abdurisag",           position: "FWD", club: "Al-Sadd",                 wiki: "Yusuf_Abdurisag" },
      16: { number: 16, name: "A.Fathi",      fullName: "Ahmed Fathi",               position: "MID", club: "Al-Sadd",                 wiki: "Ahmed_Fathi_(Qatari_footballer)" },
      17: { number: 17, name: "Al-Ganehi",    fullName: "Ahmed Al-Ganehi",           position: "FWD", club: "Al-Ahli",                 wiki: "Ahmed_Al-Ganehi" },
      18: { number: 18, name: "Gaber",        fullName: "Jassim Gaber",              position: "MID", club: "Al-Sadd",                 wiki: "Jassim_Gaber" },
      19: { number: 19, name: "Almoez Ali",   fullName: "Almoez Ali",                position: "FWD", club: "Al-Duhail",               wiki: "Almoez_Ali" },
      20: { number: 20, name: "Mannai",       fullName: "Mohammed Mannai",           position: "MID", club: "Al-Gharafa",              wiki: "Mohammed_Mannai" },
      21: { number: 21, name: "Homam",        fullName: "Homam Al-Amin",             position: "DEF", club: "Al-Sadd",                 wiki: "Homam_Al-Amin" },
      22: { number: 22, name: "Laye",         fullName: "Issa Laye",                 position: "DEF", club: "Al-Arabi",                wiki: "Issa_Laye" },
      23: { number: 23, name: "Zakaria",      fullName: "Salah Zakaria",             position: "GK",  club: "Al-Arabi",                wiki: "Salah_Zakaria" },
      24: { number: 24, name: "Tahsin",       fullName: "Tahsin Mohammed",           position: "FWD", club: "Al-Sadd",                 wiki: "Tahsin_Mohammed" },
      25: { number: 25, name: "Muntari",      fullName: "Mohammed Muntari",          position: "FWD", club: "Al-Duhail",               wiki: "Mohammed_Muntari_(footballer)" },
      26: { number: 26, name: "Al-Alaa",      fullName: "Ahmed Alaa",                position: "FWD", club: "Al-Sadd",                 wiki: "Ahmed_Alaa_(footballer)" },
    }
  },

  "jordan": {
    name: "Jordan",
    coach: "Jamal Sellami",
    flag: "jo",
    group: "J",
    groupTeams: "Argentina · Algeria · Austria",
    players: {
      1:  { number: 1,  name: "Abulaila",     fullName: "Yazeed Abulaila",           position: "GK",  club: "Al-Hussein",              wiki: "Yazeed_Abulaila" },
      2:  { number: 2,  name: "Nasib",        fullName: "Ahmad Nasib",               position: "DEF", club: "Al-Faisaly",              wiki: "Ahmad_Nasib" },
      3:  { number: 3,  name: "Al-Rosan",     fullName: "Mousa Al-Rosan",            position: "DEF", club: "Al-Wehdat",               wiki: "Mousa_Al-Rosan" },
      4:  { number: 4,  name: "Obaid",        fullName: "Saleem Obaid",              position: "DEF", club: "Al-Hussein",              wiki: "Saleem_Obaid" },
      5:  { number: 5,  name: "Haddad",       fullName: "Ehsan Haddad",              position: "DEF", club: "Al-Hussein",              wiki: "Ehsan_Haddad",     captain: true },
      6:  { number: 6,  name: "Al-Arab",      fullName: "Samer Al-Arab",             position: "DEF", club: "Al-Faisaly",              wiki: "Samer_Al-Arab" },
      7:  { number: 7,  name: "Al-Rawabdeh",  fullName: "Abdallah Al-Rawabdeh",      position: "MID", club: "Al-Wehdat",               wiki: "Abdallah_Al-Rawabdeh" },
      8:  { number: 8,  name: "Al-Rashdan",   fullName: "Yousef Al-Rashdan",         position: "MID", club: "Al-Faisaly",              wiki: "Yousef_Al-Rashdan" },
      9:  { number: 9,  name: "Abu Zrayq",    fullName: "Mohammed Abu Zrayq",        position: "FWD", club: "Raja Casablanca",         wiki: "Mohammed_Abu_Zrayq" },
      10: { number: 10, name: "Al-Tamari",    fullName: "Mousa Al-Tamari",           position: "FWD", club: "Stade Rennais",           wiki: "Mousa_Al-Tamari" },
      11: { number: 11, name: "Odeh",         fullName: "Odeh Al-Fakhouri",          position: "FWD", club: "Al-Wehdat",               wiki: "Odeh_Al-Fakhouri" },
      12: { number: 12, name: "I.Al-Fakhouri",fullName: "Ibrahim Al-Fakhouri",       position: "GK",  club: "Al-Ramtha",               wiki: "Ibrahim_Al-Fakhouri" },
      13: { number: 13, name: "Abualnadi",    fullName: "Mohammed Abualnadi",        position: "DEF", club: "Al-Faisaly",              wiki: "Mohammed_Abualnadi" },
      14: { number: 14, name: "Saadeh",       fullName: "Zaid Saadeh",               position: "MID", club: "Al-Jazira",               wiki: "Zaid_Saadeh" },
      15: { number: 15, name: "Abu Dahab",    fullName: "Ahmad Abu Dahab",           position: "DEF", club: "Al-Faisaly",              wiki: "Ahmad_Abu_Dahab" },
      16: { number: 16, name: "Ayed",         fullName: "Nour Ayed",                 position: "MID", club: "Al-Wehdat",               wiki: "Nour_Ayed" },
      17: { number: 17, name: "Al-Mardi",     fullName: "Khalil Al-Mardi",           position: "MID", club: "Al-Wehdat",               wiki: "Khalil_Al-Mardi" },
      18: { number: 18, name: "Jamous",       fullName: "Amer Jamous",               position: "MID", club: "Al-Zawraa",               wiki: "Amer_Jamous" },
      19: { number: 19, name: "Azaizeh",      fullName: "Mohammad Azaizeh",          position: "FWD", club: "Al-Faisaly",              wiki: "Mohammad_Azaizeh" },
      20: { number: 20, name: "Al-Dawoud",    fullName: "Mahmoud Al-Dawoud",         position: "MID", club: "Shabab Al-Ahli",          wiki: "Mahmoud_Al-Dawoud" },
      21: { number: 21, name: "Abu Taha",     fullName: "Baha Abu Taha",             position: "DEF", club: "Al-Wehdat",               wiki: "Baha_Abu_Taha" },
      22: { number: 22, name: "Abu Hasheesh", fullName: "Yazan Abu Hasheesh",        position: "DEF", club: "Al-Ramtha",               wiki: "Yazan_Abu_Hasheesh" },
      23: { number: 23, name: "Bani Attiah",  fullName: "Mu'ath Bani Attiah",        position: "GK",  club: "Al-Faisaly",              wiki: "Mu'ath_Bani_Attiah" },
      24: { number: 24, name: "Banawi",       fullName: "Omar Banawi",               position: "DEF", club: "Al-Hussain",              wiki: "Omar_Banawi" },
      25: { number: 25, name: "M.Taha",       fullName: "Mohammad Taha",             position: "FWD", club: "Al-Faisaly",              wiki: "Mohammad_Taha_(footballer)" },
      26: { number: 26, name: "Olwan",        fullName: "Ali Olwan",                 position: "FWD", club: "Al-Faisaly",              wiki: "Ali_Olwan" },
    }
  },

  "uzbekistan": {
    name: "Uzbekistan",
    coach: "Fabio Cannavaro",
    flag: "uz",
    group: "K",
    groupTeams: "Portugal · Colombia · DR Congo",
    players: {
      1:  { number: 1,  name: "Yusupov",      fullName: "Utkir Yusupov",             position: "GK",  club: "Navbahor",                wiki: "Utkir_Yusupov" },
      2:  { number: 2,  name: "Ashurmatov",   fullName: "Rustam Ashurmatov",         position: "DEF", club: "Esteghlal",               wiki: "Rustam_Ashurmatov" },
      3:  { number: 3,  name: "Sayfiev",      fullName: "Farrukh Sayfiev",           position: "DEF", club: "Neftchi Fergana",         wiki: "Farrukh_Sayfiev" },
      4:  { number: 4,  name: "Alijonov",     fullName: "Khojiakbar Alijonov",       position: "DEF", club: "Pakhtakor",               wiki: "Khojiakbar_Alijonov" },
      5:  { number: 5,  name: "Nasrullaev",   fullName: "Sherzod Nasrullaev",        position: "DEF", club: "Nasaf",                   wiki: "Sherzod_Nasrullaev" },
      6:  { number: 6,  name: "Eshmurodov",   fullName: "Umar Eshmurodov",           position: "DEF", club: "Nasaf",                   wiki: "Umar_Eshmurodov" },
      7:  { number: 7,  name: "Shukurov",     fullName: "Otabek Shukurov",           position: "MID", club: "Baniyas SC",              wiki: "Otabek_Shukurov" },
      8:  { number: 8,  name: "Masharipov",   fullName: "Jaloliddin Masharipov",     position: "MID", club: "Esteghlal",               wiki: "Jaloliddin_Masharipov" },
      9:  { number: 9,  name: "Shomurodov",   fullName: "Eldor Shomurodov",          position: "FWD", club: "İstanbul Başakşehir",     wiki: "Eldor_Shomurodov",  captain: true },
      10: { number: 10, name: "Sergeev",      fullName: "Igor Sergeev",              position: "FWD", club: "Persepolis",              wiki: "Igor_Sergeev_(footballer)" },
      11: { number: 11, name: "Amonov",       fullName: "Azizbek Amonov",            position: "FWD", club: "Bukhara",                 wiki: "Azizbek_Amonov" },
      12: { number: 12, name: "Nematov",      fullName: "Abduvohid Nematov",         position: "GK",  club: "Nasaf",                   wiki: "Abduvohid_Nematov" },
      13: { number: 13, name: "Khusanov",     fullName: "Abdukodir Khusanov",        position: "DEF", club: "Manchester City",         wiki: "Abdukodir_Khusanov" },
      14: { number: 14, name: "Hamrobekov",   fullName: "Odiljon Hamrobekov",        position: "MID", club: "Tractor SC",              wiki: "Odiljon_Hamrobekov" },
      15: { number: 15, name: "Abdullaev",    fullName: "Abdulla Abdullaev",         position: "DEF", club: "Dibba Al-Fujairah",       wiki: "Abdulla_Abdullaev_(footballer)" },
      16: { number: 16, name: "Urunov",       fullName: "Oston Urunov",              position: "MID", club: "Persepolis",              wiki: "Oston_Urunov" },
      17: { number: 17, name: "Iskanderov",   fullName: "Jamshid Iskanderov",        position: "MID", club: "Neftchi Fergana",         wiki: "Jamshid_Iskanderov" },
      18: { number: 18, name: "Khamdamov",    fullName: "Dostonbek Khamdamov",       position: "MID", club: "Pakhtakor",               wiki: "Dostonbek_Khamdamov" },
      19: { number: 19, name: "Fayzullaev",   fullName: "Abbosbek Fayzullaev",       position: "MID", club: "İstanbul Başakşehir",     wiki: "Abbosbek_Fayzullaev" },
      20: { number: 20, name: "Mozgovoy",     fullName: "Akmal Mozgovoy",            position: "MID", club: "Pakhtakor",               wiki: "Akmal_Mozgovoy" },
      21: { number: 21, name: "Karimov",      fullName: "Bekhruz Karimov",           position: "DEF", club: "Surkhon",                 wiki: "Bekhruz_Karimov" },
      22: { number: 22, name: "Urozov",       fullName: "Jakhongir Urozov",          position: "DEF", club: "Dinamo Samarqand",        wiki: "Jakhongir_Urozov" },
      23: { number: 23, name: "Ergashev",     fullName: "Botirali Ergashev",         position: "GK",  club: "Neftchi Fergana",         wiki: "Botirali_Ergashev" },
      24: { number: 24, name: "Ulmasaliev",   fullName: "Avazbek Ulmasaliev",        position: "DEF", club: "AGMK",                    wiki: "Avazbek_Ulmasaliev" },
      25: { number: 25, name: "Ganiev",       fullName: "Azizjon Ganiev",            position: "MID", club: "Al Bataeh",               wiki: "Azizjon_Ganiev" },
      26: { number: 26, name: "Esanov",       fullName: "Sherzod Esanov",            position: "MID", club: "Bukhara",                 wiki: "Sherzod_Esanov" },
    }
  },

  "iraq": {
    name: "Iraq",
    coach: "Graham Arnold",
    flag: "iq",
    group: "I",
    groupTeams: "France · Senegal · Norway",
    players: {
      1:  { number: 1,  name: "Talib",        fullName: "Fahad Talib",               position: "GK",  club: "Al-Talaba",               wiki: "Fahad_Talib" },
      2:  { number: 2,  name: "H.Ali",        fullName: "Hussein Ali",               position: "DEF", club: "Pogoń Szczecin",          wiki: "Hussein_Ali_(footballer)" },
      3:  { number: 3,  name: "Younis",       fullName: "Manaf Younis",              position: "DEF", club: "Al-Zawraa",               wiki: "Manaf_Younis" },
      4:  { number: 4,  name: "Yahya",        fullName: "Ahmed Yahya",               position: "DEF", club: "Al-Shorta",               wiki: "Ahmed_Yahya_(Iraqi_footballer)" },
      5:  { number: 5,  name: "Saadoon",      fullName: "Mustafa Saadoon",           position: "DEF", club: "Al-Shorta",               wiki: "Mustafa_Saadoon" },
      6:  { number: 6,  name: "Tahseen",      fullName: "Zaid Tahseen",              position: "DEF", club: "Pakhtakor",               wiki: "Zaid_Tahseen" },
      7:  { number: 7,  name: "Al-Ammari",    fullName: "Amir Al-Ammari",            position: "MID", club: "Cracovia",                wiki: "Amir_Al-Ammari" },
      8:  { number: 8,  name: "Yakob",        fullName: "Kevin Yakob",               position: "MID", club: "Aarhus GF",               wiki: "Kevin_Yakob" },
      9:  { number: 9,  name: "Jassim",       fullName: "Ali Jassim",                position: "FWD", club: "Al-Najma",                wiki: "Ali_Jassim_(footballer)" },
      10: { number: 10, name: "Al-Hamadi",    fullName: "Ali Al-Hamadi",             position: "FWD", club: "Ipswich Town",            wiki: "Ali_Al-Hamadi_(footballer)" },
      11: { number: 11, name: "A.Yousef",     fullName: "Ali Yousef",                position: "FWD", club: "Al-Talaba",               wiki: "Ali_Yousef_(Iraqi_footballer)" },
      12: { number: 12, name: "Hassan",       fullName: "Jalal Hassan",              position: "GK",  club: "Al-Zawraa",               wiki: "Jalal_Hassan_(footballer)", captain: true },
      13: { number: 13, name: "Sulaka",       fullName: "Rebin Sulaka",              position: "DEF", club: "Port FC",                  wiki: "Rebin_Sulaka" },
      14: { number: 14, name: "Iqbal",        fullName: "Zidane Iqbal",              position: "MID", club: "FC Utrecht",              wiki: "Zidane_Iqbal" },
      15: { number: 15, name: "Hashim",       fullName: "Akam Hashim",               position: "DEF", club: "Al-Zawraa",               wiki: "Akam_Hashim" },
      16: { number: 16, name: "Sher",         fullName: "Aimar Sher",                position: "MID", club: "Sarpsborg 08",            wiki: "Aimar_Sher" },
      17: { number: 17, name: "Bayesh",       fullName: "Ibrahim Bayesh",            position: "MID", club: "Al-Dhafra",               wiki: "Ibrahim_Bayesh" },
      18: { number: 18, name: "Qasem",        fullName: "Ahmed Qasem",               position: "MID", club: "Nashville SC",            wiki: "Ahmed_Qasem_(footballer)" },
      19: { number: 19, name: "Amyn",         fullName: "Youssef Amyn",              position: "MID", club: "AEK Larnaca",             wiki: "Youssef_Amyn" },
      20: { number: 20, name: "Farji",        fullName: "Marko Farji",               position: "MID", club: "Venezia",                 wiki: "Marko_Farji" },
      21: { number: 21, name: "Doski",        fullName: "Merchas Doski",             position: "DEF", club: "Viktoria Plzeň",          wiki: "Merchas_Doski" },
      22: { number: 22, name: "Basil",        fullName: "Ahmed Basil",               position: "GK",  club: "Al-Shorta",               wiki: "Ahmed_Basil" },
      23: { number: 23, name: "Ismail",       fullName: "Zaid Ismail",               position: "DEF", club: "Al-Talaba",               wiki: "Zaid_Ismail_(footballer)" },
      24: { number: 24, name: "Putros",       fullName: "Frans Putros",              position: "DEF", club: "Persib Bandung",          wiki: "Frans_Putros" },
      25: { number: 25, name: "Hussein",      fullName: "Aymen Hussein",             position: "FWD", club: "Al-Karma",                wiki: "Aymen_Hussein_(footballer)" },
      26: { number: 26, name: "Mohanad",      fullName: "Mohanad Ali",               position: "FWD", club: "Dibba Al-Fujairah",       wiki: "Mohanad_Ali_(footballer)" },
    }
  },

  /* ── OFC ───────────────────────────────────────────────────── */

  "new-zealand": {
    name: "New Zealand",
    coach: "Darren Bazeley",
    flag: "nz",
    group: "G",
    groupTeams: "Belgium · Iran · Egypt",
    players: {
      1:  { number: 1,  name: "Crocombe",     fullName: "Max Crocombe",              position: "GK",  club: "Millwall",                wiki: "Max_Crocombe" },
      2:  { number: 2,  name: "Payne",        fullName: "Tim Payne",                 position: "DEF", club: "Wellington Phoenix",      wiki: "Tim_Payne_(footballer)" },
      3:  { number: 3,  name: "De Vries",     fullName: "Francis De Vries",          position: "DEF", club: "Auckland FC",             wiki: "Francis_De_Vries" },
      4:  { number: 4,  name: "Bindon",       fullName: "Tyler Bindon",              position: "DEF", club: "Nottingham Forest",       wiki: "Tyler_Bindon" },
      5:  { number: 5,  name: "Boxall",       fullName: "Michael Boxall",            position: "DEF", club: "Minnesota United",        wiki: "Michael_Boxall" },
      6:  { number: 6,  name: "Bell",         fullName: "Joe Bell",                  position: "MID", club: "Viking FK",               wiki: "Joe_Bell_(footballer)" },
      7:  { number: 7,  name: "Garbett",      fullName: "Matt Garbett",              position: "MID", club: "Peterborough United",     wiki: "Matt_Garbett" },
      8:  { number: 8,  name: "Stamenić",     fullName: "Marko Stamenić",            position: "MID", club: "Swansea City",            wiki: "Marko_Stamenić" },
      9:  { number: 9,  name: "Wood",         fullName: "Chris Wood",                position: "FWD", club: "Nottingham Forest",       wiki: "Chris_Wood_(footballer)", captain: true },
      10: { number: 10, name: "Singh",        fullName: "Sarpreet Singh",            position: "MID", club: "Wellington Phoenix",      wiki: "Sarpreet_Singh" },
      11: { number: 11, name: "Just",         fullName: "Eli Just",                  position: "FWD", club: "Motherwell",              wiki: "Eli_Just" },
      12: { number: 12, name: "Paulsen",      fullName: "Alex Paulsen",              position: "GK",  club: "Lechia Gdańsk",           wiki: "Alex_Paulsen" },
      13: { number: 13, name: "Cacace",       fullName: "Liberato Cacace",           position: "DEF", club: "Wrexham",                 wiki: "Liberato_Cacace" },
      14: { number: 14, name: "Rufer",        fullName: "Alex Rufer",                position: "MID", club: "Wellington Phoenix",      wiki: "Alex_Rufer" },
      15: { number: 15, name: "Pijnaker",     fullName: "Nando Pijnaker",            position: "DEF", club: "Auckland FC",             wiki: "Nando_Pijnaker" },
      16: { number: 16, name: "Surman",       fullName: "Finn Surman",               position: "DEF", club: "Portland Timbers",        wiki: "Finn_Surman" },
      17: { number: 17, name: "Barbarouses",  fullName: "Kosta Barbarouses",         position: "FWD", club: "Western Sydney Wanderers",wiki: "Kosta_Barbarouses" },
      18: { number: 18, name: "Waine",        fullName: "Ben Waine",                 position: "FWD", club: "Port Vale",               wiki: "Ben_Waine" },
      19: { number: 19, name: "Old",          fullName: "Ben Old",                   position: "FWD", club: "Saint-Étienne",           wiki: "Ben_Old" },
      20: { number: 20, name: "McCowatt",     fullName: "Callum McCowatt",           position: "FWD", club: "Silkeborg IF",            wiki: "Callum_McCowatt" },
      21: { number: 21, name: "Randall",      fullName: "Jesse Randall",             position: "FWD", club: "Auckland FC",             wiki: "Jesse_Randall_(footballer)" },
      22: { number: 22, name: "Woud",         fullName: "Michael Woud",              position: "GK",  club: "Auckland FC",             wiki: "Michael_Woud" },
      23: { number: 23, name: "Thomas",       fullName: "Ryan Thomas",               position: "MID", club: "PEC Zwolle",              wiki: "Ryan_Thomas_(New_Zealand_footballer)" },
      24: { number: 24, name: "Elliot",       fullName: "Callan Elliot",             position: "DEF", club: "Auckland FC",             wiki: "Callan_Elliot" },
      25: { number: 25, name: "Bayliss",      fullName: "Lachlan Bayliss",           position: "MID", club: "Newcastle Jets",          wiki: "Lachlan_Bayliss" },
      26: { number: 26, name: "Smith",        fullName: "Tommy Smith",               position: "DEF", club: "Braintree Town",          wiki: "Tommy_Smith_(New_Zealand_footballer)" },
    }
  }

};
