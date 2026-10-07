<template>
  <!--
    Povinná publicita EÚ (Manuál pre informovanie a komunikáciu P SK v2.0, kap. 4 a 5.10):
    znak EÚ s vyhlásením o spolufinancovaní + logo Programu Slovensko,
    musí byť viditeľný bez posúvania stránky.
  -->
  <aside class="eu-funding-bar" aria-label="Informácia o spolufinancovaní z Európskej únie">
    <p v-if="!compact" class="eu-funding-text">
      Projekt je spolufinancovaný Európskou úniou v rámci Programu Slovensko
      z Európskeho sociálneho fondu plus (ESF+)
    </p>
    <div class="eu-funding-logos-row">
      <img
        src="~/assets/3loga.png"
        alt="Spolufinancovaný Európskou úniou, Program Slovensko, Ministerstvo práce, sociálnych vecí a rodiny Slovenskej republiky"
        class="eu-funding-logos"
        width="627"
        height="85"
      />
      <a
        href="https://www.eurofondy.gov.sk"
        target="_blank"
        rel="noopener"
        class="eu-funding-link"
      >
        www.eurofondy.gov.sk
      </a>
    </div>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  /** Bez vety o spolufinancovaní – len logá a odkaz. */
  compact?: boolean;
}>();
</script>

<style scoped>
.eu-funding-bar {
  background: #fff;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  text-align: center;
}

.eu-funding-text {
  margin: 0 0 0.5rem;
  color: #212121;
  font-family: Arial, Verdana, Tahoma, sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  line-height: 1.5;
}

.eu-funding-logos-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 1.5rem;
}

.eu-funding-logos {
  width: 100%;
  max-width: 560px;
  height: auto;
  display: block;
}

.eu-funding-link {
  font-family: Arial, Verdana, Tahoma, sans-serif;
  font-weight: 700;
  color: #003399;
  text-decoration: none;
  white-space: nowrap;
}

.eu-funding-link:hover,
.eu-funding-link:focus-visible {
  text-decoration: underline;
}
</style>
