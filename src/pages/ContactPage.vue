<template>
  <q-page class="contact-page q-py-xl">
    <!-- Nadpis kontaktu -->
    <div class="text-center q-mb-xl">
      <h1 class="text-h5 text-bold contact-title">Kontakt</h1>
      <p class="contact-subtitle">
        Radi vám zodpovieme otázky a tešíme sa na spoluprácu
      </p>
    </div>

    <!-- Logo (nepovinné) -->
    <div class="text-center q-mb-xl">
      <img src="~/assets/contact.jpg" alt="Kontaktný obrázok občianskeho združenia JEDNA Z NÁS" class="logo-img" />
    </div>

    <!-- Základné info (IČO, email, atď.) -->
    <div class="info-wrapper text-center q-my-xl">
      <p class="text-body1 q-my-sm">
        Občianske združenie JEDNA Z NÁS<br />
        IČO: 42036780
      </p>
      <p class="text-body1 q-my-sm">
        Email: <strong>jednaznasoz@gmail.com</strong><br />
      </p>
    </div>

    <!-- Kontaktná dostupnosť – projekt PINOKIO -->
    <section class="hours-wrapper q-mx-auto q-my-xl" aria-labelledby="hours-title">
      <h2 id="hours-title" class="text-h6 text-primary text-center q-mt-none q-mb-xs">
        Kontaktná dostupnosť – projekt PINOKIO
      </h2>
      <p class="text-center text-grey-8 q-mb-md">Kód projektu: 401404D511</p>
      <table class="hours-table">
        <tbody>
          <tr v-for="day in days" :key="day">
            <th scope="row">{{ day }}</th>
            <td>8:00 – 17:00</td>
          </tr>
        </tbody>
      </table>
      <p class="text-center text-body1 q-mt-md q-mb-xs">
        Kontaktná osoba: <strong>Mgr. Mária Saraková</strong>
      </p>
      <p class="text-center text-body1 q-my-none">
        Telefón: <a href="tel:+421918371861"><strong>+421 918 371 861</strong></a>
      </p>
    </section>

    <!-- Tlačidlo "Napísať email" -->
    <div class="text-center">
      <q-btn
        label="Napísať email"
        color="primary"
        class="contact-btn"
        @click="openEmail"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
const days = ['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok'];

// Jednoduchá funkcia na otvorenie mailto: odkazu
function openEmail() {
  // Môžeš pridať subject a body:
  // "mailto:jednaznasoz@gmail.com?subject=Chcem%20viac%20info&body=Ahoj..."
  window.location.href =
    'mailto:jednaznasoz@gmail.com?subject=Pozdrav%20zo%20stranky';
}
</script>

<style scoped>
.contact-page {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  /* Môžeš pridať jemnú farbu pozadia:
  background-color: #fafafa;
  */
}

.contact-title {
  font-size: 1.8rem;
}

.contact-subtitle {
  color: #666;
  font-size: 1rem;
}

.logo-img {
  max-width: 200px;
  width: 50%;
  height: auto;
}

.info-wrapper {
  color: #555;
  /* Môžeš pridať border, tieň, atď. */
}

.hours-wrapper {
  max-width: 420px;
  padding: 0 1rem;
}

.hours-table {
  width: 100%;
  border-collapse: collapse;
}

.hours-table th,
.hours-table td {
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid #e0e0e0;
  text-align: left;
}

.hours-table td {
  text-align: right;
}

.contact-btn {
  width: 200px;
  /* Môžeš pridať margin top: */
  margin-top: 1rem;
}
</style>
