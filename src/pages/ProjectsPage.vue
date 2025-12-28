<template>
  <q-page class="projects-page q-py-xl q-px-md">
    <!-- Nadpis a úvod -->
    <div class="text-center q-mb-xl">
      <h1 class="text-h4 text-bold">
        Prehľad našich kľúčových iniciatív a projektov
      </h1>
    </div>

    <!-- Grid s kartami projektov (row-equal pre rovnakú výšku) -->
    <div class="row justify-center row-equal">
      <!-- Každý projekt -> karta -->
      <div
        v-for="project in projects"
        :key="project.slug"
        class="col-12 col-sm-6 col-md-4 d-flex q-px-sm q-py-md"
      >
        <q-card
          class="project-card my-card cursor-pointer"
          :class="{ 'active-project': project.slug === 'pinokio' }"
          flat
          @click="goToProject(project.slug)"
        >
          <!-- Badge pre aktívny projekt -->
          <div v-if="project.slug === 'pinokio'" class="active-badge">
            <q-icon name="star" size="16px" class="q-mr-xs" />
            <span>Aktuálne aktívny projekt</span>
          </div>

          <!-- Obsah karty (len názov, popis, border) -->
          <q-card-section class="card-content text-left">
            <div class="text-h6 text-primary q-mb-xs">
              {{ project.name }}
            </div>
            <p class="text-body2 card-purpose q-mt-xs">
              {{ project.shortPurpose }}
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface Project {
  slug: string;
  name: string;
  shortPurpose: string;
  description: string;
}

// Router
const router = useRouter();

// 8 projektov (bez ikon), plné texty v "description"
const projects = ref<Project[]>([
  {
    slug: 'hodnota-nad-bohatstvom',
    name: 'Hodnota nad bohatstvom',
    shortPurpose: 'Výchova k šťastiu a životným hodnotám',
    description: `Namiesto toho, aby sme deti učili túžiť po bohatstve, je dôležité ich viesť k poznaniu,
že skutočná hodnota života nespočíva v materiálnych veciach, ale vo vnútornom šťastí, vďačnosti a vzťahoch.
V tomto projekte sme organizovali workshopy a besedy pre rodiny aj školy, kde sme vysvetľovali,
že pravé šťastie pramení z empatických vzťahov a každodennej radosti, nie z majetku.
Učili sme žiakov rozvíjať emocionálnu inteligenciu, aplikovať cvičenia vďačnosti
a tým znižovať tlak konzumného sveta. Táto výchova k jednoduchosti a empatii
prispieva k duševnej rovnováhe a k zdravším rodinným hodnotám.`,
  },
  {
    slug: 'zdravie-na-tanieri',
    name: 'Zdravie na tanieri',
    shortPurpose: 'Vzťah výživy a životnej kvality',
    description: `Strava je základným pilierom sociálneho zdravia a kvality života.
V rámci tejto iniciatívy sme usporiadali praktické kurzy varenia a diskusie s rodinami
o dostupnosti kvalitných potravín. Pomáhali sme pri plánovaní jedálnička tak,
aby zdravé jedlo nebolo luxusom, ale bežnou súčasťou domácností.
Učili sme účastníkov, ako správne zložená strava môže predchádzať civilizačným ochoreniam
(obezita, cukrovka, srdcovo-cievne ťažkosti) a prispievať k fyzickej pohode aj
dlhodobému zlepšeniu kvality života.`,
  },
  {
    slug: 'sila-lasky',
    name: 'Sila lásky',
    shortPurpose: 'Spojitosť medzi vernosťou a sociálnymi vzťahmi',
    description: `Vďaka diskusným stretnutiam a besedám sme ukázali, aký význam má dôvera,
vernosť a vzájomná úcta pri budovaní stabilných rodín a komunít.
Láska a priateľstvo nie sú len osobné emócie, ale silné sociálne piliere,
ktoré ovplyvňujú psychické zdravie a pocit spolupatričnosti.
Učili sme páry aj jednotlivcov, že pri partnerských krízach je dôležité
hľadať riešenia namiesto rýchleho úniku. Tým predchádzame izolácii,
osamelosti a podporujeme silnejšie komunity.`,
  },
  {
    slug: 'spolu-sme-silnejsi',
    name: 'Spolu sme silnejší',
    shortPurpose: 'Sociálna spolupráca ako cesta k pokroku',
    description: `Jednotlivec môže dosiahnuť rýchly úspech, ale skutočná sila spoločnosti
vzniká zo spolupráce a spolupatričnosti. V tomto projekte sme usporiadali dielne tímovej práce,
kde sme ľudí viedli k spoločnému riešeniu lokálnych problémov – napríklad
úprava komunitného ihriska, pomoc starším či znevýhodneným.
Takáto solidarita a kolektívne úsilie prekonávajú systémové problémy
(chudobu, nerovnosť) a prinášajú inovatívne nápady pre celé komunity.`,
  },
  {
    slug: 'peer-skupiny-silne-dievcata',
    name: 'Peer skupiny – Silné dievčatá',
    shortPurpose: 'Práca s mládežou, hlavne s mladými dievčatami',
    description: `Vytvárame peer skupiny pre dievčatá v tínedžerskom veku,
kde si navzájom pomáhajú v otázkach zdravia, sebaúcty a osobnostného rastu.
Pod vedením mentorky rozoberajú témy ako bezpečnosť, vzťahy, kariérny rozvoj
a učia sa lepšej komunikácii. Tým posilňujú svoju sebadôveru,
vznikajú pevné priateľstvá a podporujú základné hodnoty pre kvalitný život
a budúcu integráciu do spoločnosti.`,
  },
  {
    slug: 'sanca-na-lepsi-zivot',
    name: 'Šanca na lepší a zdravší život',
    shortPurpose: 'Osveta o psychomotorickom vývine detí a zlepšenie podmienok',
    description: `Projekt sa orientuje na rodiny s malými deťmi, kde prebiehajú prednášky
o psychomotorickom vývine a praktické ukážky cvičení na podporu správneho rastu detí.
Spolupracujeme s terénnymi pracovníkmi, aby sme rodinám v núdzi mohli
poskytnúť základnú pomoc (plienky, výživové doplnky, hračky na rozvoj).
Tým zlepšujeme životné vyhliadky rodín a prispievame k zdravšej komunite
s dobrými štartovacími podmienkami pre deti.`,
  },
  {
    slug: 'cisty-domov',
    name: 'Čistý domov',
    shortPurpose: 'Zvýšenie povedomia o dôležitosti čistoty a poriadku',
    description: `Projekt Čistý domov sa zameriava na prednášky a praktické workshopy
v komunitách, kde ľuďom vysvetľujeme, prečo je dôležité udržiavať čistotu
v domácnosti aj v okolí domu. Pomáhame organizovať dobrovoľnícke
upratovacie akcie, rozdávame letáky o udržateľných čistiacich prostriedkoch.
Tým prispievame k zlepšeniu hygienických návykov, znižujeme riziko chorôb
a zvyšujeme celkovú kvalitu života v komunite.`,
  },
  {
    slug: 'sikovne-ruky',
    name: 'Šikovné ruky',
    shortPurpose: 'Zapojenie žien na materskej do tvorivých aktivít',
    description: `Tento program oslovuje ženy na materskej a rodičovskej dovolenke,
aby sa zapojili do rôznych dielní a workshopov (šitie, ručné práce, výroba suvenírov).
Rozvíjajú tak praktické zručnosti, ktoré môžu využiť pri hľadaní zamestnania
alebo na rozbehnutie drobného podnikania. Stretávajú sa, vymieňajú si nápady
a navzájom sa motivujú. Tým získavajú sebadôveru, sociálnu aj finančnú podporu
a rozširujú obzory pre budúce pracovné príležitosti.`,
  },
  {
    slug: 'pinokio',
    name: 'PINOKIO ',
    shortPurpose:
      'Podpora integrácie neaktívnych osôb komplexnými a individuálnymi opatreniami',
    description: `Projekt je zameraný na podporu neaktívnych mladých osôb do 30 rokov (NEET), ktoré nie sú zamestnané, nie sú vo výcviku, nevzdelávajú sa a ani nie sú evidované na úrade práce. Jeho hlavným cieľom je ich priblíženie k trhu práce prostredníctvom cielenej pomoci v teréne.

Realizuje sa v najmenej rozvinutých okresoch: Košice-okolie, Michalovce, Stropkov, Svidník, Trebišov, Humenné a Vranov nad Topľou na obdobie 24 mesiacov od 1.11.2025.

Aktivity projektu sú navrhnuté tak, aby účinne motivovali a podporovali jednotlivcov pri hľadaní pracovného uplatnenia a vytvárali podmienky pre ich dlhodobú pracovnú integráciu. Tím skúsených pracovníkov zabezpečí efektívnu implementáciu jednotlivých aktivít.

Našou ambíciou je vytvoriť inkluzívnejší a dostupnejší trh práce, kde každý dostane reálnu príležitosť na pracovné uplatnenie. Každý človek si zaslúži šancu na dôstojný život a pracovné uplatnenie, a preto chceme týmto projektom vytvoriť podmienky, ktoré im umožnia naplno využiť svoj potenciál a aktívne sa zapojiť do spoločnosti.`,
  },
]);

