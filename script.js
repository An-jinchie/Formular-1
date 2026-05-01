//F1 GRID 2026 — JAVASCRIPT//


//DATA: DRIVERS//

const drivers = [
  {
    number: 3,
    name: "Max Verstappen",
    nickname: "Mad Max",
    team: "Oracle Red Bull Racing",
    teamShort: "Red Bull",
    principal: "Laurent Mekies",
    color: "#3671C6",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/6col/image.png",
    fallback: "VER",
    fact: "Max took #3 for 2026 — having used #33 as his permanent number and #1 as defending champion. His reaction time is measured at 0.19 seconds, faster than most humans can blink. He once beat professional esports drivers in a sim tournament under a secret alias."
  },
  {
    number: 6,
    name: "Isack Hadjar",
    nickname: "The Parisian",
    team: "Oracle Red Bull Racing",
    teamShort: "Red Bull",
    principal: "Laurent Mekies",
    color: "#3671C6",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/I/ISAHAD01_Isack_Hadjar/isahad01.png.transform/6col/image.png",
    fallback: "HAD",
    fact: "Isack is French-Algerian and dominated F2 in 2024. He stepped up from Racing Bulls to the senior Red Bull seat for 2026, replacing Yuki Tsunoda who became Red Bull's test and reserve driver. Commentators say watching him race is like watching a wild animal that hasn't learned to be tamed."
  },
  {
    number: 16,
    name: "Charles Leclerc",
    nickname: "Il Predestinato",
    team: "Scuderia Ferrari HP",
    teamShort: "Ferrari",
    principal: "Frédéric Vasseur",
    color: "#E8002D",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/6col/image.png",
    fallback: "LEC",
    fact: "Charles is a classically trained pianist who performed at Carnegie Hall in 2023. His godfather was the late Jules Bianchi — making his lifelong commitment to Ferrari feel almost written in destiny. He enters his ninth F1 season in 2026."
  },
  {
    number: 44,
    name: "Lewis Hamilton",
    nickname: "The GOAT",
    team: "Scuderia Ferrari HP",
    teamShort: "Ferrari",
    principal: "Frédéric Vasseur",
    color: "#E8002D",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/6col/image.png",
    fallback: "HAM",
    fact: "Lewis set the fastest time in the five-day Barcelona pre-season test — already looking electric in red for his second Ferrari season. He holds more F1 records than any driver in history: 7 titles, 100+ wins, 100+ poles. He was knighted by the King of England."
  },
  {
    number: 1,
    name: "Lando Norris",
    nickname: "The Smiley Assassin",
    team: "McLaren Mastercard F1 Team",
    teamShort: "McLaren",
    principal: "Andrea Stella",
    color: "#FF8000",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/6col/image.png",
    fallback: "NOR",
    fact: "Lando carries #1 into 2026 as the reigning World Champion — his maiden title secured in 2025. He streams on Twitch with millions of followers and once crashed out of a virtual race because a fan spammed his chat mid-corner. He owns a dog named Pickle."
  },
  {
    number: 81,
    name: "Oscar Piastri",
    nickname: "The Quiet Storm",
    team: "McLaren Mastercard F1 Team",
    teamShort: "McLaren",
    principal: "Andrea Stella",
    color: "#FF8000",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/6col/image.png",
    fallback: "PIA",
    fact: "Oscar led the 2025 World Championship for most of the season only to finish third — one of the most dramatic late-season collapses in recent memory. He is so calm under pressure that engineers joke his heartrate never goes above 60bpm at 300km/h."
  },
  {
    number: 63,
    name: "George Russell",
    nickname: "Mr. Saturday",
    team: "Mercedes-AMG Petronas F1 Team",
    teamShort: "Mercedes",
    principal: "Toto Wolff",
    color: "#27F4D2",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/6col/image.png",
    fallback: "RUS",
    fact: "George earned his nickname because he almost always goes fastest on Saturdays. He collected two wins in 2025 to help Mercedes climb to second in the Constructors' Championship. He studied engineering at Cambridge while racing full time."
  },
  {
    number: 12,
    name: "Kimi Antonelli",
    nickname: "Baby Kimi",
    team: "Mercedes-AMG Petronas F1 Team",
    teamShort: "Mercedes",
    principal: "Toto Wolff",
    color: "#27F4D2",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/A/ANDANT01_Andrea_Kimi_Antonelli/andant01.png.transform/6col/image.png",
    fallback: "ANT",
    fact: "Antonelli set the fastest time at the Bahrain pre-season test and claimed his maiden race victory early in the 2026 season. In his rookie 2025 year he scored three podiums. Mercedes bypassed F3 entirely to fast-track him — that level of confidence is almost unheard of."
  },
  {
    number: 55,
    name: "Carlos Sainz",
    nickname: "Smooth Operator",
    team: "Atlassian Williams F1 Team",
    teamShort: "Williams",
    principal: "James Vowles",
    color: "#64C4FF",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/6col/image.png",
    fallback: "SAI",
    fact: "Carlos is the son of a two-time World Rally Champion yet chose tarmac over dirt. He won his first F1 race in Singapore 2023 just weeks after appendix surgery — racing with a literally healing body and still won. His nickname 'Chili' comes from his fiery competitive spirit."
  },
  {
    number: 23,
    name: "Alexander Albon",
    nickname: "Alex",
    team: "Atlassian Williams F1 Team",
    teamShort: "Williams",
    principal: "James Vowles",
    color: "#64C4FF",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/6col/image.png",
    fallback: "ALB",
    fact: "Alex is half Thai, half British — and a national icon in Thailand where he is more famous than most footballers. He was dropped by Red Bull, nearly quit F1, then rebuilt his career from scratch at Williams. He once had emergency surgery mid-season and returned the very next weekend."
  },
  {
    number: 30,
    name: "Liam Lawson",
    nickname: "Lawless",
    team: "Visa CashApp RB F1 Team",
    teamShort: "Racing Bulls",
    principal: "Alan Permane",
    color: "#6692FF",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png.transform/6col/image.png",
    fallback: "LAW",
    fact: "Liam is New Zealand's most exciting F1 prospect in a generation. He subbed for Ricciardo mid-season, impressed everyone, lost the seat, got it back — then was passed over for Red Bull promotion in favour of Hadjar. He drives like someone with absolutely nothing to lose."
  },
  {
    number: 41,
    name: "Arvid Lindblad",
    nickname: "The Viking",
    team: "Visa CashApp RB F1 Team",
    teamShort: "Racing Bulls",
    principal: "Alan Permane",
    color: "#6692FF",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/A/ARVLIN01_Arvid_Lindblad/arvlin01.png.transform/6col/image.png",
    fallback: "LIN",
    fact: "Arvid Lindblad is the only true rookie on the 2026 grid — promoted straight from F2 via the Red Bull Academy at just 18 years old. The young Swede has Red Bull's full backing and 22 Grands Prix to prove he belongs. No pressure."
  },
  {
    number: 14,
    name: "Fernando Alonso",
    nickname: "El Plan / The Astronaut",
    team: "Aston Martin Aramco F1 Team",
    teamShort: "Aston Martin",
    principal: "Adrian Newey",
    color: "#358C75",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/6col/image.png",
    fallback: "ALO",
    fact: "Fernando is the most experienced driver on the 2026 grid. Fans call him 'The Astronaut' because he seems ageless at 44 — possibly not human. He now works under the legendary Adrian Newey, a combination the entire paddock is watching closely. He once kayaked across a lake to make a press conference on time."
  },
  {
    number: 18,
    name: "Lance Stroll",
    nickname: "The Landlord",
    team: "Aston Martin Aramco F1 Team",
    teamShort: "Aston Martin",
    principal: "Adrian Newey",
    color: "#358C75",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/6col/image.png",
    fallback: "STR",
    fact: "Lance's father Lawrence Stroll bought Aston Martin F1 — making Lance the ultimate 'landlord'. Despite the memes, Lance scored podiums at age 19 in a Williams so bad others couldn't finish. He enters 2026 for a fifth consecutive Aston Martin season, now with Adrian Newey designing the car."
  },
  {
    number: 31,
    name: "Esteban Ocon",
    nickname: "The Ninja",
    team: "Haas F1 Team",
    teamShort: "Haas",
    principal: "Ayao Komatsu",
    color: "#B6BABD",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/6col/image.png",
    fallback: "OCO",
    fact: "Esteban's family sold their house and lived in a camper van to fund his karting dream. He has a photographic memory and can recite every corner of every F1 circuit purely from memory. He enters his second season at Haas looking to take the next step."
  },
  {
    number: 87,
    name: "Oliver Bearman",
    nickname: "Ollie B",
    team: "Haas F1 Team",
    teamShort: "Haas",
    principal: "Ayao Komatsu",
    color: "#B6BABD",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png.transform/6col/image.png",
    fallback: "BEA",
    fact: "Oliver debuted mid-race in Saudi Arabia 2024, found out hours before qualifying, and finished 7th on his very first lap in an F1 car. His impressive 2025 debut season — regularly scoring points in the second half of the year — earned him the title 'the most unflappable teenager in motorsport history.'"
  },
  {
    number: 27,
    name: "Nico Hülkenberg",
    nickname: "The Hulk",
    team: "Audi F1 Team",
    teamShort: "Audi",
    principal: "Mattia Binotto",
    color: "#C00000",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/6col/image.png",
    fallback: "HUL",
    fact: "Nico finally got his first F1 podium at Silverstone 2025 — in his 238th attempt. The entire paddock erupted. He holds a commercial pilot's license and once flew himself to a race weekend. His nickname 'The Hulk' is literally just an English translation of his German surname."
  },
  {
    number: 5,
    name: "Gabriel Bortoleto",
    nickname: "The Brazilian Bullet",
    team: "Audi F1 Team",
    teamShort: "Audi",
    principal: "Mattia Binotto",
    color: "#C00000",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/G/GABBOR01_Gabriel_Bortoleto/gabbor01.png.transform/6col/image.png",
    fallback: "BOR",
    fact: "Gabriel is the reigning F2 Champion — managed by none other than Fernando Alonso. Brazil hasn't had a race-winning calibre rookie in years and the entire nation is watching. He reportedly ran 10,000 simulator laps before his first race. The pressure is immense. He doesn't seem to notice."
  },
  {
    number: 10,
    name: "Pierre Gasly",
    nickname: "Pierre le Grand",
    team: "BWT Alpine F1 Team",
    teamShort: "Alpine",
    principal: "Steve Nielsen",
    color: "#FF69B4",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/6col/image.png",
    fallback: "GAS",
    fact: "Pierre won the 2020 Italian GP at Monza in a near-miracle — his car had absolutely no right to win. He cried uncontrollably on the podium. He is a fashion icon who appeared in Vogue France and is reportedly the most legendary party host in the entire paddock."
  },
  {
    number: 43,
    name: "Franco Colapinto",
    nickname: "El Colapinto",
    team: "BWT Alpine F1 Team",
    teamShort: "Alpine",
    principal: "Steve Nielsen",
    color: "#FF69B4",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/F/FRACOL01_Franco_Colapinto/fracol01.png.transform/6col/image.png",
    fallback: "COL",
    fact: "Franco only found out he had a full-time 2026 seat in the final handful of races of 2025. The Argentine is the only driver on the grid yet to score a World Championship point. He replaced Jack Doohan mid-season and never looked back — 2026 is his chance to prove it was no fluke."
  },
  {
    number: 11,
    name: "Sergio Pérez",
    nickname: "Checo",
    team: "Cadillac F1 Team",
    teamShort: "Cadillac",
    principal: "Graeme Lowdon",
    color: "#CC0000",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/6col/image.png",
    fallback: "PER",
    fact: "Checo is a national hero in Mexico — F1 race days are practically public holidays there. His Red Bull contract was terminated by mutual agreement at the end of 2024 after a difficult season. He returns to F1 after a year out, joining brand new Cadillac with a serious point to prove."
  },
  {
    number: 77,
    name: "Valtteri Bottas",
    nickname: "Val",
    team: "Cadillac F1 Team",
    teamShort: "Cadillac",
    principal: "Graeme Lowdon",
    color: "#CC0000",
    photo: "https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/6col/image.png",
    fallback: "BOT",
    fact: "Valtteri is one of F1's most famously candid personalities — brutally honest in interviews, zero filter. A champion cyclist in his spare time, he spent 2025 as Mercedes' reserve driver before Cadillac handed him a full-time seat. He brings over 200 race starts to F1's newest team."
  }
];

