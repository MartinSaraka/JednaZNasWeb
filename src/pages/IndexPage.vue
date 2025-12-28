<template>
  <!-- 1) Hero sekcia - úvod -->
  <section class="hero-section row items-center justify-around q-py-xl q-px-md bg-light">
    <!-- Obrázok naľavo (na menších displejoch hore), text napravo -->
    <div class="col-12 col-md-5 text-center animate__animated animate__fadeInLeft q-pb-md">
      <img
        src="~/assets/family.jpg"
        alt="Family"
        class="hero-image"
      />
    </div>

    <div class="col-12 col-md-6 animate__animated animate__fadeInRight">
      <h1 class="text-h4 text-bold q-my-sm">
        Občianske Združenie JEDNA Z NÁS
      </h1>
      <div class="text-subtitle1 q-my-sm">
        Transformujeme životy ľudí zo znevýhodneného prostredia<br />

      </div>

    </div>
  </section>

<!-- 2) SPOJENÁ sekcia: Zameranie združenia (6 kariet, 2 riadky po 3 karty) -->
<section class="bg-white q-py-xl">
  <div class="q-mx-auto" style="max-width: 900px;">
    <h2 class="text-h4 text-dark text-center q-mb-md bold">
      Zameranie združenia
    </h2>

    <!-- Riadok 1 (3 karty) -->
    <div class="row justify-center q-my-md row-equal">
      <!-- Karta 1: Prevencia a Osveta -->
      <div class="col-12 col-md-4 q-pa-md animate__animated animate__fadeInLeft d-flex">
        <q-card class="shadow-2 card-elevated text-center my-card">
          <q-card-section>
            <q-icon name="favorite" color="negative" size="40px" class="q-my-sm" />
            <div class="text-h6 text-primary">Prevencia a Osveta</div>
            <p class="text-body2 q-my-sm">
              <ul class="text-left q-ma-none">
                <li class="q-my-xs">Systematické zlepšovanie informovanosti</li>
                <li class="q-my-xs">Zdravotná osveta, psychologická podpora</li>
                <li class="q-my-xs">Prevencia chorôb a krízových situácií</li>
              </ul>
            </p>
          </q-card-section>
        </q-card>
      </div>

      <!-- Karta 2: Sociálna inklúzia -->
      <div class="col-12 col-md-4 q-pa-md animate__animated animate__fadeInUp d-flex">
        <q-card class="shadow-2 card-elevated text-center my-card">
          <q-card-section>
            <q-icon name="diversity_3" color="secondary" size="40px" class="q-my-sm" />
            <div class="text-h6 text-primary">Sociálna inklúzia</div>
            <p class="text-body2 q-my-sm">
              <ul class="text-left q-ma-none">
                <li class="q-my-xs">Podpora znevýhodnených a marginalizovaných</li>
                <li class="q-my-xs">Príležitosti pre sociálne začlenenie</li>
                <li class="q-my-xs">Spolupráca s komunitnými partnermi</li>
              </ul>
            </p>
          </q-card-section>
        </q-card>
      </div>

      <!-- Karta 3: Obhajoba práv žien a detí -->
      <div class="col-12 col-md-4 q-pa-md animate__animated animate__fadeInRight d-flex">
        <q-card class="shadow-2 card-elevated text-center my-card">
          <q-card-section>
            <q-icon name="group" color="orange" size="40px" class="q-my-sm" />
            <div class="text-h6 text-primary">Obhajoba práv žien a detí</div>
            <p class="text-body2 q-my-sm">
              <ul class="text-left q-ma-none">
                <li class="q-my-xs">Spolupráca s odborníkmi a sociálnymi pracovníkmi</li>
                <li class="q-my-xs">Posilnenie postavenia žien a dievčat</li>
                <li class="q-my-xs">Rozvoj vedúcich schopností</li>
              </ul>
            </p>
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
            <p class="text-body2 q-my-sm">
              <ul class="text-left q-ma-none">
                <li class="q-my-xs">Vzdelávanie a rozvoj zručností znevyhodnených</li>
                <li class="q-my-xs">Integrácia do práce</li>
                <li class="q-my-xs">Granty a dotačné mechanizmy EÚ</li>
              </ul>
            </p>
          </q-card-section>
        </q-card>
      </div>

      <!-- Karta 5: Šikovné ruky (NOVÁ namiesto "Zdravotná osveta") -->
      <div class="col-12 col-md-4 q-pa-md animate__animated animate__fadeInUp d-flex">
        <q-card class="shadow-2 card-elevated text-center my-card">
          <q-card-section>
            <q-icon name="handyman" color="positive" size="40px" class="q-my-sm" />
            <div class="text-h6 text-primary">Šikovné ruky</div>
            <p class="text-body2 q-my-sm">
              <ul class="text-left q-ma-none">
                <li class="q-my-xs">Zapojenie žien na materskej či rodičovskej dovolenke</li>
                <li class="q-my-xs">Rozvoj praktických zručností a sebestačnosti</li>
                <li class="q-my-xs">Podpora pracovného uplatnenia v komunite</li>
              </ul>
            </p>
          </q-card-section>
        </q-card>
      </div>

      <!-- Karta 6: Vzdelávacie kurzy -->
      <div class="col-12 col-md-4 q-pa-md animate__animated animate__fadeInRight d-flex">
        <q-card class="shadow-2 card-elevated text-center my-card">
          <q-card-section>
            <q-icon name="school" color="warning" size="40px" class="q-my-sm" />
            <div class="text-h6 text-primary">Vzdelávacie kurzy</div>
            <p class="text-body2 q-my-sm">
              <ul class="text-left q-ma-none">
                <li class="q-my-xs">Kurzy a tréningy pre znevýhodnených</li>
                <li class="q-my-xs">Podpora sociálneho podnikania</li>
                <li class="q-my-xs">Rozvoj finančnej gramotnosti</li>
              </ul>
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</section>
<!-- 3) Sekcia o dobrovoľníkoch a projektoch (vylepšená) -->
<section class="volunteers-section q-py-xl text-black">
  <div class="q-mx-auto animate__animated animate__fadeInUp row items-center justify-around" style="max-width: 1200px;">

    <!-- Ľavý stĺpec: veľká fotka (col-7) -->
    <div class="col-12 col-md-7 q-pb-md">
      <div class="col-12 col-md-8 position-relative text-center">
    <!-- Obrázok -->
    <img
      src="~/assets/hearth.jpg"
      alt="Záverečný obrázok"
      class="overlay-img"
    />


  </div>
    </div>

    <!-- Pravý stĺpec: Nadpis a text blok (col-5) -->
    <div class="col-12 col-md-5 q-px-md">
      <!-- Nadpis vycentrovaný, väčší -->
      <h2 class="text-h5 text-center q-mb-md volunteers-title">
        Dobrovoľníci a Projekty
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
// Nie je potrebná špeciálna logika.
// Skontroluj, či v quasar.config.js máš "animations: ['fadeInLeft','fadeInRight','fadeInUp']".
</script>

