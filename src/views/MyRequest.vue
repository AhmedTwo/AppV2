<script setup>
import ImagesLogo from '../assets/images/logo_portal_job.png'
</script>

<template>
  <div class="main-content">
    <h1>MES DEMANDES</h1>

    <div class="admin-add-request">
      <a href="/myRequest/addMyRequest" class="btn-outline-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-plus-square"
          viewBox="0 0 16 16"
        >
          <path
            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
          />
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
          />
        </svg>
        AJOUTER UNE DEMANDE
      </a>
    </div>

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
.btn-delete {
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

/* ==============================
   Admin Add Request Button
============================== */
.admin-add-request {
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.admin-add-request svg {
  transition: transform 0.3s;
}

.admin-add-request:hover svg {
  transform: rotate(90deg);
}

.admin-add-request .btn-outline-primary {
  background-color: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 10px 18px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.admin-add-request .btn-outline-primary:hover {
  background-color: var(--primary);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
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