//DATA: TEAMS & PRINCIPALS//

const teams = [
  { name: "McLaren Mastercard F1 Team",     principal: "Andrea Stella",    drivers: "Lando Norris · Oscar Piastri",        color: "#FF8000" },
  { name: "Mercedes-AMG Petronas F1 Team",  principal: "Toto Wolff",       drivers: "George Russell · Kimi Antonelli",     color: "#27F4D2" },
  { name: "Oracle Red Bull Racing",         principal: "Laurent Mekies",   drivers: "Max Verstappen · Isack Hadjar",       color: "#3671C6" },
  { name: "Scuderia Ferrari HP",            principal: "Frédéric Vasseur", drivers: "Charles Leclerc · Lewis Hamilton",    color: "#E8002D" },
  { name: "Atlassian Williams F1 Team",     principal: "James Vowles",     drivers: "Carlos Sainz · Alexander Albon",      color: "#64C4FF" },
  { name: "Visa CashApp RB F1 Team",        principal: "Alan Permane",     drivers: "Liam Lawson · Arvid Lindblad",        color: "#6692FF" },
  { name: "Aston Martin Aramco F1 Team",    principal: "Adrian Newey",     drivers: "Fernando Alonso · Lance Stroll",      color: "#358C75" },
  { name: "Haas F1 Team",                   principal: "Ayao Komatsu",     drivers: "Esteban Ocon · Oliver Bearman",       color: "#B6BABD" },
  { name: "Audi F1 Team",                   principal: "Mattia Binotto",   drivers: "Nico Hülkenberg · Gabriel Bortoleto", color: "#C00000" },
  { name: "BWT Alpine F1 Team",             principal: "Steve Nielsen",    drivers: "Pierre Gasly · Franco Colapinto",     color: "#FF69B4" },
  { name: "Cadillac F1 Team",               principal: "Graeme Lowdon",    drivers: "Sergio Pérez · Valtteri Bottas",      color: "#CC0000" },
];


