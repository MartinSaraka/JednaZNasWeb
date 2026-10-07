<template>
  <q-page v-if="project" class="project-detail-page q-py-lg q-px-md">
    <div class="detail-column">
      <!-- Povinná publicita EÚ – hneď hore, viditeľná bez posúvania -->
      <EuFundingBar v-if="eu" class="q-mb-lg" />

      <!-- Hlavička projektu – vycentrovaná -->
      <header class="detail-header">
        <img
          v-if="project.slug === 'pinokio'"
          src="~/assets/logo_pinokio.png"
          alt="Logo projektu PINOKIO"
          class="pinokio-logo"
          width="503"
          height="343"
        />
        <div v-else class="icon-circle" :class="`text-${project.iconColor}`">
          <q-icon :name="project.icon" size="44px" />
        </div>
        <h1 class="detail-title">
          {{ eu ? eu.fullName : project.name }}
        </h1>
        <p class="detail-subtitle">
          {{ eu ? `Kód projektu: ${eu.projectCode}` : project.shortPurpose }}
        </p>
        <div v-if="eu" class="detail-chips">
          <span class="chip">
            <q-icon name="event" size="18px" />
            {{ eu.realizationPeriod }}
          </span>
          <span class="chip">
            <q-icon name="groups" size="18px" />
            Mladí ľudia do 30 rokov (NEET)
          </span>
          <span class="chip">
            <q-icon name="place" size="18px" />
            {{ eu.districts.length }} okresov východného Slovenska
          </span>
        </div>
      </header>

      <!-- Projekt spolufinancovaný z fondov EÚ -->
      <template v-if="eu">
        <section class="detail-section">
          <h2 class="section-header">
            <q-icon name="flag" color="primary" size="26px" />
            Cieľ projektu
          </h2>
          <p class="section-text">{{ project.description }}</p>
          <ul class="section-list">
            <li v-for="goal in eu.goals" :key="goal">{{ goal }}</li>
          </ul>
        </section>

        <section class="detail-section">
          <h2 class="section-header">
            <q-icon name="groups" color="primary" size="26px" />
            Cieľová skupina
          </h2>
          <p class="section-text">{{ eu.targetGroup }}</p>
        </section>

        <section class="detail-section accent-orange">
          <h2 class="section-header">
            <q-icon name="place" color="orange-7" size="26px" />
            Kde projekt realizujeme
          </h2>
          <div class="district-list">
            <span v-for="district in eu.districts" :key="district" class="district">
              {{ district }}
            </span>
          </div>
          <p class="section-text text-center q-mt-md">
            <strong>Obdobie realizácie:</strong> {{ eu.realizationPeriod }}
          </p>
        </section>

        <section class="detail-section">
          <h2 class="section-header">
            <q-icon name="checklist" color="primary" size="26px" />
            Hlavné aktivity
          </h2>
          <ul class="section-list">
            <li v-for="activity in eu.activities" :key="activity">
              {{ activity }}
            </li>
          </ul>
        </section>

        <section class="detail-section accent-green">
          <h2 class="section-header">
            <q-icon name="trending_up" color="positive" size="26px" />
            Očakávané výsledky
          </h2>
          <div
            v-if="eu.expectedResultsNumbers.length"
            class="results-grid q-mb-md"
          >
            <div
              v-for="item in eu.expectedResultsNumbers"
              :key="item.label"
              class="result-item"
            >
              <span class="result-value">{{ item.value }}</span>
              <span class="result-label">{{ item.label }}</span>
            </div>
          </div>
          <ul class="section-list">
            <li v-for="result in eu.expectedResultsText" :key="result">
              {{ result }}
            </li>
          </ul>
        </section>

        <section class="detail-section">
          <h2 class="section-header">
            <q-icon name="info" color="primary" size="26px" />
            Identifikácia projektu
          </h2>
          <dl class="info-table">
            <div v-for="row in infoRows" :key="row.label" class="info-row">
              <dt>{{ row.label }}</dt>
              <dd>
                <a v-if="row.href" :href="row.href">{{ row.value }}</a>
                <template v-else>{{ row.value }}</template>
              </dd>
            </div>
            <div class="info-row info-row-highlight">
              <dt>Zazmluvnená výška NFP</dt>
              <dd>{{ eu.contractedNfp }}</dd>
            </div>
          </dl>
        </section>

        <section class="detail-section accent-amber vision-section">
          <h2 class="section-header">
            <q-icon name="lightbulb" color="amber-8" size="26px" />
            Naša vízia
          </h2>
          <p class="section-text text-center">
            Našou ambíciou je vytvoriť inkluzívnejší a dostupnejší trh práce,
            kde každý dostane reálnu príležitosť na pracovné uplatnenie. Každý
            človek si zaslúži šancu na dôstojný život a pracovné uplatnenie, a
            preto chceme týmto projektom vytvoriť podmienky, ktoré im umožnia
            naplno využiť svoj potenciál a aktívne sa zapojiť do spoločnosti.
          </p>
        </section>

        <!-- Plagáty projektu -->
        <section class="posters-section">
          <h2 class="section-header">
            <q-icon name="image" color="primary" size="26px" />
            Plagáty projektu
          </h2>
          <div class="posters-row">
            <figure v-for="poster in posters" :key="poster.src" class="poster">
              <button
                type="button"
                class="plagat-button"
                :aria-label="`Zväčšiť: ${poster.title}`"
                @click="openPoster(poster)"
              >
                <img
                  :src="poster.src"
                  :alt="poster.alt"
                  class="plagat-thumbnail"
                  width="1054"
                  height="1492"
                  loading="lazy"
                />
              </button>
              <figcaption class="text-caption text-grey-8 q-mt-sm">
                {{ poster.title }} – kliknite pre zväčšenie
              </figcaption>
            </figure>
          </div>
        </section>

        <q-dialog v-model="showPlagatDialog">
          <q-card v-if="activePoster" class="plagat-dialog">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">{{ activePoster.title }}</div>
              <q-space />
              <q-btn
                icon="close"
                flat
                round
                dense
                v-close-popup
                aria-label="Zavrieť"
              />
            </q-card-section>
            <q-card-section>
              <img
                :src="activePoster.src"
                :alt="activePoster.alt"
                class="plagat-full-size"
              />
            </q-card-section>
          </q-card>
        </q-dialog>
      </template>

      <!-- Ostatné projekty -->
      <section v-else class="detail-section">
        <p
          v-for="(paragraph, index) in paragraphs"
          :key="index"
          class="section-text"
        >
          {{ paragraph }}
        </p>
      </section>

      <div class="buttons-wrapper">
        <q-btn
          v-if="project.slug === 'pinokio'"
          label="Zobraziť pracovné pozície"
          color="orange-7"
          icon="work"
          unelevated
          :to="{ name: 'job-positions' }"
        />
        <q-btn
          label="Späť na projekty"
          color="primary"
          icon="arrow_back"
          outline
          :to="{ name: 'projects' }"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import EuFundingBar from 'components/EuFundingBar.vue';
