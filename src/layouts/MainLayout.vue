<template>
  <q-layout view="hhh lpr fff">
    <!-- Hlavička -->
    <q-header class="bg-white text-dark q-px-md q-py-sm shadow-1">
      <div class="row items-center no-wrap justify-between" style="width: 100%">
        <!-- 1) Ľavá časť: Logo (klikateľné) -->
        <div
          class="row items-center no-wrap"
          style="cursor: pointer"
          @click="goTo('/')"
        >
          <img
            src="~/assets/CestaVon.png"
            alt="Jedna Z Nás"
            style="height: 40px; width: auto"
            class="q-mr-sm"
          />
          <span class="text-h6">Jedna Z Nás</span>
        </div>

        <!-- 2) Pravá časť: Navigácia -->
        <div class="row items-center no-wrap">
          <!-- A) Desktop/tablet (md+) -> klasické tlačidlá -->
          <div
            class="row items-center no-wrap q-gutter-sm"
            v-if="!$q.screen.lt.md"
          >
            <q-btn flat label="O nás" class="text-dark" @click="goTo('/')" />
            <q-btn
              flat
              label="Projekty"
              class="text-dark"
              @click="goTo('/projects')"
            />
            <q-btn
              flat
              label="Pracovné pozície"
              class="text-dark"
              @click="goTo('/job-positions')"
            />
            <q-btn
              flat
              label="Kontakt"
              class="text-dark"
              @click="goTo('/contact')"
            />
          </div>

          <!-- B) Mobil (lt.md) -> q-btn-dropdown -->
          <div v-else>
            <q-btn-dropdown flat round icon="menu" color="dark" no-caps>
              <q-list style="min-width: 180px">
                <!-- O nás -->
                <q-item clickable v-ripple @click="goTo('/')">
                  <q-item-section>O nás</q-item-section>
                </q-item>

                <!-- Projekty -->
                <q-item clickable v-ripple @click="goTo('/projects')">
                  <q-item-section>Projekty</q-item-section>
                </q-item>

                <!-- Pracovné pozície -->
                <q-item clickable v-ripple @click="goTo('/job-positions')">
                  <q-item-section>Pracovné pozície</q-item-section>
                </q-item>

                <!-- Kontakt -->
                <q-item clickable v-ripple @click="goTo('/contact')">
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
      IČO: 42036780 | jednaznasOZ@gmail.com | ©
      {{ new Date().getFullYear() }} Obč. Z. JEDNA Z NÁS. Všetky práva
      vyhradené.
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const router = useRouter();

function goTo(path: string) {
  router.push(path);
}
</script>

<style scoped>
/* Ďalšie voliteľné úpravy headeru, loga atď. */
/* Napr. :hover efekty na logo, atď. */
</style>
