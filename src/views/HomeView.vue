<script setup>
import ImagesLogo from '../assets/images/logo_portal_job.png'
</script>

<template>
  <main class="hero">
    <img :src="ImagesLogo" alt="fond logo portal job" class="background-logo" />
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
          <span class="stat-number">700</span>
          <span class="stat-label">Utilisateurs inscrits</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">1000</span>
          <span class="stat-label">Offres disponibles</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">500</span>
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
  margin-top: 5%;
  width: 80vw;
  height: 50vh;
  object-fit: contain;
  z-index: 1;
  opacity: 0.5; /* ajuste la transparence à mon goût */
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
  background: linear-gradient(135deg, #007bff, #7c7373);
  color: white;
  border-radius: 20px;
  padding: 5%;
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

.p-pres {
  text-align: center;
  color: black;
  font-size: 1.2rem;
}

.pres-ul {
  list-style: none;
  width: 80%;
  display: grid;
  gap: 1rem;
}

.pres-ul li {
  padding: 1.2rem 1.8rem;
  background: rgba(240, 158, 158, 0.199);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.712);
  color: black;
  text-align: center;
}
</style>
