// Spoločné údaje o projektoch – používa ich zoznam projektov aj detail projektu.

export interface EuProjectInfo {
  /** Úplný názov projektu tak, ako je v Zmluve o NFP. */
  fullName: string;
  projectCode: string;
  applicationCode: string;
  realizationPeriod: string;
  program: string;
  fund: string;
  priority: string;
  specificObjective: string;
  callCode: string;
  callName: string;
  beneficiary: string;
  provider: string;
  place: string;
  /** Zazmluvnená výška NFP (podľa Zmluvy o NFP). */
  contractedNfp: string;
  contactPhone: string;
  districts: string[];
  targetGroup: string;
  goals: string[];
  activities: string[];
  /** Slovný opis očakávaných výsledkov (čl. 50 nariadenia 2021/1060). */
  expectedResultsText: string[];
  /**
   * Číselné hodnoty merateľných ukazovateľov zo ŽoNFP / Zmluvy o NFP.
   * TODO: doplniť cieľové hodnoty (napr. { label: 'Počet podporených osôb', value: '120' }).
   * Na stránke sa zobrazia, až keď pole nebude prázdne.
   */
  expectedResultsNumbers: { label: string; value: string }[];
}

export interface Project {
  slug: string;
  name: string;
  icon: string;
  iconColor: string;
  shortPurpose: string;
  description: string;
  /** Aktuálne realizovaný projekt (zvýraznený v zozname). */
  active?: boolean;
  /** Údaje o projekte spolufinancovanom z fondov EÚ. */
  eu?: EuProjectInfo;
}

