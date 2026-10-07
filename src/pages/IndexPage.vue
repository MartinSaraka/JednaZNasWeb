<template>
  <!-- 0) Aktuálny projekt spolufinancovaný z EÚ – viditeľný bez posúvania -->
  <section class="eu-project-strip q-px-md q-py-md">
    <div class="eu-project-inner">
      <div class="eu-project-info">
        <img
          src="~/assets/logo_pinokio.png"
          alt="Logo projektu PINOKIO"
          class="eu-project-logo"
          width="503"
          height="343"
        />
        <p class="eu-project-text q-ma-none">
          <strong>Aktuálne realizujeme projekt PINOKIO</strong> – Podpora
          integrácie neaktívnych osôb komplexnými a individuálnymi opatreniami.
          Pomáhame mladým ľuďom do 30 rokov nájsť cestu k práci.
          <router-link
            :to="{ name: 'project-detail', params: { slug: 'pinokio' } }"
            class="eu-project-more"
          >
            Viac o projekte
          </router-link>
        </p>
      </div>
      <EuFundingBar />
    </div>
  </section>

  <!-- 1) Hero sekcia - úvod -->
  <section class="hero-section row items-center justify-around q-py-xl q-px-md bg-light">
    <!-- Obrázok naľavo (na menších displejoch hore), text napravo -->
    <div class="col-12 col-md-5 text-center animate__animated animate__fadeInLeft q-pb-md">
      <img
        src="~/assets/family.jpg"
        alt="Rodina - občianske združenie JEDNA Z NÁS pomáha rodinám v núdzi"
        class="hero-image"
        width="1400"
        height="700"
      />
    </div>

    <div class="col-12 col-md-6 animate__animated animate__fadeInRight">
      <h1 class="text-h4 text-bold q-my-sm">
        Občianske združenie JEDNA Z NÁS
      </h1>
      <div class="text-subtitle1 q-my-sm">
        Transformujeme životy ľudí zo znevýhodneného prostredia
      </div>
    </div>
  </section>

<!-- 2) SPOJENÁ sekcia: Zameranie združenia (6 kariet, 2 riadky po 3 karty) -->
<section class="bg-white q-py-xl">
  <div class="q-mx-auto" style="max-width: 900px;">
    <h2 class="text-h4 text-dark text-center q-mb-md text-bold">
      Zameranie združenia
    </h2>

    <!-- Riadok 1 (3 karty) -->
    <div class="row justify-center q-my-md row-equal">
      <!-- Karta 1: Prevencia a osveta -->
      <div class="col-12 col-md-4 q-pa-md animate__animated animate__fadeInLeft d-flex">
        <q-card class="shadow-2 card-elevated text-center my-card">
          <q-card-section>
            <q-icon name="favorite" color="negative" size="40px" class="q-my-sm" />
            <div class="text-h6 text-primary">Prevencia a osveta</div>
            <ul class="text-left text-body2 q-my-sm q-pl-md">
                <li class="q-my-xs">Systematické zlepšovanie informovanosti</li>
                <li class="q-my-xs">Zdravotná osveta, psychologická podpora</li>
                <li class="q-my-xs">Prevencia chorôb a krízových situácií</li>
              </ul>
          </q-card-section>
        </q-card>
      </div>

      <!-- Karta 2: Sociálna inklúzia -->
      <div class="col-12 col-md-4 q-pa-md animate__animated animate__fadeInUp d-flex">
        <q-card class="shadow-2 card-elevated text-center my-card">
          <q-card-section>
            <q-icon name="diversity_3" color="secondary" size="40px" class="q-my-sm" />
            <div class="text-h6 text-primary">Sociálna inklúzia</div>
            <ul class="text-left text-body2 q-my-sm q-pl-md">
                <li class="q-my-xs">Podpora znevýhodnených a marginalizovaných</li>
                <li class="q-my-xs">Príležitosti pre sociálne začlenenie</li>
                <li class="q-my-xs">Spolupráca s komunitnými partnermi</li>
              </ul>
          </q-card-section>
        </q-card>
      </div>

      <!-- Karta 3: Obhajoba práv žien a detí -->
      <div class="col-12 col-md-4 q-pa-md animate__animated animate__fadeInRight d-flex">
        <q-card class="shadow-2 card-elevated text-center my-card">
          <q-card-section>
            <q-icon name="group" color="orange" size="40px" class="q-my-sm" />
            <div class="text-h6 text-primary">Obhajoba práv žien a detí</div>
            <ul class="text-left text-body2 q-my-sm q-pl-md">
                <li class="q-my-xs">Spolupráca s odborníkmi a sociálnymi pracovníkmi</li>
                <li class="q-my-xs">Posilnenie postavenia žien a dievčat</li>
                <li class="q-my-xs">Rozvoj vedúcich schopností</li>
              </ul>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Riadok 2 (ďalšie 3 karty) -->
    <div class="row justify-center q-my-md row-equal">
      <!-- Karta 4: Dlhodobé riešenia -->
      <div class="col-12 col-md-4 q-pa-md animate__animated animate__fadeInLeft d-flex">
        <q-card class="shadow-2 card-elevated text-center my-card">
          <q-card-section>
            <q-icon name="build" color="info" size="40px" class="q-my-sm" />
            <div class="text-h6 text-primary">Dlhodobé riešenia</div>
            <ul class="text-left text-body2 q-my-sm q-pl-md">
                <li class="q-my-xs">Vzdelávanie a rozvoj zručností znevýhodnených</li>
                <li class="q-my-xs">Integrácia do práce</li>
                <li class="q-my-xs">Granty a dotačné mechanizmy EÚ</li>
              </ul>
          </q-card-section>
        </q-card>
      </div>

      <!-- Karta 5: Šikovné ruky (NOVÁ namiesto "Zdravotná osveta") -->
      <div class="col-12 col-md-4 q-pa-md animate__animated animate__fadeInUp d-flex">
        <q-card class="shadow-2 card-elevated text-center my-card">
          <q-card-section>
            <q-icon name="handyman" color="positive" size="40px" class="q-my-sm" />
            <div class="text-h6 text-primary">Šikovné ruky</div>
            <ul class="text-left text-body2 q-my-sm q-pl-md">
                <li class="q-my-xs">Zapojenie žien na materskej či rodičovskej dovolenke</li>
                <li class="q-my-xs">Rozvoj praktických zručností a sebestačnosti</li>
                <li class="q-my-xs">Podpora pracovného uplatnenia v komunite</li>
              </ul>
          </q-card-section>
        </q-card>
      </div>

      <!-- Karta 6: Vzdelávacie kurzy -->
      <div class="col-12 col-md-4 q-pa-md animate__animated animate__fadeInRight d-flex">
        <q-card class="shadow-2 card-elevated text-center my-card">
          <q-card-section>
            <q-icon name="school" color="warning" size="40px" class="q-my-sm" />
            <div class="text-h6 text-primary">Vzdelávacie kurzy</div>
            <ul class="text-left text-body2 q-my-sm q-pl-md">
                <li class="q-my-xs">Kurzy a tréningy pre znevýhodnených</li>
                <li class="q-my-xs">Podpora sociálneho podnikania</li>
                <li class="q-my-xs">Rozvoj finančnej gramotnosti</li>
              </ul>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</section>
