<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import ImagesLogo from './assets/images/logo_portal_job.png'
import HeaderFull from './views/Header.vue' // Header complet pour les autres pages

const route = useRoute()

// Pages où on affiche le header simple / NON connecté
const isSimpleHeader = computed(() => {
  return ['homepage', 'connexion', 'inscription', 'motDePasse', 'ajoutSociete'].includes(route.name)
})
</script>

<template>
  <!-- Header simplifié pour certaines pages -->
  <header v-if="isSimpleHeader" id="headerOne">
    <nav id="navOne">
      <div class="nav-left">
        <a href="/" class="logo"> <img :src="ImagesLogo" alt="fond logo portal job" /> </a>
      </div>
      <div class="nav-right">
        <div class="user-info">
          <a href="/SignIn"> <button class="sign_in">CONNEXION</button> </a>
          <a href="/SignUp/addUser/"> <button class="sign_up">INSCRIPTION</button> </a>
        </div>
      </div>
    </nav>
  </header>

  <!-- Header complet pour toutes les autres pages / connecté -->
  <HeaderFull v-else />

  <main>
    <RouterView />
  </main>

  <footer>
    <p>&copy; 2025 - Tous droits réservés</p>
  </footer>
</template>

<style scoped>
.logo img {
  width: 250px;
}
</style>