<style scoped>
/* Jednoduché farby pozadia, ak chceš (možno pastelové odtiene) */
.bg-light {
  background-color: #f9f9f9;
}

.bg-light2 {
  background-color: #f1f1f1;
}

/* Hero obrázok – jemný tieň, zaoblené rohy, max šírka. */
.hero-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* Druhý obrázok v záverečnej sekcii, rovnaký štýl (alebo môžeš meniť). */
.hero-image-footer {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* Karty - jemne pridaný tieň, ak to chceš ešte výraznejšie */
.card-elevated {
  border-radius: 8px;
}

/* Sekcia dobrovoľníkov: pozadie môžeš nechať jednofarebné alebo gradient.
   Tu necháme jemne sivasté, stačí?
   Alebo použi gradient (pozri staršie rady).
*/
.volunteers-section {
  width: 100%;
  background-color: #f9f9f9; /* Bledé pozadie, ak chceš gradient, nahraď */
  padding: 2rem 1rem;
}

/* Väčšia ilustrácia/fotka dobrovoľníkov */
.volunteers-illustration-larger {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  display: block;
  margin: 0 auto;
}

/* Nadpis sekcie */
.volunteers-title {
  font-weight: 700;  /* hrubšie */
  color: #333;       /* tmavší text */
}

/* Blok textu: biele pozadie, tieň, zarovnanie textu, odsadenia */
.volunteers-text-block {


  padding: 1.5rem;
  text-align: justify;  /* text bude zarovnaný do bloku */
  margin-top: 1rem;
}

/* Môžeš upraviť line-height, farby, atď.
   Napr. line-height pre lepšiu čitateľnosť:
*/
.volunteers-text-block p {
  line-height: 1.5;
}

/* Na menších displejoch zmenšíme padding v .volunteers-text-block */
@media (max-width: 600px) {
  .volunteers-text-block {
    padding: 1rem;
  }
}


.last-section {
  /* Jemná farba pozadia, ak chceš:
  background-color: #f7f7f7; */
  width: 100%;
}

.last-img {
  max-width: 80%;    /* Obrázok bude menší */
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  /* Môžeš pridať margin, ak treba:
  margin: 0 auto; */
}


.relative-position {
  position: relative; /* pre overlay */
}



.position-relative {
  position: relative;
}

/* 1) Načítanie Google Fonts (Dancing Script pre pekný ozdobný nadpis).
   Upozornenie: V niektorých projektoch je lepšie to dať do index.html
   alebo quasar.config.js. Pre ukážku to dáme sem.
*/
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');

/* 2) Položka .overlay-img – stredný, menší obrázok s tieňom */
.overlay-img {
  max-width: 80%;    /* menší než 100%, aby bol kompaktnejší */
  height: auto;
  display: block;
  margin: 0 auto;    /* vycentrovanie */

}

/* 3) Rodič potrebuje position:relative, aby overlay mohol byť absolute */
.position-relative {
  position: relative;
}

.overlay-text {
  position: absolute;
  top: 82%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%; /* zabezpečí, že text bude v rámci šírky rodičovského prvku */
  text-align: center;
}

.fancy-heading {
  font-family: 'Dancing Script', cursive;
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0;
  color: rgb(255, 82, 82);
  white-space: nowrap; /* zabráni zlomeniu textu */
}

/* 6) Štýl pre odsek v overlay (ak nechceš, môžeš to zlúčiť do overlay-text) */
.overlay-paragraph {
  color: #fff;
  margin-top: 8px;
  font-weight: 800;
  font-size: 1rem;
  line-height: 1.3;
}

/* Responsivita – na menších obrazovkách trošku inak */
@media (max-width: 600px) {
  .overlay-img {
    max-width: 90%; /* obr. bude väčší vzhľadom na menší displej */
  }

  .fancy-heading {
    font-size: 0.7rem;
  }
  .overlay-paragraph {
    font-size: 0.9rem;
  }
}

/* 1) row-equal zaručí, že každý .col-.. .q-card bude rovnako vysoký */
.row-equal {
  display: flex;      /* flex layout pre row */
  flex-wrap: wrap;    /* aby karty šli do ďalšieho riadku, ak treba */
}

/* Každý .col-12.col-md-4 bude roztiahnutý do rovnakej výšky
   (v rámci jedného riadku).
*/
.row-equal > div {
  display: flex;
  align-items: stretch;
}

/* Karta zaberie maximálnu výšku.
   Nastavíme flex: 1 a stĺpcový layout,
   aby obsah karty ostal zoraďený zhora-nadol.
*/
.my-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
