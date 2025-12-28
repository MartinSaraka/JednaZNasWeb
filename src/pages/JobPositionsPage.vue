<template>
  <q-page class="jobs-page q-py-xl">
    <!-- Banner pre projekt -->
    <div class="text-center q-mb-md q-px-md">
      <div class="project-banner q-mx-auto">
        <div class="text-body1 text-grey-7">Pracovné pozície pre projekt</div>
        <div class="project-link-wrapper" @click="goToProject">
          <q-icon
            name="work_outline"
            size="24px"
            color="primary"
            class="q-mr-xs"
          />
          <span class="project-link-text text-h6 text-primary cursor-pointer">
            PINOKIO
          </span>
        </div>
      </div>
    </div>

    <!-- Cieľ projektu PINOKIO -->
    <section class="project-goal q-mx-auto q-mb-xl q-px-md">
      <q-card class="goal-card shadow-3 animate__animated animate__fadeInUp">
        <q-card-section>
          <div class="text-center q-mb-md">
            <q-icon name="flag" color="primary" size="42px" />
            <div class="text-h5 text-bold text-primary q-mt-sm">
              Cieľ projektu PINOKIO
            </div>
          </div>
          <div class="goal-content">
            <p class="text-body1 goal-text">
              Projekt je zameraný na podporu neaktívnych mladých osôb do 30
              rokov (NEET), ktoré nie sú zamestnané, nie sú vo výcviku,
              nevzdelávajú sa a ani nie sú evidované na úrade práce. Jeho
              hlavným cieľom je ich priblíženie k trhu práce prostredníctvom
              cielenej pomoci v teréne.
            </p>
            <p class="text-body1 goal-text q-mt-md">
              <strong>Realizácia:</strong> Projekt sa realizuje v najmenej
              rozvinutých okresoch:
              <strong
                >Košice-okolie, Michalovce, Stropkov, Svidník, Trebišov, Humenné
                a Vranov nad Topľou</strong
              >
              na obdobie <strong>24 mesiacov od 1.11.2025</strong>.
            </p>
            <p class="text-body1 goal-text q-mt-md">
              Aktivity projektu sú navrhnuté tak, aby účinne motivovali a
              podporovali jednotlivcov pri hľadaní pracovného uplatnenia a
              vytvárali podmienky pre ich dlhodobú pracovnú integráciu. Tím
              skúsených pracovníkov zabezpečí efektívnu implementáciu
              jednotlivých aktivít.
            </p>
            <p class="text-body1 goal-text q-mt-md">
              Našou ambíciou je vytvoriť inkluzívnejší a dostupnejší trh práce,
              kde každý dostane reálnu príležitosť na pracovné uplatnenie.
            </p>
          </div>
        </q-card-section>
      </q-card>
    </section>

    <!-- Nábor info banner -->
    <div class="text-center q-mb-xl q-px-md">
      <q-card
        class="recruitment-banner q-mx-auto shadow-2 animate__animated animate__fadeInUp"
      >
        <q-card-section class="recruitment-content">
          <div class="row items-center justify-center q-gutter-md">
            <div class="recruitment-icon">
              <q-icon name="event" size="42px" color="primary" />
            </div>
            <div class="recruitment-text text-left">
              <div class="text-h6 text-bold text-primary">
                Primárny nábor do 1.11.2025
              </div>
              <div class="text-body2 text-grey-8 q-mt-xs">
                Neváhajte nás kontaktovať aj po tomto termíne! Radi sa s vami
                porozprávame.
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <!-- Pozície -->
    <section class="positions-section q-mx-auto q-px-md">
      <div class="row q-col-gutter-lg">
        <!-- 1) Manažér/ka -->
        <div class="col-12 col-md-6">
          <q-card class="job-card shadow-3 animate__animated animate__fadeInUp">
            <q-card-section class="job-header bg-primary text-white">
              <q-icon name="business_center" size="48px" class="q-mb-sm" />
              <div class="text-h5 text-bold">Manažér/ka</div>
              <div class="text-subtitle1">
                pre oblasť sociálneho začlenenia a zamestnanosti
              </div>
            </q-card-section>

            <q-card-section class="job-content">
              <div class="employment-types q-mb-md">
                <q-chip
                  icon="schedule"
                  color="grey-7"
                  text-color="white"
                  class="q-ma-xs"
                >
                  Plný úväzok (40 hod/týždeň)
                </q-chip>
              </div>

              <div class="text-subtitle2 text-grey-8 q-mb-sm q-mt-md">
                <q-icon name="work" color="grey-7" class="q-mr-xs" />
                Náplň práce:
              </div>
              <ul class="job-list">
                <li>
                  Riadenie a koordinácia činností v oblasti sociálneho
                  začlenenia
                </li>
                <li>Plánovanie a monitoring služieb zamestnanosti</li>
                <li>Vedenie tímu a implementácia stratégií</li>
                <li>Spravovanie rozpočtu a výkonnosti tímu</li>
                <li>Práca s mladými ľuďmi v situácii NEET</li>
              </ul>

              <q-separator class="q-my-md" />

              <div class="requirements-box">
                <q-icon
                  name="school"
                  color="orange"
                  size="24px"
                  class="q-mr-sm"
                />
                <div>
                  <div class="text-caption text-grey-7">
                    Minimálne požiadavky:
                  </div>
                  <div class="text-bold">
                    Vysokoškolské vzdelanie I. stupňa (Bc.) + 10 rokov praxe
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- 2) Odborný/a pracovník/čka -->
        <div class="col-12 col-md-6">
          <q-card class="job-card shadow-3 animate__animated animate__fadeInUp">
            <q-card-section class="job-header bg-primary text-white">
              <q-icon name="psychology" size="48px" class="q-mb-sm" />
              <div class="text-h5 text-bold">Odborný/a pracovník/čka</div>
              <div class="text-subtitle1">
                pre sociálnu inklúziu a zamestnanosť
              </div>
            </q-card-section>

            <q-card-section class="job-content">
              <div class="employment-types q-mb-md">
                <q-chip
                  icon="schedule"
                  color="grey-7"
                  text-color="white"
                  class="q-ma-xs"
                >
                  Plný úväzok (40 hod/týždeň)
                </q-chip>
                <q-chip
                  icon="schedule"
                  color="grey-7"
                  text-color="white"
                  class="q-ma-xs"
                >
                  Polovičný úväzok (20 hod/týždeň)
                </q-chip>
                <q-chip
                  icon="handshake"
                  color="grey-6"
                  text-color="white"
                  class="q-ma-xs"
                >
                  Dohoda o pracovnej činnosti (10 hod/týždeň)
                </q-chip>
              </div>

              <div class="text-subtitle2 text-grey-8 q-mb-sm q-mt-md">
                <q-icon name="work" color="grey-7" class="q-mr-xs" />
                Náplň práce:
              </div>
              <ul class="job-list">
                <li>Poskytovanie odborných poradenských služieb</li>
                <li>Riešenie špecifických problémov klientov</li>
                <li>Spolupráca s odborníkmi a organizáciami</li>
                <li>Rozvoj nástrojov zamestnanosti a sociálnej inklúzie</li>
                <li>Podpora neaktívnych ľudí</li>
              </ul>

              <q-separator class="q-my-md" />

              <div class="requirements-box">
                <q-icon
                  name="school"
                  color="orange"
                  size="24px"
                  class="q-mr-sm"
                />
                <div>
                  <div class="text-caption text-grey-7">
                    Minimálne požiadavky:
                  </div>
                  <div class="text-bold">
                    Stredné vzdelanie s maturitou + 5 rokov praxe
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- 3) Asistent/ka -->
        <div class="col-12 col-md-6">
          <q-card class="job-card shadow-3 animate__animated animate__fadeInUp">
            <q-card-section class="job-header bg-primary text-white">
              <q-icon name="support_agent" size="48px" class="q-mb-sm" />
              <div class="text-h5 text-bold">Asistent/ka</div>
              <div class="text-subtitle1">
                sociálnej inklúzie a zamestnanosti
              </div>
            </q-card-section>

            <q-card-section class="job-content">
              <div class="employment-types q-mb-md">
                <q-chip
                  icon="schedule"
                  color="grey-7"
                  text-color="white"
                  class="q-ma-xs"
                >
                  Plný úväzok (40 hod/týždeň)
                </q-chip>
              </div>

              <div class="text-subtitle2 text-grey-8 q-mb-sm q-mt-md">
                <q-icon name="work" color="grey-7" class="q-mr-xs" />
                Náplň práce:
              </div>
              <ul class="job-list">
                <li>Asistenčná podpora pod vedením odborného pracovníka</li>
                <li>Administratívna podpora projektových aktivít</li>
                <li>Podpora pri riešení problémov klientov</li>
                <li>Spolupráca s tímom pri realizácii služieb</li>
              </ul>

              <q-separator class="q-my-md" />

              <div class="requirements-box">
                <q-icon
                  name="school"
                  color="orange"
                  size="24px"
                  class="q-mr-sm"
                />
                <div>
                  <div class="text-caption text-grey-7">
                    Minimálne požiadavky:
                  </div>
                  <div class="text-bold">
                    Úplné stredné vzdelanie s maturitou
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- 4) Peer pracovník/čka -->
        <div class="col-12 col-md-6">
          <q-card class="job-card shadow-3 animate__animated animate__fadeInUp">
            <q-card-section class="job-header bg-primary text-white">
              <q-icon name="people" size="48px" class="q-mb-sm" />
              <div class="text-h5 text-bold">Peer pracovník/čka</div>
              <div class="text-subtitle1">
                sociálnej inklúzie a zamestnanosti
              </div>
            </q-card-section>

            <q-card-section class="job-content">
              <div class="employment-types q-mb-md">
                <q-chip
                  icon="schedule"
                  color="grey-7"
                  text-color="white"
                  class="q-ma-xs"
                >
                  Plný úväzok (40 hod/týždeň)
                </q-chip>
                <q-chip
                  icon="schedule"
                  color="grey-7"
                  text-color="white"
                  class="q-ma-xs"
                >
                  Polovičný úväzok (20 hod/týždeň)
                </q-chip>
                <q-chip
                  icon="handshake"
                  color="grey-6"
                  text-color="white"
                  class="q-ma-xs"
                >
                  Dohoda o pracovnej činnosti (10 hod/týždeň)
                </q-chip>
              </div>

              <div class="text-subtitle2 text-grey-8 q-mb-sm q-mt-md">
                <q-icon name="work" color="grey-7" class="q-mr-xs" />
                Náplň práce:
              </div>
              <ul class="job-list">
                <li>Motivácia klientov na základe osobnej skúsenosti</li>
                <li>Podpora pri zlepšení psychického stavu klientov</li>
                <li>Pomoc pri sebareflexii a integrácii do spoločnosti</li>
                <li>Poskytovanie praktických rád a pomoci</li>
              </ul>

              <q-separator class="q-my-md" />

              <div class="requirements-box highlight-box">
                <q-icon
                  name="verified"
                  color="positive"
                  size="24px"
                  class="q-mr-sm"
                />
                <div>
                  <div class="text-caption text-grey-7">
                    Minimálne požiadavky:
                  </div>
                  <div class="text-bold text-positive">
                    Vzdelanie sa nevyžaduje!
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <!-- Kontaktná sekcia -->
    <section class="contact-section q-px-md" style="margin-top: 6rem">
      <q-card
        class="contact-card q-mx-auto shadow-3 animate__animated animate__fadeInUp"
      >
        <q-card-section class="contact-header text-center">
          <q-icon
            name="connect_without_contact"
            size="56px"
            color="grey-7"
            class="q-mb-md"
          />
          <div class="text-h5 text-bold text-grey-8 q-mb-sm">
            Máte záujem o niektorú z pozícií?
          </div>
          <div class="text-body1 text-grey-7 q-mb-md">
            Staňte sa súčasťou tímu, ktorý mení životy mladých ľudí
          </div>
        </q-card-section>

        <q-card-section class="bg-white q-pa-lg">
          <div class="row items-center justify-center q-col-gutter-lg">
            <!-- Email kontakt -->
            <div class="col-12 col-md-6 text-center">
              <div class="contact-info-box">
                <q-icon
                  name="email"
                  size="42px"
                  color="grey-7"
                  class="q-mb-md"
                />
                <div class="text-subtitle2 text-grey-7 q-mb-xs">
                  Kontaktujte nás na:
                </div>
                <div class="text-h6 text-bold text-grey-8 q-mb-md">
                  jednaznasOZ@gmail.com
                </div>
                <q-btn
                  label="Napísať email"
                  color="primary"
                  unelevated
                  size="md"
                  icon="send"
                  @click="sendEmail"
                  class="full-width contact-btn"
                  style="max-width: 300px"
                />
              </div>
            </div>

            <!-- Alebo -->
            <div class="col-12 col-md-6 text-center">
              <div class="contact-info-box">
                <q-icon
                  name="phone"
                  size="42px"
                  color="grey-7"
                  class="q-mb-md"
                />
                <div class="text-subtitle2 text-grey-7 q-mb-xs">
                  Alebo navštívte našu:
                </div>
                <div class="text-h6 text-bold text-grey-8 q-mb-md">
                  Kontaktnú stránku
                </div>
                <q-btn
                  label="Prejsť na kontakt"
                  color="orange-7"
                  unelevated
                  size="md"
                  icon="arrow_forward"
                  @click="goToContact"
                  class="full-width contact-btn"
                  style="max-width: 300px"
                />
              </div>
            </div>
          </div>

          <q-separator class="q-my-lg" />

          <!-- Info o projekte -->
          <div class="text-center q-pt-md">
            <p class="text-body2 text-grey-7">
              <q-icon name="info_outline" class="q-mr-xs" />
              Projekt trvá <strong>24 mesiacov</strong> v rámci priority
              <strong>4P4 - Záruka pre mladých</strong>
            </p>
          </div>
        </q-card-section>
      </q-card>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goToContact() {
  router.push('/contact');
}

