<template>
  <q-page class="project-detail-page q-py-xl q-px-md">
    <div class="detail-container row justify-center">
      <!-- Ľavý stĺpec (ikona, názov, subtitul) -->
      <div class="col-12 col-md-4 detail-left q-pb-md">
        <div class="icon-box">
          <q-icon
            :name="project?.icon"
            :color="project?.iconColor"
            size="60px"
            class="detail-icon"
          />
        </div>
        <h2 class="text-h6 text-primary detail-title q-mt-md">
          {{ project?.name }}
        </h2>
        <p class="text-subtitle2 text-grey detail-subtitle">
          {{ project?.shortPurpose }}
        </p>
      </div>

      <!-- Pravý stĺpec (text) -->
      <div class="col-12 col-md-8 detail-right">
        <!-- Špeciálne formátovanie pre PINOKIO -->
        <div v-if="project?.slug === 'pinokio'" class="pinokio-detail">
          <!-- Hlavný popis -->
          <div class="detail-section">
            <div class="section-header">
              <q-icon name="flag" color="primary" size="24px" class="q-mr-sm" />
              <span class="text-h6 text-primary">Cieľ projektu</span>
            </div>
            <p class="section-text">
              Projekt je zameraný na podporu neaktívnych mladých osôb do 30
              rokov (NEET), ktoré nie sú zamestnané, nie sú vo výcviku,
              nevzdelávajú sa a ani nie sú evidované na úrade práce. Jeho
              hlavným cieľom je ich priblíženie k trhu práce prostredníctvom
              cielenej pomoci v teréne.
            </p>
          </div>

          <!-- Realizácia -->
          <div class="detail-section">
            <div class="section-header">
              <q-icon
                name="place"
                color="orange-7"
                size="24px"
                class="q-mr-sm"
              />
              <span class="text-h6 text-grey-8">Realizácia projektu</span>
            </div>
            <p class="section-text">
              <strong>Okresy:</strong> Košice-okolie, Michalovce, Stropkov,
              Svidník, Trebišov, Humenné a Vranov nad Topľou
            </p>
            <p class="section-text">
              <strong>Trvanie:</strong> 24 mesiacov od 1.11.2025
            </p>
          </div>

          <!-- Aktivity -->
          <div class="detail-section">
            <div class="section-header">
              <q-icon
                name="trending_up"
                color="positive"
                size="24px"
                class="q-mr-sm"
              />
              <span class="text-h6 text-grey-8">Aktivity a prínos</span>
            </div>
            <p class="section-text">
              Aktivity projektu sú navrhnuté tak, aby účinne motivovali a
              podporovali jednotlivcov pri hľadaní pracovného uplatnenia a
              vytvárali podmienky pre ich dlhodobú pracovnú integráciu. Tím
              skúsených pracovníkov zabezpečí efektívnu implementáciu
              jednotlivých aktivít.
            </p>
          </div>

          <!-- Vízia -->
          <div class="detail-section vision-section">
            <div class="section-header">
              <q-icon
                name="lightbulb"
                color="amber-7"
                size="24px"
                class="q-mr-sm"
              />
              <span class="text-h6 text-grey-8">Naša vízia</span>
            </div>
            <p class="section-text">
              Našou ambíciou je vytvoriť inkluzívnejší a dostupnejší trh práce,
              kde každý dostane reálnu príležitosť na pracovné uplatnenie. Každý
              človek si zaslúži šancu na dôstojný život a pracovné uplatnenie, a
              preto chceme týmto projektom vytvoriť podmienky, ktoré im umožnia
              naplno využiť svoj potenciál a aktívne sa zapojiť do spoločnosti.
            </p>
          </div>
        </div>

        <!-- Formátovanie pre ostatné projekty -->
        <div v-else class="formatted-project-detail">
          <div
            v-for="(paragraph, index) in formattedDescription"
            :key="index"
            class="detail-paragraph"
          >
            <p class="section-text">{{ paragraph }}</p>
          </div>
        </div>

        <div class="buttons-wrapper">
          <q-btn
            v-if="project?.slug === 'pinokio'"
            label="Zobraziť pracovné pozície"
            color="orange-7"
            class="q-mr-sm"
            icon="work"
            unelevated
            @click="goToJobPositions"
          />
          <q-btn label="Späť na projekty" color="primary" @click="goBack" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface Project {
  slug: string;
  name: string;
  icon: string;
  iconColor: string;
  shortPurpose: string;
  description: string;
}

const route = useRoute();
const router = useRouter();
const slug = route.params.slug as string;