//CUSTOM CURSOR//

const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';

  setTimeout(() => {
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top  = e.clientY + 'px';
  }, 80);
});


//  ANIMATED SPEED LINES

const speedBg = document.getElementById('speedBg');

for (let i = 0; i < 20; i++) {
  const line = document.createElement('div');
  line.className = 'speed-line';
  line.style.setProperty('--y', Math.random() * 100);
  line.style.animationDelay    = (Math.random() * 3) + 's';
  line.style.animationDuration = (2 + Math.random() * 3) + 's';
  speedBg.appendChild(line);
}

//SCROLLING TICKER//

const ticker = document.getElementById('ticker');

const tickerItems = [
  "2026 SEASON UNDERWAY — NEW ERA, NEW RULES",
  "22 DRIVERS · 11 TEAMS · 22 GRANDS PRIX",
  "NORRIS DEFENDS — CAN THE CHAMPION DO IT AGAIN?",
  "CADILLAC & AUDI: TWO NEW TEAMS SHAKE UP THE GRID",
  "HAMILTON'S SECOND SEASON IN RED — BARCELONA P1 IN TESTING",
  "ADRIAN NEWEY NOW RUNS AN F1 TEAM — THE PADDOCK IS SHOOK",
  "PEREZ & BOTTAS ARE BACK — CADILLAC MEANS BUSINESS",
  "ANTONELLI WINS ON HOME SOIL — BABY KIMI HAS ARRIVED",
  "HORNER OUT · MEKIES IN — RED BULL'S NEW ERA BEGINS",
  "HADJAR STEPS UP TO RED BULL — TSUNODA STEPS ASIDE",
  "HULKENBERG FINALLY GOT HIS PODIUM — 238 RACES LATER",
  "LINDBLAD: F1'S ONLY ROOKIE AND HE'S JUST 18",
  "NEWEY DESIGNS THE CAR AND RUNS THE TEAM — MADNESS",
  "OVER 1000BHP — BUT NOW WITH MORE ELECTRIC POWER THAN EVER",
  "EVERY TENTH OF A SECOND COUNTS",
];

