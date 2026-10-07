<template>
  <q-page class="projects-page q-py-xl q-px-md">
    <div class="projects-inner">
      <header class="page-header">
        <h1 class="page-title">Naše projekty a iniciatívy</h1>
        <p class="page-subtitle">
          Prehľad projektov, ktorými pomáhame ľuďom zo znevýhodneného prostredia
        </p>
      </header>

      <!-- Aktuálne realizovaný projekt – zvýraznený -->
      <article
        v-for="project in activeProjects"
        :key="project.slug"
        class="featured-card"
      >
        <span class="featured-badge">
          <q-icon name="star" size="16px" />
          Aktuálne realizovaný projekt
        </span>
        <div class="featured-body">
          <img
            v-if="project.slug === 'pinokio'"
            src="~/assets/logo_pinokio.png"
            alt=""
            class="featured-logo"
            width="503"
            height="343"
          />
          <div class="featured-text">
            <h2 class="featured-title">
              <!-- ::after roztiahne odkaz na celú kartu -->
              <router-link
                :to="{ name: 'project-detail', params: { slug: project.slug } }"
                class="stretched-link"
              >
                {{ project.name }}
              </router-link>
            </h2>
            <p class="featured-purpose">{{ project.shortPurpose }}</p>
            <p v-if="project.eu" class="featured-meta">
              <q-icon name="event" size="18px" />
              {{ project.eu.realizationPeriod }}
            </p>
            <span class="more-link" aria-hidden="true">
              Viac o projekte
              <q-icon name="arrow_forward" size="18px" />
            </span>
          </div>
        </div>
        <!-- Povinná publicita EÚ pri informácii o projekte -->
        <EuFundingBar v-if="project.eu" compact class="featured-eu" />
      </article>

      <h2 class="section-title">Ďalšie projekty</h2>

      <div class="projects-grid">
        <router-link
          v-for="project in otherProjects"
          :key="project.slug"
          :to="{ name: 'project-detail', params: { slug: project.slug } }"
          class="project-card"
        >
          <div class="icon-circle" :class="`text-${project.iconColor}`">
            <q-icon :name="project.icon" size="30px" />
          </div>
          <h3 class="card-title">{{ project.name }}</h3>
          <p class="card-purpose">{{ project.shortPurpose }}</p>
          <span class="more-link">
            Viac o projekte
            <q-icon name="arrow_forward" size="18px" />
          </span>
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import EuFundingBar from 'components/EuFundingBar.vue';
import { projects } from 'src/data/projects';

const activeProjects = projects.filter((p) => p.active);
const otherProjects = projects.filter((p) => !p.active);
</script>

<style scoped>
.projects-page {
  background: linear-gradient(to bottom, #f5f8fc 0%, #ffffff 480px);
}

.projects-inner {
  max-width: 1100px;
  margin: 0 auto;
}

/* Hlavička */
.page-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.page-title {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.25;
  color: #1a1a1a;
  margin: 0 0 0.5rem;
}

.page-subtitle {
  font-size: 1.1rem;
  color: #555;
  margin: 0;
}

/* Zvýraznený projekt */
.featured-card {
  position: relative;
  display: block;
  cursor: pointer;
  max-width: 900px;
  margin: 0 auto 3rem;
  padding: 2.5rem 2rem 1rem;
  background: #fff;
  border: 2px solid #1976d2;
  border-radius: 16px;
  box-shadow: 0 6px 24px rgba(25, 118, 210, 0.12);
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.featured-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 32px rgba(25, 118, 210, 0.2);
}

.featured-badge {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  background: #1976d2;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.35);
}

.featured-body {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

/* Logo projektu nesmie byť väčšie než znak EÚ (Manuál P SK v2.0, kap. 4.6 a 4.7) */
.featured-logo {
  height: 72px;
  width: auto;
  flex-shrink: 0;
}

.featured-text {
  max-width: 560px;
}

.featured-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #0d47a1;
  margin: 0 0 0.35rem;
  line-height: 1.3;
}

.featured-purpose {
  font-size: 1.05rem;
  color: #333;
  margin: 0 0 0.5rem;
  line-height: 1.5;
}

.featured-meta {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: #555;
  margin: 0 0 0.75rem;
}

.stretched-link {
  color: inherit;
  text-decoration: none;
}

.stretched-link::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
}

/* Odkaz na eurofondy.gov.sk musí ostať klikateľný nad roztiahnutým odkazom */
.featured-eu {
  position: relative;
  z-index: 1;
  margin-top: 1.25rem;
  border-top: 1px solid #e3e8ef;
  border-radius: 0;
}

/* Ďalšie projekty */
.section-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 1.5rem;
}

/* Flex namiesto gridu – neúplný posledný rad sa vycentruje */
.projects-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.project-card {
  flex: 0 1 calc((100% - 3rem) / 3);
  min-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.75rem 1.5rem 1.5rem;
  background: #fff;
  border: 1px solid #e3e8ef;
  border-radius: 14px;
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: #90caf9;
  box-shadow: 0 8px 24px rgba(13, 71, 161, 0.1);
}

.featured-card:focus-within,
.project-card:focus-visible {
  outline: 3px solid #1976d2;
  outline-offset: 3px;
}

.icon-circle {
  position: relative;
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
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

.card-title {
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.35;
  color: #0d47a1;
  margin: 0 0 0.5rem;
}

.card-purpose {
  flex: 1;
  color: #555;
  line-height: 1.55;
  margin: 0 0 1rem;
}

.more-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: 600;
  color: #1976d2;
}

.project-card:hover .more-link,
.featured-card:hover .more-link {
  text-decoration: underline;
}

/* Responzivita */
@media (max-width: 900px) {
  .project-card {
    flex-basis: calc((100% - 1.5rem) / 2);
  }
}

@media (max-width: 700px) {
  .project-card {
    flex-basis: 100%;
  }

  .page-title {
    font-size: 1.6rem;
  }

  .featured-card {
    padding: 2.25rem 1rem 0.5rem;
  }

  .featured-body {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .featured-logo {
    height: 44px;
  }

  .featured-title {
    font-size: 1.35rem;
  }

  .featured-meta {
    justify-content: center;
  }
}
</style>
