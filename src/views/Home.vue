<script setup>
import ImagesLogo from '../assets/images/imagePortal.png'
</script>

<template>
  <main>
    <h1>LES 3 OFFRES LES PLUS RECENTES</h1>
    <p class="p">Découvrez les dernières opportunités publiées</p>

    <!-- Boucle des offres (le PHP a été retiré) -->
    <div class="offer-row">
      <!-- Carte de l'offre (à gauche) -->
      <div class="offer-card">
        <h3>IMAGE OFFRE</h3>
        <img :src="ImagesLogo" alt="Image offre" />

        <div class="apply-section">
          <a href="/Home/apply" class="apply-btn" title="Voir les détails">
            Postuler à l'offre
          </a>
        </div>
      </div>

      <!-- Détails de l'offre (à droite de l'écran) -->
      <div class="offer-details">
        <h3>Détails de l'offre</h3>
        <div class="detail-item">
          <strong>Description :</strong> Exemple de description de l'offre
        </div>

        <div class="detail-item"><strong>Mission :</strong> Exemple de mission</div>
        <div class="detail-item"><strong>Société :</strong> Nom de la société</div>
        <div class="detail-item"><strong>Lieu :</strong> Ville, pays</div>
        <div class="detail-item"><strong>Poste :</strong> Type de poste</div>
        <div class="detail-item"><strong>Postulants :</strong> 12</div>
        <div class="detail-item"><strong>Avantages :</strong> Tickets restaurant, télétravail</div>
        <div class="detail-item"><strong>Publié le :</strong> 23/10/2025</div>
      </div>
    </div>

    <!-- Exemple de deuxième offre -->
    <div class="offer-row">
      <div class="offer-card">
        <h3>IMAGE OFFRE</h3>
        <img :src="ImagesLogo" alt="Image offre" />
        <div class="apply-section">
          <a href="/home/apply" class="apply-btn" title="Voir les détails">
            Postuler à l'offre
          </a>
        </div>
      </div>

      <div class="offer-details">
        <h3>Détails de l'offre</h3>

        <div class="detail-item"><strong>Description :</strong> Exemple de description</div>
        <div class="detail-item"><strong>Mission :</strong> Exemple de mission</div>
        <div class="detail-item"><strong>Société :</strong> Entreprise XYZ</div>
        <div class="detail-item"><strong>Lieu :</strong> Paris</div>
        <div class="detail-item"><strong>Poste :</strong> Développeur Web</div>
        <div class="detail-item"><strong>Postulants :</strong> 8</div>
        <div class="detail-item"><strong>Avantages :</strong> Mutuelle, 13e mois</div>
        <div class="detail-item"><strong>Publié le :</strong> 20/10/2025</div>
      </div>
    </div>

    <!-- Exemple de troisieme offre -->
    <div class="offer-row">
      <div class="offer-card">
        <h3>IMAGE OFFRE</h3>
        <img :src="ImagesLogo" alt="Image offre" />
        <div class="apply-section">
          <a href="/home/apply" class="apply-btn" title="Voir les détails">
            Postuler à l'offre
          </a>
        </div>
      </div>

      <div class="offer-details">
        <h3>Détails de l'offre</h3>

        <div class="detail-item"><strong>Description :</strong> Exemple de description</div>
        <div class="detail-item"><strong>Mission :</strong> Exemple de mission</div>
        <div class="detail-item"><strong>Société :</strong> Entreprise XYZ</div>
        <div class="detail-item"><strong>Lieu :</strong> Paris</div>
        <div class="detail-item"><strong>Poste :</strong> Développeur Web</div>
        <div class="detail-item"><strong>Postulants :</strong> 8</div>
        <div class="detail-item"><strong>Avantages :</strong> Mutuelle, 13e mois</div>
        <div class="detail-item"><strong>Publié le :</strong> 20/10/2025</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  flex: 1; /* Remplit l'espace avant le footer */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Titres */
h1 {
  text-align: center;
  margin-top: 40px;
  color: black;
  font-size: 2.3rem;
}

.p {
  text-align: center;
  color: blue;
  margin-bottom: 30px;
  font-size: 1rem;
  font-weight: 500;
}

/* Container des offres */
.offer-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  margin: 0 15px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 10px 8px 18px rgba(0, 0, 0, 0.575); /* comme si il flotte */
  transition: transform 0.5s;
  overflow-y: auto; /* scroll si contenu trop long */
  max-height: 400px; /* limite la longueur des blocs */
  width: 65%;
}

.offer-row:hover {
  transform: translateY(-3px);
}

/* Carte de l'offre */
.offer-card {
  flex: 1 1 200px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  height: 100%;
}

.offer-card img {
  width: 100%;
  border-radius: 6px;
  margin-bottom: 10px;
  object-fit: cover;
  height: 120px;
}

.apply-section {
  margin-top: auto;
}

.apply-btn {
  display: inline-block;
  padding: 8px 16px;
  background-color: #3498db;
  color: #fff;
  border-radius: 50px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition:
    background-color 0.25s,
    transform 0.2s;
}

.apply-btn:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

/* Détails de l'offre */
.offer-details {
  display: flex;
  flex-direction: column; /* empile verticalement les informations */
  flex: 2 1 300px; /* prend plus d'espace que l'image */
  padding: 15px;
  gap: 6px; /* espace entre chaque detail-item */
}

.offer-details h3 {
  margin-top: 0;
  color: black;
  font-size: 1.1rem;
  text-align: center;
}

/* Chaque ligne de détail */
.detail-item {
  font-size: 0.9rem;
  line-height: 1.4;
  color: #2c3e50;
}

.detail-item strong {
  color: black;
}

/* Responsive */
@media (max-width: 900px) {
  .offer-row {
    flex-direction: column;
    align-items: center;
  }

  .offer-details,
  .offer-card {
    width: 90%;
    max-height: none; /* plus besoin de limiter sur mobile */
  }
}

/* Pour éviter que le footer chevauche le contenu */
body::after {
  content: '';
  display: block;
  height: 80px; /* hauteur approximative du footer */
}
</style>
