<script setup>
import { onMounted, ref } from 'vue';
import ImagesLogo from '../assets/images/imagePortal.png'
import axios from 'axios'

// ref est une syntaxe qui permet de dynamiser une variable pour l'afficher
const nbUser = ref([]);
const nbOffer = ref([]);
const nbCompany = ref([]);

// console.log('Je suis dans la console')

const count = async () => {
  // temps de chargement front plus rapide, avec la donnée qui arrive
  try {
    const responses = await axios.get('http://127.0.0.1:8000/api/count')
    // console.log(responses.data)
    nbUser.value = responses.data.User
    nbOffer.value = responses.data.Offer
    nbCompany.value = responses.data.Company
  } catch (err) {
    console.log(err)
  }
}

onMounted(count)
</script>

<template>
  <img :src="ImagesLogo" alt="fond logo portal job" class="background-logo" />
  <main class="hero">
    <div class="hero-content">
      <h1>Votre avenir professionnel commence ici !</h1>
      <h1></h1>
      <p>
        Explorez les opportunités dans les secteurs en forte croissance : Tech, IA, Transition
        écologique, Santé... Profitez des options en télétravail, des postes hybrides, et des CDI à
        pourvoir immédiatement.
      </p>
      <div class="stats-container">
        <div class="stat-item">
          <span class="stat-number">{{ nbUser }}</span>
          <span class="stat-label">Utilisateurs inscrits</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ nbOffer }}</span>
          <span class="stat-label">Offres disponibles</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ nbCompany }}</span>
          <span class="stat-label">Sociétés inscrites</span>
        </div>
      </div>
    </div>
  </main>

  <div class="offers-section">
    <h1>Pourquoi choisir Portal Job ?</h1>
    <p class="p-pres">Portal Job est bien plus qu’un simple site d’offres d’emploi...</p>
    <ul class="pres-ul">
      <li>✅ Accédez à des offres exclusives publiées chaque jour</li>
      <li>🚀 Profitez d’un espace personnel intuitif pour gérer vos candidatures</li>
      <li>💼 Collaborez avec des entreprises innovantes</li>
      <li>🌍 Découvrez les possibilités de télétravail</li>
    </ul>
  </div>
</template>

<style scoped>
.background-logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 99vw;
  height: 99vh;
  object-fit: cover;
  opacity: 0.1; /* ajuste la transparence à mon goût */
  z-index: 1;
  margin-top: -2%;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #7c7373, #007bff);
  color: white;
  border-radius: 20px;
  padding: 5%;
  margin-top: -1%;
}

.hero p {
  font-size: 1.3rem;
  color: black;
  margin-bottom: 2rem;
}

.stats-container {
  display: flex;
  gap: 5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: black;
}

.offers-section {
  padding: 4rem 2rem;
  background: var(--bg-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.offers-section h1 {
  font-size: 2rem;
  background: linear-gradient(135deg, #007bff, #7c7373);
  color: white;
  border-radius: 20px;
  padding: 10px 20%;
}

/* Section Présentation */
/* Titre */
.h1-pres {
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.h1-pres::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
}

/* Paragraphe */
.p-pres {
  text-align: center;
  color: black;
  font-size: 1.2rem;
  position: relative;
}

/* Liste */
.pres-ul {
  font-size: 1rem;
  width: 80%;
  display: grid;
  gap: 1rem;
}

.pres-ul li {
  padding: 1.2rem 1.8rem;
  background: rgba(240, 158, 158, 0.199);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.712);
  font-size: 1rem;
  color: black;
  text-align: center;
  list-style: none;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}

.pres-ul li:nth-child(1) {
  border-left-color: rgb(45, 226, 211);
  border-right-color: rgb(45, 226, 211);
}

.pres-ul li:nth-child(2) {
  border-left-color: rgb(20, 44, 252);
  border-right-color: rgb(20, 44, 252);
}

.pres-ul li:nth-child(3) {
  border-left-color: rgb(45, 226, 211);
  border-right-color: rgb(45, 226, 211);
}

.pres-ul li:nth-child(4) {
  border-left-color: rgb(20, 44, 252);
  border-right-color: rgb(20, 44, 252);
}
</style>