function sendEmail() {
  window.location.href =
    'mailto:jednaznasOZ@gmail.com?subject=Záujem o pracovnú pozíciu&body=Dobrý deň,%0D%0A%0D%0AMám záujem o pracovnú pozíciu...';
}

function goToProject() {
  router.push({ name: 'project-detail', params: { slug: 'pinokio' } });
}
</script>

<style scoped>
/* Importovanie animácií */
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

.jobs-page {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
  padding-bottom: 3rem;
}

/* Banner pre projekt */
.project-banner {
  max-width: 600px;
  padding: 1rem 2rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  transition: box-shadow 0.3s ease;
}

.project-banner:hover {
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.1);
}

.project-link-wrapper {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.project-link-wrapper:hover {
  transform: translateY(-2px);
}

.project-link-text {
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
}

.project-link-text:hover {
  color: #1565c0 !important;
}

/* Cieľ projektu */
.project-goal {
  max-width: 900px;
}

.goal-card {
  border-radius: 12px;
  border-left: 4px solid #1976d2;
  background: white;
}

.goal-content {
  margin-top: 1rem;
}

.goal-text {
  text-align: justify;
  line-height: 1.8;
  color: #424242;
}

.goal-text strong {
  color: #1976d2;
}

/* Nábor banner */
.recruitment-banner {
  max-width: 800px;
  border-radius: 12px;
  border: 2px solid #1976d2;
  background: white;
}

.recruitment-content {
  padding: 1.5rem 2rem;
}

.recruitment-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.recruitment-text {
  flex: 1;
}

/* Sekcia pozícií */
.positions-section {
  max-width: 1300px;
  margin-top: 3rem;
}

/* Karty pozícií */
.job-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  border: 1px solid #e0e0e0;
  background: white;
  display: flex;
  flex-direction: column;
}

