<template>
  <q-layout view="hhh lpr fff">
    <!-- Hlavička -->
    <q-header class="bg-white text-dark q-px-md q-py-sm shadow-1">
      <div class="row items-center no-wrap justify-between" style="width: 100%">
        <!-- 1) Ľavá časť: Logo (klikateľné) -->
        <router-link
          to="/"
          class="row items-center no-wrap home-link"
          aria-label="JEDNA Z NÁS – domov"
        >
          <img
            src="~/assets/CestaVon.png"
            alt=""
            width="406"
            height="397"
            style="height: 40px; width: auto"
            class="q-mr-sm"
          />
          <span class="text-h6">JEDNA Z NÁS</span>
        </router-link>

        <!-- 2) Pravá časť: Navigácia -->
        <div class="row items-center no-wrap">
          <!-- A) Desktop/tablet (md+) -> klasické tlačidlá -->
          <div
            class="row items-center no-wrap q-gutter-sm"
            v-if="!$q.screen.lt.md"
          >
            <q-btn flat label="O nás" class="text-dark" to="/" exact />
            <q-btn
              flat
              label="Projekty"
              class="text-dark"
              to="/projects"
            />
            <q-btn
              flat
              label="Pracovné pozície"
              class="text-dark"
              to="/job-positions"
            />
            <q-btn
              flat
              label="Kontakt"
              class="text-dark"
              to="/contact"
            />
          </div>

          <!-- B) Mobil (lt.md) -> q-btn-dropdown -->
          <div v-else>
            <q-btn-dropdown
              flat
              round
              icon="menu"
              color="dark"
              no-caps
              aria-label="Menu"
            >
              <q-list style="min-width: 180px">
                <!-- O nás -->
                <q-item clickable v-ripple to="/" exact>
                  <q-item-section>O nás</q-item-section>
                </q-item>

                <!-- Projekty -->
                <q-item clickable v-ripple to="/projects">
                  <q-item-section>Projekty</q-item-section>
                </q-item>

                <!-- Pracovné pozície -->
                <q-item clickable v-ripple to="/job-positions">
                  <q-item-section>Pracovné pozície</q-item-section>
                </q-item>

                <!-- Kontakt -->
                <q-item clickable v-ripple to="/contact">
                  <q-item-section>Kontakt</q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
      </div>
    </q-header>

    <!-- Obsah -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Pätička -->
    <q-footer class="bg-grey-1 text-dark text-center q-pa-md">
      Občianske združenie JEDNA Z NÁS | IČO: 42036780 |
      <a href="mailto:jednaznasoz@gmail.com" class="text-dark">jednaznasoz@gmail.com</a>
      | © {{ new Date().getFullYear() }} OZ JEDNA Z NÁS. Všetky práva vyhradené.
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';

const $q = useQuasar();
</script>

<style scoped>
.home-link {
  color: inherit;
  text-decoration: none;
}
</style>
