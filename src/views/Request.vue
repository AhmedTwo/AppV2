<script setup>
import ImagesLogo from '../assets/images/logo_portal_job.png'
</script>

<template>
  <div class="main-content">
    <h1>TOUTES LES DEMANDES</h1>

    <div class="cards-container">
      <!-- Exemple de demande utilisateur -->
      <div class="card">
        <div class="card-header">
          <div class="user-photo">
            <img :src="ImagesLogo" alt="Photo Utilisateur" />
          </div>
          <h2 class="user-name">Julien Dupont</h2>
        </div>

        <div class="card-content">
          <p><strong>Titre :</strong> Demande de stage</p>
          <p><strong>Description :</strong> Recherche un stage en développement web pour 6 mois.</p>
          <p><strong>Type :</strong> Stage</p>
          <p><strong>Statut :</strong> En attente</p>
          <p><strong>Date de création :</strong> 15/10/2025</p>
        </div>

        <div class="card-actions">
          <button type="button" class="btn-delete" title="Supprimer cette demande">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              class="bi bi-trash-fill"
            >
              <path
                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
              />
            </svg>
          </button>

          <div class="card-actions">
            <button type="button" class="btn-toggle" title="Changer le statut">
              <!-- Icône de validation -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Exemple de demande entreprise -->
      <div class="card">
        <div class="card-header">
          <div class="user-photo">
            <img :src="ImagesLogo" alt="Logo Entreprise" />
          </div>
          <h2 class="user-name">TechNova</h2>
        </div>

        <div class="card-content">
          <p><strong>Titre :</strong> Recrutement développeur</p>
          <p>
            <strong>Description :</strong> Recherche un développeur fullstack pour renforcer
            l'équipe.
          </p>
          <p><strong>Type :</strong> CDI</p>
          <p><strong>Statut :</strong> En cours</p>
          <p><strong>Date de création :</strong> 20/10/2025</p>
        </div>

        <div class="card-actions">
          <button type="button" class="btn-delete" title="Supprimer cette demande">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              class="bi bi-trash-fill"
            >
              <path
                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"
              />
            </svg>
          </button>

          <div class="card-actions">
            <button type="button" class="btn-toggle" title="Changer le statut">
              <!-- Icône de validation -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-content {
  padding: 2rem 1rem;
  min-height: calc(100vh - 80px);
}

h1 {
  text-align: center;
  color: #111;
  font-size: 2rem;
  margin-bottom: 2rem;
}

/* ==============================
   Container des cards
============================== */
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

/* ==============================
   Card
============================== */
.card {
  background-color: var(--colorgray);
  border-radius: 40px;
  box-shadow: 0 4px 10px rgb(102, 216, 245);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 10px rgb(10, 10, 245);
}

/* ==============================
   Card Header: Photo + Nom
============================== */
.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 1rem;
}

.user-photo img,
.no-photo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
}

.user-photo img {
  border: 2px solid var(--primary);
  background-color: #e9ecef;
}

.no-photo {
  background-color: #dee2e6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-weight: 600;
  font-size: 1.1rem;
}

.user-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary-dark);
  margin: 0;
}

/* ==============================
   Card Content
============================== */
.card-content p {
  margin: 6px 0;
  font-size: 0.95rem;
  color: #333;
}

.card-content strong {
  color: #000;
}

/* ==============================
   Card Actions
============================== */
.card-actions {
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

/* ==============================
   Boutons Supprimer & Toggle
============================== */
.btn-delete,
.btn-toggle {
  border: none;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 20%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}

/* Supprimer */
.btn-delete {
  color: red;
}
.btn-delete:hover {
  color: red;
  transform: scale(1.5);
}

/* Toggle statut */
.btn-toggle {
  color: green;
}
.btn-toggle:hover {
  color: green;
  transform: scale(1.5);
}

/* ==============================
   Responsive
============================== */

/* Tablettes */
@media (max-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;
  }
  h1 {
    font-size: 1.8rem;
  }
}

/* Mobiles */
@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .card {
    padding: 1rem;
  }
  .card-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .card-actions {
    justify-content: center;
  }
  .btn-add-request {
    width: 100%;
    justify-content: center;
  }
  h1 {
    font-size: 1.5rem;
  }
}
</style>
