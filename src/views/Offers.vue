<script setup>
import ImagesLogo from '../assets/images/imagePortal.png'
</script>

<template>
  <main>
    <h1>TOUTES LES OFFRES !</h1>
    <p class="p">Découvre toutes nos opportunités publiées</p>

    <!-- Exemple d’offres statiques -->

    <!-- Offre 1 -->
    <div class="offer-row">
      <!-- Carte gauche -->
      <div class="offer-card">
        <a href="offers/OffersCompany" style="text-decoration: none; text-align: center">
          <h3>LOGO SOCIÉTÉ</h3>
          <img :src="ImagesLogo" alt="Offres n°" />
        </a>
        <a href="/accueil/apply" class="apply-btn"> Postuler à l'offre </a>
      </div>

      <!-- Bouton favoris -->
      <div>
        <a href="favoris/add/1" class="btn-heart">
          <span style="font-size: 35px">♡</span>
        </a>
      </div>

      <!-- Détails droite -->
      <div class="offer-details">
        <h3>Détails de l'offre</h3>
        <div class="detail-item">
          <strong>Description :</strong> Développement d'une application web
        </div>
        <div class="detail-item">
          <strong>Mission :</strong> Développer des fonctionnalités front-end
        </div>
        <div class="detail-item"><strong>Société :</strong> Entreprise Alpha</div>
        <div class="detail-item"><strong>Lieu :</strong> Paris</div>
        <div class="detail-item"><strong>Poste :</strong> Développeur Web</div>
        <div class="detail-item"><strong>Postulants :</strong> 12</div>
        <div class="detail-item"><strong>Avantages :</strong> Télétravail, tickets restaurant</div>
        <div class="detail-item"><strong>Publié le :</strong> 23/10/2025</div>
      </div>
    </div>

    <!-- Offre 2 -->
    <div class="offer-row">
      <div class="offer-card">
        <a href="offers/OffersCompany" style="text-decoration: none; text-align: center">
          <h3>LOGO SOCIÉTÉ</h3>
          <img :src="ImagesLogo" alt="Offres n°" />
        </a>
        <a href="/accueil/apply" class="apply-btn"> Postuler à l'offre </a>
      </div>
      <div>
        <a href="favoris/add/2" class="btn-heart">
          <span style="font-size: 35px">♡</span>
        </a>
      </div>
      <div class="offer-details">
        <h3>Détails de l'offre</h3>
        <div class="detail-item"><strong>Description :</strong> Gestion de projets IT</div>
        <div class="detail-item"><strong>Mission :</strong> Planifier et suivre les projets</div>
        <div class="detail-item"><strong>Société :</strong> Entreprise Beta</div>
        <div class="detail-item"><strong>Lieu :</strong> Lyon</div>
        <div class="detail-item"><strong>Poste :</strong> Chef de projet</div>
        <div class="detail-item"><strong>Postulants :</strong> 5</div>
        <div class="detail-item"><strong>Avantages :</strong> Mutuelle, prime annuelle</div>
        <div class="detail-item"><strong>Publié le :</strong> 21/10/2025</div>
      </div>
    </div>

    <!-- Offre 3 -->
    <div class="offer-row">
      <div class="offer-card">
        <a href="offers/OffersCompany" style="text-decoration: none; text-align: center">
          <h3>LOGO SOCIÉTÉ</h3>
          <img :src="ImagesLogo" alt="Offres n°" />
        </a>
        <a href="/accueil/apply" class="apply-btn"> Postuler à l'offre </a>
      </div>
      <div>
        <a href="favoris/add/3" class="btn-heart">
          <span style="font-size: 35px">♡</span>
        </a>
      </div>
      <div class="offer-details">
        <h3>Détails de l'offre</h3>
        <div class="detail-item"><strong>Description :</strong> Analyse de données</div>
        <div class="detail-item"><strong>Mission :</strong> Créer des tableaux de bord</div>
        <div class="detail-item"><strong>Société :</strong> Entreprise Gamma</div>
        <div class="detail-item"><strong>Lieu :</strong> Marseille</div>
        <div class="detail-item"><strong>Poste :</strong> Data Analyst</div>
        <div class="detail-item"><strong>Postulants :</strong> 8</div>
        <div class="detail-item">
          <strong>Avantages :</strong> Télétravail partiel, tickets resto
        </div>
        <div class="detail-item"><strong>Publié le :</strong> 20/10/2025</div>
      </div>
    </div>

    <!-- Offre 4 -->
    <div class="offer-row">
      <div class="offer-card">
        <a href="offers/OffersCompany" style="text-decoration: none; text-align: center">
          <h3>LOGO SOCIÉTÉ</h3>
          <img :src="ImagesLogo" alt="Offres n°" />
        </a>
        <a href="/accueil/apply" class="apply-btn"> Postuler à l'offre </a>
      </div>
      <div>
        <a href="favoris/add/4" class="btn-heart">
          <span style="font-size: 35px">♡</span>
        </a>
      </div>
      <div class="offer-details">
        <h3>Détails de l'offre</h3>
        <div class="detail-item"><strong>Description :</strong> Marketing digital</div>
        <div class="detail-item"><strong>Mission :</strong> Gérer campagnes publicitaires</div>
        <div class="detail-item"><strong>Société :</strong> Entreprise Delta</div>
        <div class="detail-item"><strong>Lieu :</strong> Lille</div>
        <div class="detail-item"><strong>Poste :</strong> Responsable Marketing</div>
        <div class="detail-item"><strong>Postulants :</strong> 6</div>
        <div class="detail-item"><strong>Avantages :</strong> Tickets resto, mutuelle</div>
        <div class="detail-item"><strong>Publié le :</strong> 18/10/2025</div>
      </div>
    </div>

    <!-- Offre 5 -->
    <div class="offer-row">
      <div class="offer-card">
        <a href="offers/OffersCompany" style="text-decoration: none; text-align: center">
          <h3>LOGO SOCIÉTÉ</h3>
          <img :src="ImagesLogo" alt="Offres n°" />
        </a>
        <a href="/accueil/apply" class="apply-btn"> Postuler à l'offre </a>
      </div>
      <div>
        <a href="favoris/add/5" class="btn-heart">
          <span style="font-size: 35px">♡</span>
        </a>
      </div>
      <div class="offer-details">
        <h3>Détails de l'offre</h3>
        <div class="detail-item"><strong>Description :</strong> Support client</div>
        <div class="detail-item"><strong>Mission :</strong> Assister les utilisateurs</div>
        <div class="detail-item"><strong>Société :</strong> Entreprise Epsilon</div>
        <div class="detail-item"><strong>Lieu :</strong> Toulouse</div>
        <div class="detail-item"><strong>Poste :</strong> Support Client</div>
        <div class="detail-item"><strong>Postulants :</strong> 10</div>
        <div class="detail-item"><strong>Avantages :</strong> Prime, mutuelle</div>
        <div class="detail-item"><strong>Publié le :</strong> 15/10/2025</div>
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