export const projects: Project[] = [
  {
    slug: 'hodnota-nad-bohatstvom',
    name: 'Hodnota nad bohatstvom',
    icon: 'favorite_border',
    iconColor: 'pink-7',
    shortPurpose: 'Výchova k šťastiu a životným hodnotám',
    description: `Namiesto toho, aby sme deti učili túžiť po bohatstve, je dôležité ich viesť k poznaniu, že skutočná hodnota života nespočíva v materiálnych veciach, ale vo vnútornom šťastí, vďačnosti a vzťahoch.

V tomto projekte sme organizovali workshopy a besedy pre rodiny aj školy, kde sme vysvetľovali, že pravé šťastie pramení z empatických vzťahov a každodennej radosti, nie z majetku. Učili sme žiakov rozvíjať emocionálnu inteligenciu, aplikovať cvičenia vďačnosti a tým znižovať tlak konzumného sveta. Táto výchova k jednoduchosti a empatii prispieva k duševnej rovnováhe a k zdravším rodinným hodnotám.`,
  },
  {
    slug: 'zdravie-na-tanieri',
    name: 'Zdravie na tanieri',
    icon: 'restaurant',
    iconColor: 'green-8',
    shortPurpose: 'Vzťah výživy a životnej kvality',
    description: `Strava je základným pilierom sociálneho zdravia a kvality života.

V rámci tejto iniciatívy sme usporiadali praktické kurzy varenia a diskusie s rodinami o dostupnosti kvalitných potravín. Pomáhali sme pri plánovaní jedálnička tak, aby zdravé jedlo nebolo luxusom, ale bežnou súčasťou domácností. Učili sme účastníkov, ako správne zložená strava môže predchádzať civilizačným ochoreniam (obezita, cukrovka, srdcovo-cievne ťažkosti) a prispievať k fyzickej pohode aj dlhodobému zlepšeniu kvality života.`,
  },
  {
    slug: 'sila-lasky',
    name: 'Sila lásky',
    icon: 'favorite',
    iconColor: 'red-10',
    shortPurpose: 'Spojitosť medzi vernosťou a sociálnymi vzťahmi',
    description: `Vďaka diskusným stretnutiam a besedám sme ukázali, aký význam má dôvera, vernosť a vzájomná úcta pri budovaní stabilných rodín a komunít. Láska a priateľstvo nie sú len osobné emócie, ale silné sociálne piliere, ktoré ovplyvňujú psychické zdravie a pocit spolupatričnosti.

Učili sme páry aj jednotlivcov, že pri partnerských krízach je dôležité hľadať riešenia namiesto rýchleho úniku. Tým predchádzame izolácii, osamelosti a podporujeme silnejšie komunity.`,
  },
  {
    slug: 'spolu-sme-silnejsi',
    name: 'Spolu sme silnejší',
    icon: 'group_work',
    iconColor: 'deep-purple-6',
    shortPurpose: 'Sociálna spolupráca ako cesta k pokroku',
    description: `Jednotlivec môže dosiahnuť rýchly úspech, ale skutočná sila spoločnosti vzniká zo spolupráce a spolupatričnosti.

V tomto projekte sme usporiadali dielne tímovej práce, kde sme ľudí viedli k spoločnému riešeniu lokálnych problémov – napríklad úprava komunitného ihriska, pomoc starším či znevýhodneným. Takáto solidarita a kolektívne úsilie prekonávajú systémové problémy (chudobu, nerovnosť) a prinášajú inovatívne nápady pre celé komunity.`,
  },
  {
    slug: 'peer-skupiny-silne-dievcata',
    name: 'Peer skupiny – Silné dievčatá',
    icon: 'diversity_3',
    iconColor: 'amber-6',
    shortPurpose: 'Práca s mládežou, hlavne s mladými dievčatami',
    description: `Vytvárame peer skupiny pre dievčatá v tínedžerskom veku, kde si navzájom pomáhajú v otázkach zdravia, sebaúcty a osobnostného rastu.

Pod vedením mentorky rozoberajú témy ako bezpečnosť, vzťahy, kariérny rozvoj a učia sa lepšej komunikácii. Tým posilňujú svoju sebadôveru, vznikajú pevné priateľstvá a podporujú základné hodnoty pre kvalitný život a budúcu integráciu do spoločnosti.`,
  },
  {
    slug: 'sanca-na-lepsi-zivot',
    name: 'Šanca na lepší a zdravší život',
    icon: 'accessibility_new',
    iconColor: 'cyan-8',
    shortPurpose: 'Osveta o psychomotorickom vývine detí a zlepšenie podmienok',
    description: `Projekt sa orientuje na rodiny s malými deťmi, kde prebiehajú prednášky o psychomotorickom vývine a praktické ukážky cvičení na podporu správneho rastu detí.

Spolupracujeme s terénnymi pracovníkmi, aby sme rodinám v núdzi mohli poskytnúť základnú pomoc (plienky, výživové doplnky, hračky na rozvoj). Tým zlepšujeme životné vyhliadky rodín a prispievame k zdravšej komunite s dobrými štartovacími podmienkami pre deti.`,
  },
  {
    slug: 'cisty-domov',
    name: 'Čistý domov',
    icon: 'cleaning_services',
    iconColor: 'teal-8',
    shortPurpose: 'Zvýšenie povedomia o dôležitosti čistoty a poriadku',
    description: `Projekt Čistý domov sa zameriava na prednášky a praktické workshopy v komunitách, kde ľuďom vysvetľujeme, prečo je dôležité udržiavať čistotu v domácnosti aj v okolí domu.

Pomáhame organizovať dobrovoľnícke upratovacie akcie, rozdávame letáky o udržateľných čistiacich prostriedkoch. Tým prispievame k zlepšeniu hygienických návykov, znižujeme riziko chorôb a zvyšujeme celkovú kvalitu života v komunite.`,
  },
  {
    slug: 'sikovne-ruky',
    name: 'Šikovné ruky',
    icon: 'handyman',
    iconColor: 'brown-7',
    shortPurpose: 'Zapojenie žien na materskej do tvorivých aktivít',
    description: `Tento program oslovuje ženy na materskej a rodičovskej dovolenke, aby sa zapojili do rôznych dielní a workshopov (šitie, ručné práce, výroba suvenírov).

Rozvíjajú tak praktické zručnosti, ktoré môžu využiť pri hľadaní zamestnania alebo na rozbehnutie drobného podnikania. Stretávajú sa, vymieňajú si nápady a navzájom sa motivujú. Tým získavajú sebadôveru, sociálnu aj finančnú podporu a rozširujú obzory pre budúce pracovné príležitosti.`,
  },
  {
    slug: 'pinokio',
    name: 'PINOKIO',
    icon: 'work_outline',
    iconColor: 'blue-7',
    shortPurpose:
      'Podpora integrácie neaktívnych osôb komplexnými a individuálnymi opatreniami',
    description:
      'Projekt je zameraný na podporu neaktívnych mladých osôb do 30 rokov (NEET), ktoré nie sú zamestnané, nie sú vo výcviku, nevzdelávajú sa a ani nie sú evidované na úrade práce. Jeho hlavným cieľom je ich priblíženie k trhu práce prostredníctvom cielenej pomoci v teréne.',
    active: true,
    eu: {
      fullName:
        'PINOKIO – Podpora integrácie neaktívnych osôb komplexnými a individuálnymi opatreniami',
      projectCode: '401404D511',
      applicationCode: 'NFP401404D511',
      realizationPeriod: '01.11.2025 – 31.10.2027 (24 mesiacov)',
      program: 'Program Slovensko 2021 – 2027',
      fund: 'Európsky sociálny fond plus (ESF+)',
      priority: '4P4 Záruka pre mladých',
      specificObjective:
        'ESO4.1 Zlepšenie prístupu k zamestnaniu a aktivačným opatreniam pre všetkých uchádzačov o zamestnanie, najmä mladých ľudí',
      callCode: 'PSK-MPSVR-034-2025-DV-ESF+',
      callName: '2N – Nezamestnaní a neaktívni na ceste na trh práce',
      beneficiary: 'Občianske združenie JEDNA Z NÁS, IČO 42036780',
      provider:
        'Ministerstvo práce, sociálnych vecí a rodiny SR (sprostredkovateľský orgán pre Program Slovensko)',
      place: 'Občianske združenie JEDNA Z NÁS, budova „Jedáleň s kuchyňou“, Soľ 7, 094 35 Soľ',
      contractedNfp: '657 046,46 €',
      contactPhone: '+421 918 371 861',
      districts: [
        'Košice-okolie',
        'Michalovce',
        'Stropkov',
        'Svidník',
        'Trebišov',
        'Humenné',
        'Vranov nad Topľou',
      ],
      targetGroup:
        'Mladí ľudia vo veku do 30 rokov v situácii NEET – nie sú zamestnaní, nevzdelávajú sa, nie sú v odbornej príprave a nie sú evidovaní na úrade práce.',
      goals: [
        'Vyhľadať a osloviť neaktívnych mladých ľudí priamo v teréne, najmä v najmenej rozvinutých okresoch.',
        'Priblížiť ich k trhu práce individuálnym a komplexným prístupom podľa potrieb každého človeka.',
        'Vytvoriť podmienky pre ich dlhodobé pracovné začlenenie na otvorenom trhu práce.',
      ],
      activities: [
        'Poskytovanie služieb zamestnanosti mladým ľuďom do 30 rokov mimo evidencie uchádzačov o zamestnanie (§ 54 ods. 5 zákona č. 5/2004 Z. z. o službách zamestnanosti).',
        'Terénna práca – vyhľadávanie mladých ľudí v situácii NEET a identifikácia bariér, ktoré im bránia vstúpiť na trh práce.',
        'Individuálne poradenstvo, motivácia a sprevádzanie odborným, asistentským a peer pracovníkom.',
        'Pomoc pri hľadaní zamestnania, návrate do vzdelávania alebo evidencie a podpora pri samozamestnaní.',
      ],
      expectedResultsText: [
        'Neaktívni mladí ľudia z cieľovej skupiny budú vyhľadaní a zapojení do individuálnej podpory.',
        'Podporení účastníci sa po skončení podpory zamestnajú, začnú sa vzdelávať, absolvujú odbornú prípravu alebo sa zaevidujú na úrade práce a využijú jeho služby.',
        'V zapojených okresoch sa zlepší dostupnosť služieb zamestnanosti pre mladých ľudí, ktorí doteraz zostávali mimo systému.',
      ],
      expectedResultsNumbers: [],
    },
  },
];

export function findProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