import { findProject } from 'src/data/projects';
import plagatUrl from 'assets/plagat.jpg';
import plagatKontaktUrl from 'assets/plagat_kontakt.jpg';

interface Poster {
  src: string;
  title: string;
  alt: string;
}

const posters: Poster[] = [
  {
    src: plagatUrl,
    title: 'Informačný plagát projektu',
    alt: 'Informačný plagát projektu PINOKIO so základnými informáciami, identifikáciou projektu a logami spolufinancovania z Európskej únie',
  },
  {
    src: plagatKontaktUrl,
    title: 'Kontaktná dostupnosť',
    alt: 'Plagát Kontaktná dostupnosť projektu PINOKIO: pondelok až piatok 8:00 – 17:00, kontaktná osoba Mgr. Mária Saraková, telefón +421 918 371 861',
  },
];

const route = useRoute();
const router = useRouter();
const showPlagatDialog = ref(false);
const activePoster = ref<Poster | null>(null);

function openPoster(poster: Poster) {
  activePoster.value = poster;
  showPlagatDialog.value = true;
}

const project = computed(() => findProject(route.params.slug as string));
const eu = computed(() => project.value?.eu);

watch(
  project,
  (found) => {
    if (!found) router.replace({ name: 'projects' });
  },
  { immediate: true }
);

const paragraphs = computed(() =>
  (project.value?.description ?? '')
    .split('\n\n')
    .map((p) => p.trim())
    .filter((p) => p.length > 0)
);

const infoRows = computed(() => {
  const info = eu.value;
  if (!info) return [];
  return [
    { label: 'Kód projektu', value: info.projectCode },
    { label: 'Prijímateľ', value: info.beneficiary },
    { label: 'Program', value: info.program },
    { label: 'Fond', value: info.fund },
    { label: 'Priorita', value: info.priority },
    { label: 'Špecifický cieľ', value: info.specificObjective },
    { label: 'Výzva', value: info.callCode },
    { label: 'Názov výzvy', value: info.callName },
    { label: 'Sprostredkovateľský orgán', value: info.provider },
    { label: 'Obdobie realizácie projektu', value: info.realizationPeriod },
    { label: 'Miesto realizácie projektu', value: info.place },
    {
      label: 'Kontakt',
      value: info.contactPhone,
      href: `tel:${info.contactPhone.replace(/\s/g, '')}`,
    },
  ];
});
</script>