function goToProject(slug: string) {
  router.push({ name: 'project-detail', params: { slug } });
}
</script>

<style scoped>
.projects-page {
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fefefe;
  border-radius: 8px;
  min-height: 80vh;
}

/* Rovnako vysoké karty v jednom riadku */
.row-equal {
  display: flex;
  flex-wrap: wrap;
}
.row-equal > div {
  display: flex;
  align-items: stretch;
}

/* Každá karta */
.my-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc; /* Jednoduchý okraj */
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background-color: #fff;
  position: relative;
  overflow: hidden;
}
.my-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

/* Aktívny projekt - zvýraznenie */
.active-project {
  border: 2px solid #1976d2;
  box-shadow: 0 2px 12px rgba(25, 118, 210, 0.15);
}

.active-project:hover {
  box-shadow: 0 6px 20px rgba(25, 118, 210, 0.25);
}

/* Badge pre aktívny projekt */
.active-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  color: white;
  padding: 0.4rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-bottom-left-radius: 8px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 6px rgba(25, 118, 210, 0.3);
  z-index: 1;
}

/* Obsah v karte */
.card-content {
  padding: 1rem;
}

/* Texty */
.card-purpose {
  margin-top: 4px;
  font-size: 0.95rem;
}

/* Dve fotky side-by-side (desktop), stack na mobile */
.two-photos-row {
  max-width: 1000px;
  margin: 2rem auto 0 auto; /* center */
}
.side-photo {
  border-radius: 8px;
  object-fit: cover;
}

/* Responsivita pre mobily */
@media (max-width: 600px) {
  .active-badge {
    font-size: 0.65rem;
    padding: 0.3rem 0.6rem;
  }

  .active-badge .q-icon {
    font-size: 14px;
  }
}
</style>