// Rovnakých 8 projektov, s "iconColor" + "icon" + plné texty:
const allProjects: Project[] = [
  {
    slug: 'hodnota-nad-bohatstvom',
    name: 'Hodnota nad bohatstvom',
    icon: 'favorite_border',
    iconColor: 'pink-7',
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
    icon: 'restaurant',
    iconColor: 'green-8',
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
    icon: 'favorite',
    iconColor: 'red-10',
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
    icon: 'group_work',
    iconColor: 'deep-purple-6',
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
    icon: 'diversity_3',
    iconColor: 'amber-6',
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
    name: 'Šanca na lepší (a zdravší) život',
    icon: 'accessibility_new',
    iconColor: 'cyan-8',
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
    icon: 'cleaning_services',
    iconColor: 'teal-8',
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
    icon: 'handyman',
    iconColor: 'brown-7',
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
    name: 'PINOKIO',
    icon: 'work_outline',
    iconColor: 'blue-7',
    shortPurpose:
      'Podpora integrácie neaktívnych osôb komplexnými a individuálnymi opatreniami',
    description: `Projekt je zameraný na podporu neaktívnych mladých osôb do 30 rokov (NEET), ktoré nie sú zamestnané, nie sú vo výcviku, nevzdelávajú sa a ani nie sú evidované na úrade práce. Jeho hlavným cieľom je ich priblíženie k trhu práce prostredníctvom cielenej pomoci v teréne.

Realizuje sa v najmenej rozvinutých okresoch: Košice-okolie, Michalovce, Stropkov, Svidník, Trebišov, Humenné a Vranov nad Topľou na obdobie 24 mesiacov od 1.11.2025.

Aktivity projektu sú navrhnuté tak, aby účinne motivovali a podporovali jednotlivcov pri hľadaní pracovného uplatnenia a vytvárali podmienky pre ich dlhodobú pracovnú integráciu. Tím skúsených pracovníkov zabezpečí efektívnu implementáciu jednotlivých aktivít.

Našou ambíciou je vytvoriť inkluzívnejší a dostupnejší trh práce, kde každý dostane reálnu príležitosť na pracovné uplatnenie. Každý človek si zaslúži šancu na dôstojný život a pracovné uplatnenie, a preto chceme týmto projektom vytvoriť podmienky, ktoré im umožnia naplno využiť svoj potenciál a aktívne sa zapojiť do spoločnosti.`,
  },
];

const project = ref<Project | null>(null);

// Rozdelenie description na odseky
const formattedDescription = computed(() => {
  if (!project.value?.description) return [];

  // Rozdelenie podľa prázdnych riadkov a filtrovanie prázdnych
  return project.value.description
    .split('\n\n')
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
});

onMounted(() => {
  const found = allProjects.find((p) => p.slug === slug);
  if (!found) {
    router.replace({ name: 'projects' });
  } else {
    project.value = found;
  }
});

function goBack() {
  router.push({ name: 'projects' });
}

function goToJobPositions() {
  router.push({ name: 'job-positions' });
}
</script>

<style scoped>
.project-detail-page {
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  min-height: 80vh;
}

.detail-container {
  max-width: 1000px;
  margin: 0 auto;
}

/* Ľavý stĺpec (ikona, názov) */
.detail-left {
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  padding: 1rem;

  margin-right: 1rem;
  margin-bottom: 1rem;
}

.icon-box {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.detail-icon {
  /* stredná veľkosť */
}

.detail-title {
  font-size: 1.3rem;
  margin: 1rem 0 0.25rem 0;
  text-align: center;
}

.detail-subtitle {
  color: #666;
  font-size: 0.95rem;
  text-align: center;
}

/* Pravý stĺpec (text) */
.detail-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fcfcfc;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
}

/* Wrapper pre tlačidlá */
.buttons-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
  align-items: center;
}

/* Formátovanie pre ostatné projekty */
.formatted-project-detail {
  width: 100%;
}

.detail-paragraph {
  margin-bottom: 1.5rem;
  padding: 1.25rem;
  background: white;
  border-radius: 8px;
  border-left: 3px solid #e0e0e0;
  transition: all 0.2s ease;
}

.detail-paragraph:hover {
  border-left-color: #1976d2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transform: translateX(3px);
}

.detail-paragraph:last-child {
  margin-bottom: 0;
}

/* Špeciálne formátovanie pre PINOKIO */
.pinokio-detail {
  width: 100%;
}

.detail-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #1976d2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.detail-section:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: 600;
}

.section-text {
  line-height: 1.8;
  color: #424242;
  text-align: justify;
  margin-bottom: 0.75rem;
}

.section-text:last-child {
  margin-bottom: 0;
}

.section-text strong {
  color: #1976d2;
  font-weight: 600;
}

.vision-section {
  border-left-color: #ffa726;
  background: linear-gradient(135deg, #fffbf0 0%, #ffffff 100%);
}

/* Responsivita */
@media (max-width: 768px) {
  .detail-section {
    padding: 1rem;
  }

  .section-header {
    font-size: 1rem;
  }

  .detail-paragraph {
    padding: 1rem;
  }

  .buttons-wrapper {
    flex-direction: column;
    gap: 0.75rem;
  }

  .buttons-wrapper .q-btn {
    width: 100%;
  }
}
</style>