.job-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(25, 118, 210, 0.15) !important;
  border-color: #1976d2;
}

/* Hlavičky kariet */
.job-header {
  padding: 2rem;
  text-align: center;
  color: white;
}

/* Obsah karty */
.job-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.job-content .q-separator {
  margin-top: auto !important;
}

/* Typy zamestnania */
.employment-types {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Zoznam úloh */
.job-list {
  list-style: none;
  padding-left: 0;
  margin: 0.5rem 0;
}

.job-list li {
  padding: 0.6rem 0;
  padding-left: 2rem;
  position: relative;
  line-height: 1.6;
  color: #444;
}

.job-list li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #1976d2;
  font-weight: bold;
  font-size: 1.2rem;
}

/* Box s požiadavkami */
.requirements-box {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
  border-left: 4px solid #ff9800;
}

.highlight-box {
  background: #f1f8e9;
  border-left-color: #4caf50;
}

/* Kontaktná sekcia */
.contact-section {
  max-width: 1100px;
  margin: 0 auto;
}

.contact-card {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
}

.contact-header {
  background: #f5f5f5;
  padding: 2.5rem 2rem;
}

.contact-info-box {
  padding: 1.5rem;
}

.contact-btn {
  font-weight: 500;
}

/* Responsivita */
@media (max-width: 1024px) {
  .recruitment-content {
    padding: 1.5rem;
  }

  .recruitment-text {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .recruitment-content {
    text-align: center;
  }

  .recruitment-icon {
    margin-bottom: 1rem;
  }

  .job-header {
    padding: 1.5rem;
  }

  .contact-header {
    padding: 2rem 1rem;
  }

  .contact-header .text-h4 {
    font-size: 1.5rem;
  }

  .contact-header .text-h6 {
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .employment-types {
    flex-direction: column;
  }

  .employment-types .q-chip {
    width: 100%;
    justify-content: center;
  }

  .job-card {
    margin-bottom: 1.5rem;
  }

  .project-banner {
    padding: 0.75rem 1rem;
  }

  .project-link-text {
    font-size: 1.1rem;
  }
}

/* Animácie na scroll */
.animate__animated {
  animation-duration: 0.8s;
}
</style>
