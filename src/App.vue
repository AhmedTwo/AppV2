<script setup>
import { computed, onMounted } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <header id="headerOne">
    <nav id="navOne">
      <div class="nav-left">
        <a href="/" class="logo"> </a>
      </div>

      <div class="nav-right">
        <div class="user-info">
          <a class="<?= $activePage === 'connexion' ? 'active' : '' ?>" href="/connexion">
            <button class="sign_in">CONNEXION</button>
          </a>
          <a
            class="<?= $activePage === 'inscription' ? 'active' : '' ?>"
            href="/inscription/addUser/"
          >
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

<style></style>