const doubled = [...tickerItems, ...tickerItems];

doubled.forEach((item) => {
  const el = document.createElement('div');
  el.className = 'stats-ticker-item';
  el.textContent = item;
  ticker.appendChild(el);
});

//BUILD DRIVER CARDS//

const grid = document.getElementById('driverGrid');

drivers.forEach((d) => {
  const card = document.createElement('div');
  card.className = 'driver-card';

  card.innerHTML = `
    <div class="card-front">
      <div class="driver-photo" style="background-image: url('${d.photo}')"></div>
      <div class="driver-number">${d.number}</div>
      <div class="helmet" style="--team-color:${d.color}; background:${d.color}20;"></div>
      <div class="card-front-content">
        <div class="driver-nickname" style="--team-color:${d.color}; color:${d.color}">${d.nickname}</div>
        <div class="driver-name">${d.name}</div>
        <div class="driver-team">${d.teamShort}</div>
        <div class="driver-principal">
          Team Principal: <span style="color:${d.color}">${d.principal}</span>
        </div>
      </div>
      <div class="hover-hint">HOVER FOR FACTS</div>
    </div>

    <div class="card-back" style="--team-color:${d.color}">
      <div class="card-back-overlay" style="border-color:${d.color}"></div>
      <div class="card-back-content">
        <div class="did-you-know-label" style="color:${d.color}">DID YOU KNOW?</div>
        <div class="did-you-know-text">${d.fact}</div>
        <div class="back-driver-name">#${d.number} · ${d.name}</div>
      </div>
    </div>
  `;

  const tempImg = new Image();
  tempImg.src = d.photo;
  tempImg.onerror = () => {
    const photoEl = card.querySelector('.driver-photo');
    photoEl.style.background = `linear-gradient(135deg, ${d.color}22, #0d0d1a)`;
    photoEl.innerHTML = `
      <div style="
        position: absolute; inset: 0;
        display: flex; align-items: center; justify-content: center;
        font-family: 'Bebas Neue', cursive;
        font-size: 4rem;
        color: ${d.color}40;
        letter-spacing: 0.1em;
      ">${d.fallback}</div>
    `;
  };

  grid.appendChild(card);
});

//BUILD TEAM PRINCIPALS TABLE//

const ptable = document.getElementById('principalsTable');

teams.forEach((t) => {
  const row = document.createElement('div');
  row.className = 'principal-row';
  row.style.setProperty('--team-color', t.color);

  row.innerHTML = `
    <div class="p-team" style="color:${t.color}">${t.name}</div>
    <div class="p-name">${t.principal}</div>
    <div class="p-drivers">${t.drivers}</div>
  `;

  ptable.appendChild(row);
});