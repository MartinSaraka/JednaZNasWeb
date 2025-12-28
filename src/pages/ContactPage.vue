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
      <img src="~/assets/contact.jpg" alt="Logo" class="logo-img" />
    </div>

    <!-- Základné info (IČO, email, atď.) -->
    <div class="info-wrapper text-center q-my-xl">
      <p class="text-body1 q-my-sm">
        Občianske Združenie JEDNA Z NÁS<br />
        IČO: 42036780
      </p>
      <p class="text-body1 q-my-sm">
        Email: <strong>jednaznasOZ@gmail.com</strong><br />
      </p>
      <!-- Voliteľne aj adresa, telefónne číslo... -->
    </div>

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
// Jednoduchá funkcia na otvorenie mailto: odkazu
function openEmail() {
  // Môžeš pridať subject a body:
  // "mailto:jednaznasOZ@gmail.com?subject=Chcem%20viac%20info&body=Ahoj..."
  window.location.href =
    'mailto:jednaznasOZ@gmail.com?subject=Pozdrav%20zo%20stranky';
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

.contact-btn {
  width: 200px;
  /* Môžeš pridať margin top: */
  margin-top: 1rem;
}
</style>
