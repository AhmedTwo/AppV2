<script setup>
import ImagesLogo from '../assets/images/logo_portal_job.png'
</script>

<template>
  <main>
    <h1>MES OFFRES FAVORIS</h1>
    <br />

    <!-- Cas où il n'y a aucun favori
    <p class="if_no_favoris">Vous n'avez aucun favori pour le moment.</p>
    <p class="if_no_favoris">
      Ajoute-en depuis la page : <strong><a href="/offers">offers</a></strong> en cliquant ici !
    </p> -->

    <!-- Exemple de favori -->
    <div class="offer-row">
      <!-- Carte gauche -->
      <div class="offer-card">
        <a href="offers/offerCompany">
          <img :src="ImagesLogo" alt="LOGO TECHNOVA" />
        </a>
        <a href="/accueil/apply" class="apply-btn">Postuler à l'offre</a>
      </div>

      <!-- Bouton favoris -->
      <div>
        <a href="favoris" class="btn-heart active">
          <span style="font-size: 20px">❤️</span>
        </a>
      </div>

      <!-- Détails droite -->
      <div class="offer-details">
        <h3>Détails de l'offre</h3>
        <div class="detail-item">
          <strong>Description :</strong> Développement Frontend pour applications web.
        </div>
        <div class="detail-item"><strong>Mission :</strong> Créer des interfaces interactives.</div>
        <div class="detail-item"><strong>Société :</strong> TechNova</div>
        <div class="detail-item"><strong>Lieu :</strong> Paris</div>
        <div class="detail-item"><strong>Poste :</strong> Développeur Frontend</div>
        <div class="detail-item"><strong>Postulants :</strong> 5</div>
        <div class="detail-item"><strong>Avantages :</strong> Tickets restaurant, mutuelle</div>
        <div class="detail-item"><strong>Publié le :</strong> 20/10/2025</div>
      </div>
    </div>

    <!-- Exemple 2 -->
    <div class="offer-row">
      <div class="offer-card">
        <a href="offers/offerCompany">
          <img :src="ImagesLogo" alt="LOGO GreenWorks" />
        </a>
        <a href="/accueil/apply" class="apply-btn">Postuler à l'offre</a>
      </div>
      <div>
        <a href="favoris" class="btn-heart">
          <span style="font-size: 35px">♡</span>
        </a>
      </div>
      <div class="offer-details">
        <h3>Détails de l'offre</h3>
        <div class="detail-item">
          <strong>Description :</strong> Projet en énergies renouvelables.
        </div>
        <div class="detail-item">
          <strong>Mission :</strong> Superviser les installations solaires.
        </div>
        <div class="detail-item"><strong>Société :</strong> GreenWorks</div>
        <div class="detail-item"><strong>Lieu :</strong> Lyon</div>
        <div class="detail-item"><strong>Poste :</strong> Chef de projet</div>
        <div class="detail-item"><strong>Postulants :</strong> 3</div>
        <div class="detail-item"><strong>Avantages :</strong> Télétravail, bonus annuel</div>
        <div class="detail-item"><strong>Publié le :</strong> 18/10/2025</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
}
/* Titres */
h1 {
  text-align: center;
  color: black;
  font-size: 2.3rem;
  margin-bottom: 10px;
  margin-top: 2%;
}

.p {
  text-align: center;
  color: #007bff;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 40px;
}

/* p de favoris */
.if_no_favoris {
  margin-top: 3%;
  text-align: center;
  color: red;
  font-size: 30px;
}

strong a {
  color: blue;
  font-size: 40px;
}
/* p de favoris */

/* Bouton Ajouter une offre */
.admin-add-offer {
  margin-bottom: 25px;
}

.admin-add-offer a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: 2px solid #007bff;
  color: #007bff;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.admin-add-offer a:hover {
  background-color: #007bff;
  color: white;
}

.admin-add-offer svg {
  transition: 0.3s ease;
}

.admin-add-offer:hover svg {
  transform: rotate(90deg);
}

/* Conteneur principal de chaque offre */
.offer-row {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: flex-start;
  gap: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 10px 8px 18px rgba(0, 0, 0, 0.2);
  margin: 0 15px 35px;
  width: 70%;
  transition: transform 0.3s ease;
}

.offer-row:hover {
  transform: translateY(-3px);
}

/* Bloc gauche : image + bouton postuler */
.offer-card {
  flex: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  justify-content: space-between;
}

/* Supprimer les limites de hauteur */
.offer-card img {
  margin-bottom: 2%;
  width: 100%;
  height: 130px;
  border-radius: 8px;
  object-fit: cover;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.26);
}

.offer-card img:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.774);
}

/* Bouton postuler */
.apply-btn {
  display: inline-block;
  padding: 8px 18px;
  background-color: #3498db;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.25s ease;
}

.apply-btn:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

/* Détails droite */
.offer-details {
  flex: 2 1 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 8px;
  overflow-y: auto;
  max-height: 210px;
}

.offer-details h3 {
  color: black;
  margin-top: 0;
  font-size: 1.2rem;
}

/* Détails individuels */
.detail-item {
  font-size: 0.95rem;
  color: #2c3e50;
  line-height: 1.5;
}

.detail-item strong {
  color: black;
}

/* Bouton cœur (favoris) */
.btn-heart {
  text-decoration: none;
  color: #ccc;
  margin-right: 10px;
}

.btn-details {
  display: inline-block;
  margin: 5px;
  padding: 10px 12px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  background-color: #0d6efd;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-details:hover {
  background-color: #084298;
}

/* Responsive */
@media (max-width: 900px) {
  .offer-row {
    flex-direction: column;
    align-items: center;
    width: 90%;
  }

  .offer-card,
  .offer-details {
    width: 100%;
    max-height: none;
  }

  .offer-card img {
    height: 180px;
  }
}
</style>
