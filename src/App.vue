<script setup>
import { computed, onMounted } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import ImagesLogo from './assets/images/logo_portal_job.png'

const router = useRouter()
</script>

<template>
  <header id="headerOne">
    <nav id="navOne">
      <div class="nav-left">
        <a href="/" class="logo">
          <img :src="ImagesLogo" alt="fond logo portal job" />
        </a>
      </div>

      <div class="nav-right">
        <div class="user-info">
          <a href="/connexion">
            <button class="sign_in">CONNEXION</button>
          </a>
          <a href="/inscription/addUser/">
            <button class="sign_up">INSCRIPTION</button>
          </a>
        </div>
      </div>
    </nav>
  </header>

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
