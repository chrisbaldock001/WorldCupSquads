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
    group: "A",
    groupTeams: "South Korea · South Africa · Czechia",
    players: {}
  },

  "canada": {
    name: "Canada",
    coach: "",
    flag: "ca",
    group: "B",
    groupTeams: "Switzerland · Bosnia & Herzegovina · Qatar",
    players: {}
  },

  "panama": {
    name: "Panama",
    coach: "",
    flag: "pa",
    group: "L",
    groupTeams: "England · Croatia · Ghana",
    players: {}
  },

  "haiti": {
    name: "Haiti",
    coach: "",
    flag: "ht",
    group: "C",
    groupTeams: "Brazil · Morocco · Scotland",
    players: {}
  },

  "curacao": {
    name: "Curaçao",
    coach: "",
    flag: "cw",
    group: "E",
    groupTeams: "Germany · Ecuador · Côte d'Ivoire",
    players: {}
  },

  /* ── CONMEBOL ──────────────────────────────────────────────── */

  "argentina": {
    name: "Argentina",
    coach: "Lionel Scaloni",
    flag: "ar",
    group: "J",
    groupTeams: "Algeria · Austria · Jordan",
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
    coach: "",
    flag: "co",
    group: "K",
    groupTeams: "Portugal · DR Congo · Uzbekistan",
    players: {}
  },

  "ecuador": {
    name: "Ecuador",
    coach: "",
    flag: "ec",
    group: "E",
    groupTeams: "Germany · Curaçao · Côte d'Ivoire",
    players: {}
  },

  "paraguay": {
    name: "Paraguay",
    coach: "",
    flag: "py",
    group: "D",
    groupTeams: "USA · Australia · Türkiye",
    players: {}
  },

  "uruguay": {
    name: "Uruguay",
    coach: "",
    flag: "uy",
    group: "H",
    groupTeams: "Spain · Saudi Arabia · Cape Verde",
    players: {}
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
        { number: 18, name: "Gordon",     fullName: "Anthony Gordon",   club: "Newcastle United",  wiki: "Anthony_Gordon" },
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
        { number: 3,  name: "Grimaldo",  fullName: "Alejandro Grimaldo", club: "Bayer Leverkusen", wiki: "Alejandro_Grimaldo" },
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
        { number: 16, name: "Rodri",     fullName: "Rodri",            club: "Manchester City",   wiki: "Rodri_(footballer)" },
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
        { number: 1,  name: "D. Costa", fullName: "Diogo Costa",  club: "FC Porto",                   wiki: "Diogo_Costa_(footballer)" },
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
        { number: 25, name: "N. Mendes", fullName: "Nuno Mendes",      club: "Paris Saint-Germain", wiki: "Nuno_Mendes" }
      ],
      "Midfielders": [
        { number: 6,  name: "M. Nunes",    fullName: "Matheus Nunes",    club: "Manchester City",    wiki: "Matheus_Nunes" },
        { number: 8,  name: "B. Fernandes",fullName: "Bruno Fernandes",  club: "Manchester United",  wiki: "Bruno_Fernandes_(footballer,_born_1994)" },
        { number: 15, name: "J. Neves",    fullName: "João Neves",       club: "Paris Saint-Germain",wiki: "João_Neves_(footballer)" },
        { number: 21, name: "R. Neves",    fullName: "Rúben Neves",      club: "Al Hilal",           wiki: "Rúben_Neves" },
        { number: 23, name: "Vitinha",     fullName: "Vitinha",          club: "Paris Saint-Germain",wiki: "Vitinha_(footballer)" },
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
    coach: "",
    flag: "hr",
    group: "L",
    groupTeams: "England · Ghana · Panama",
    players: {}
  },

  "austria": {
    name: "Austria",
    coach: "",
    flag: "at",
    group: "J",
    groupTeams: "Argentina · Algeria · Jordan",
    players: {}
  },

  "switzerland": {
    name: "Switzerland",
    coach: "",
    flag: "ch",
    group: "B",
    groupTeams: "Canada · Bosnia & Herzegovina · Qatar",
    players: {}
  },

  "norway": {
    name: "Norway",
    coach: "",
    flag: "no",
    group: "I",
    groupTeams: "France · Senegal · Iraq",
    players: {}
  },

  "scotland": {
    name: "Scotland",
    coach: "",
    flag: "gb-sct",
    group: "C",
    groupTeams: "Brazil · Morocco · Haiti",
    players: {}
  },

  "bosnia-herzegovina": {
    name: "Bosnia & Herzegovina",
    coach: "",
    flag: "ba",
    group: "B",
    groupTeams: "Canada · Switzerland · Qatar",
    players: {}
  },

  "czechia": {
    name: "Czechia",
    coach: "",
    flag: "cz",
    group: "A",
    groupTeams: "Mexico · South Korea · South Africa",
    players: {}
  },

  "sweden": {
    name: "Sweden",
    coach: "",
    flag: "se",
    group: "F",
    groupTeams: "Netherlands · Japan · Tunisia",
    players: {}
  },

  "turkiye": {
    name: "Türkiye",
    coach: "",
    flag: "tr",
    group: "D",
    groupTeams: "USA · Paraguay · Australia",
    players: {}
  },

  /* ── CAF ───────────────────────────────────────────────────── */

  "morocco": {
    name: "Morocco",
    coach: "",
    flag: "ma",
    group: "C",
    groupTeams: "Brazil · Scotland · Haiti",
    players: {}
  },

  "senegal": {
    name: "Senegal",
    coach: "",
    flag: "sn",
    group: "I",
    groupTeams: "France · Norway · Iraq",
    players: {}
  },

  "egypt": {
    name: "Egypt",
    coach: "",
    flag: "eg",
    group: "G",
    groupTeams: "Belgium · Iran · New Zealand",
    players: {}
  },

  "algeria": {
    name: "Algeria",
    coach: "",
    flag: "dz",
    group: "J",
    groupTeams: "Argentina · Austria · Jordan",
    players: {}
  },

  "tunisia": {
    name: "Tunisia",
    coach: "",
    flag: "tn",
    group: "F",
    groupTeams: "Netherlands · Japan · Sweden",
    players: {}
  },

  "cote-divoire": {
    name: "Côte d'Ivoire",
    coach: "",
    flag: "ci",
    group: "E",
    groupTeams: "Germany · Ecuador · Curaçao",
    players: {}
  },

  "ghana": {
    name: "Ghana",
    coach: "",
    flag: "gh",
    group: "L",
    groupTeams: "England · Croatia · Panama",
    players: {}
  },

  "south-africa": {
    name: "South Africa",
    coach: "",
    flag: "za",
    group: "A",
    groupTeams: "Mexico · South Korea · Czechia",
    players: {}
  },

  "cape-verde": {
    name: "Cape Verde",
    coach: "",
    flag: "cv",
    group: "H",
    groupTeams: "Spain · Uruguay · Saudi Arabia",
    players: {}
  },

  "dr-congo": {
    name: "DR Congo",
    coach: "",
    flag: "cd",
    group: "K",
    groupTeams: "Portugal · Colombia · Uzbekistan",
    players: {}
  },

  /* ── AFC ───────────────────────────────────────────────────── */

  "japan": {
    name: "Japan",
    coach: "",
    flag: "jp",
    group: "F",
    groupTeams: "Netherlands · Sweden · Tunisia",
    players: {}
  },

  "south-korea": {
    name: "South Korea",
    coach: "",
    flag: "kr",
    group: "A",
    groupTeams: "Mexico · South Africa · Czechia",
    players: {}
  },

  "australia": {
    name: "Australia",
    coach: "",
    flag: "au",
    group: "D",
    groupTeams: "USA · Paraguay · Türkiye",
    players: {}
  },

  "iran": {
    name: "Iran",
    coach: "",
    flag: "ir",
    group: "G",
    groupTeams: "Belgium · Egypt · New Zealand",
    players: {}
  },

  "saudi-arabia": {
    name: "Saudi Arabia",
    coach: "",
    flag: "sa",
    group: "H",
    groupTeams: "Spain · Uruguay · Cape Verde",
    players: {}
  },

  "qatar": {
    name: "Qatar",
    coach: "",
    flag: "qa",
    group: "B",
    groupTeams: "Canada · Switzerland · Bosnia & Herzegovina",
    players: {}
  },

  "jordan": {
    name: "Jordan",
    coach: "",
    flag: "jo",
    group: "J",
    groupTeams: "Argentina · Algeria · Austria",
    players: {}
  },

  "uzbekistan": {
    name: "Uzbekistan",
    coach: "",
    flag: "uz",
    group: "K",
    groupTeams: "Portugal · Colombia · DR Congo",
    players: {}
  },

  "iraq": {
    name: "Iraq",
    coach: "",
    flag: "iq",
    group: "I",
    groupTeams: "France · Senegal · Norway",
    players: {}
  },

  /* ── OFC ───────────────────────────────────────────────────── */

  "new-zealand": {
    name: "New Zealand",
    coach: "",
    flag: "nz",
    group: "G",
    groupTeams: "Belgium · Iran · Egypt",
    players: {}
  }

};
