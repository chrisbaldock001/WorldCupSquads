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
    coach: "",
    flag: "py",
    group: "D",
    groupTeams: "USA · Australia · Türkiye",
    players: {}
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
    coach: "",
    flag: "at",
    group: "J",
    groupTeams: "Argentina · Algeria · Jordan",
    players: {}
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