<style scoped>
.project-detail-page {
  background: linear-gradient(to bottom, #f5f8fc 0%, #ffffff 420px);
}

/* Jeden vycentrovaný stĺpec */
.detail-column {
  max-width: 860px;
  margin: 0 auto;
}

/* Hlavička projektu */
.detail-header {
  text-align: center;
  margin-bottom: 2rem;
}

/* Logo projektu nesmie byť väčšie než znak EÚ (Manuál P SK v2.0, kap. 4.6 a 4.7) */
.pinokio-logo {
  height: 72px;
  width: auto;
  display: block;
  margin: 0 auto;
}

.icon-circle {
  position: relative;
  width: 88px;
  height: 88px;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-circle::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.12;
}

.detail-title {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.3;
  color: #0d47a1;
  margin: 1rem auto 0.5rem;
  max-width: 720px;
}

.detail-subtitle {
  color: #555;
  font-size: 1.05rem;
  margin: 0 0 1rem;
}

.detail-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  background: #e3f2fd;
  color: #0d47a1;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Sekcie */
.detail-section {
  margin-bottom: 1.5rem;
  padding: 1.75rem 2rem;
  background: #fff;
  border-radius: 12px;
  border-top: 4px solid #1976d2;
  box-shadow: 0 2px 12px rgba(13, 71, 161, 0.07);
}

.accent-orange {
  border-top-color: #f57c00;
}

.accent-green {
  border-top-color: #21ba45;
}

.accent-amber {
  border-top-color: #ffb300;
}

.vision-section {
  background: linear-gradient(135deg, #fffbf0 0%, #ffffff 100%);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 0 1.25rem;
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1.4;
  color: #0d47a1;
  text-align: center;
}

.section-text {
  line-height: 1.8;
  color: #424242;
  margin: 0 0 0.75rem;
}

.section-text:last-child {
  margin-bottom: 0;
}

.section-text strong {
  color: #1565c0;
}

.section-list {
  margin: 0;
  padding-left: 1.25rem;
  line-height: 1.8;
  color: #424242;
}

.section-list li + li {
  margin-top: 0.4rem;
}

.section-list li::marker {
  color: #1976d2;
}

/* Okresy */
.district-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.district {
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background: #fff3e0;
  color: #8a4b00;
  font-weight: 500;
}

/* Výsledky */
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.75rem;
}

.result-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background: #f1f8e9;
  border-radius: 8px;
}

.result-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: #2e7d32;
}

.result-label {
  color: #424242;
  font-size: 0.9rem;
}

/* Identifikácia projektu */
.info-table {
  margin: 0;
  border: 1px solid #e3e8ef;
  border-radius: 8px;
  overflow: hidden;
}

.info-row {
  display: grid;
  grid-template-columns: 240px 1fr;
}

.info-row + .info-row {
  border-top: 1px solid #e3e8ef;
}

.info-row dt,
.info-row dd {
  margin: 0;
  padding: 0.7rem 1rem;
  line-height: 1.5;
}

.info-row dt {
  background: #f5f8fc;
  font-weight: 600;
  color: #455a64;
}

.info-row dd {
  color: #1a237e;
}

.info-row dd a {
  color: inherit;
}

.info-row-highlight dt,
.info-row-highlight dd {
  background: #e3f2fd;
  font-weight: 700;
  color: #0d47a1;
}

.info-row-highlight dd {
  font-size: 1.15rem;
}

/* Plagáty */
.posters-section {
  margin: 2.5rem 0 0;
}

.posters-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.poster {
  flex: 1 1 220px;
  max-width: 320px;
  margin: 0;
  text-align: center;
}

.plagat-button {
  padding: 0;
  border: 0;
  background: none;
  cursor: zoom-in;
  display: block;
  width: 100%;
}

.plagat-thumbnail {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.plagat-button:hover .plagat-thumbnail,
.plagat-button:focus-visible .plagat-thumbnail {
  transform: scale(1.03);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.plagat-dialog {
  max-width: 90vw;
  max-height: 90vh;
}

.plagat-full-size {
  width: 100%;
  height: auto;
  display: block;
}

/* Tlačidlá */
.buttons-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin: 2.5rem 0 1rem;
}

/* Responzivita */
@media (max-width: 768px) {
  .detail-title {
    font-size: 1.35rem;
  }

  .detail-section {
    padding: 1.25rem 1rem;
  }

  .section-header {
    font-size: 1.15rem;
  }

  .info-row {
    grid-template-columns: 1fr;
  }

  .info-row dt {
    padding-bottom: 0.25rem;
  }

  .info-row dd {
    padding-top: 0.25rem;
  }

  .buttons-wrapper .q-btn {
    width: 100%;
  }

  .pinokio-logo {
    height: 44px;
  }
}
</style>