<!-- 3) Sekcia o dobrovoľníkoch a projektoch (vylepšená) -->
<section class="volunteers-section q-py-xl text-black">
  <div class="q-mx-auto animate__animated animate__fadeInUp row items-center justify-around" style="max-width: 1200px;">

    <!-- Ľavý stĺpec: fotka -->
    <div class="col-12 col-md-7 q-pb-md text-center">
      <img
        src="~/assets/hearth.jpg"
        alt="Srdce - dobrovoľníci a projekty občianskeho združenia JEDNA Z NÁS"
        class="overlay-img"
        width="1400"
        height="933"
        loading="lazy"
      />
    </div>

    <!-- Pravý stĺpec: Nadpis a text blok (col-5) -->
    <div class="col-12 col-md-5 q-px-md">
      <!-- Nadpis vycentrovaný, väčší -->
      <h2 class="text-h5 text-center q-mb-md volunteers-title">
        Dobrovoľníci a projekty
      </h2>

      <!-- Blok s textom (bledé pozadie, tieň, odstupe) -->
      <div class="volunteers-text-block">
        <p class="text-body2 q-my-md">
          Naši dobrovoľníci sa aktívne podieľajú na sociálnych a zdravotníckych projektoch,
          poskytujú odborné poradenstvo, podporu a starostlivosť tým, ktorí ju najviac potrebujú.
          Ich odhodlanie a zručnosti nám umožňujú efektívne zlepšovať životné podmienky
          znevýhodnených skupín a vytvárať udržateľné riešenia pre ich dlhodobý rozvoj.
        </p>
        <p class="text-body2">
          Vďaka stratégii grantov a dotácií z EÚ dokážeme rozširovať náš vplyv
          a prinášať viac príležitostí pre jednotlivcov aj komunity. Usilujeme sa
          inšpirovať a motivovať ďalších k zapojeniu sa do dobrovoľníckych
          a filantropických aktivít, aby sme spoločne budovali lepší svet.
        </p>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import EuFundingBar from 'components/EuFundingBar.vue';
</script>

<style scoped>
/* Animácie fadeInLeft/Right začínajú mimo obrazovky – bez vodorovného posuvníka */
section {
  overflow-x: clip;
}

.bg-light {
  background-color: #f9f9f9;
}

/* Pásik s aktuálnym projektom a povinnou publicitou EÚ */
.eu-project-strip {
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
}

.eu-project-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;
}

.eu-project-info {
  flex: 1 1 380px;
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Logo projektu nesmie byť väčšie než znak EÚ (Manuál P SK v2.0, kap. 4.6 a 4.7) */
.eu-project-logo {
  height: 56px;
  width: auto;
  flex-shrink: 0;
}

.eu-project-text {
  line-height: 1.5;
  color: #333;
}

.eu-project-more {
  font-weight: 600;
  color: #1565c0;
  white-space: nowrap;
}

.eu-project-inner > .eu-funding-bar {
  flex: 1 1 420px;
}

.hero-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card-elevated {
  border-radius: 8px;
}

.volunteers-section {
  width: 100%;
  background-color: #f9f9f9;
  padding: 2rem 1rem;
}

.volunteers-title {
  font-weight: 700;
  color: #333;
}

.volunteers-text-block {
  padding: 1.5rem;
  text-align: justify;
  margin-top: 1rem;
}

.volunteers-text-block p {
  line-height: 1.5;
}

.overlay-img {
  max-width: 80%;
  height: auto;
  display: block;
  margin: 0 auto;
}

/* Rovnako vysoké karty v riadku */
.row-equal {
  display: flex;
  flex-wrap: wrap;
}

.row-equal > div {
  display: flex;
  align-items: stretch;
}

.my-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (max-width: 600px) {
  .volunteers-text-block {
    padding: 1rem;
  }

  .overlay-img {
    max-width: 90%;
  }

  .eu-project-logo {
    height: 40px;
  }

  .eu-project-text {
    font-size: 0.9rem;
  }
}
</style>
