<script setup>
import ImagesLogo from '../assets/images/imagePortal.png'
</script>

<template>
  <div class="profil-container">
    <img
      class="profil-photo"
      :src="ImagesLogo"
      accept=".jpg, .png"
      alt="Photo de profil"
      width="300px"
    />
    <a href="/profil/updateProfil">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-pencil-square"
        viewBox="0 0 16 16"
      >
        <path
          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
        />
        <path
          fill-rule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
        />
      </svg>
    </a>

    <div class="profil-info">
      <h3>Julien Dupont</h3>
      <p><span>Email :</span> julien.dupont@example.com</p>
      <p><span>Téléphone :</span> 06 12 34 56 78</p>
      <p><span>Ville :</span> Lyon (69003)</p>
      <p>
        <span>CV :</span>
        <a href="#" target="_blank">Voir le CV</a>
      </p>
      <p><span>Qualification :</span> Ingénieur logiciel</p>
      <p><span>Disponible :</span> Oui</p>
      <p><span>Rôle :</span> client</p>
    </div>
  </div>
</template>

<style scoped>
/* Container */
.profil-container {
  background-color: #110f0f3a;
  border-radius: 20px;
  padding: 2rem 2rem;
  max-width: 30%;
  margin: auto;
  margin-top: 2%;
  margin-bottom: 2%;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  transition: transform 0.3s ease;
}

.profil-container:hover {
  transform: translateY(-5px);
}

/* Image profil */
.profil-photo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #fff;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}
.profil-photo:hover {
  transform: scale(1.05);
}

/* Infos */
.profil-info h3 {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #222;
}

.profil-info p {
  font-size: 1.05rem;
  margin: 0.5rem 0;
  color: #555;
  line-height: 1.6;
}

.profil-info span {
  font-weight: 600;
  color: #0d6efd;
}

/* Lien CV */
.profil-info a {
  display: inline-block;
  margin-top: 1rem;
  color: #0d6efd;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
  text-decoration: underline;
}
.profil-info a:hover {
  color: #0a58ca;
}

/* Bouton Modifier */
.profil-actions {
  margin-top: 2rem;
}
.btn-edit-profil {
  background: linear-gradient(135deg, #0d6efd, #0a58ca);
  color: #fff;
  padding: 10px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
}
.btn-edit-profil:hover {
  background: linear-gradient(135deg, #0a58ca, #0942a1);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(13, 110, 253, 0.45);
}

/* responsive fait par chat gpt car je ne connais et comprends pas */

@media (max-width: 1024px) {
  .profil-container {
    padding: 1.5rem 1.5rem;
  }

  .profil-photo {
    width: 140px;
    height: 140px;
  }

  .profil-info h3 {
    font-size: 1.4rem;
  }

  .profil-info p {
    font-size: 1rem;
  }

  .btn-edit-profil {
    padding: 8px 20px;
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .profil-container {
    width: 90%;
    margin-top: 4%;
    padding: 1.2rem 1.2rem;
  }

  .profil-photo {
    width: 120px;
    height: 120px;
  }

  .profil-info h3 {
    font-size: 1.3rem;
  }

  .profil-info p {
    font-size: 0.95rem;
  }

  .btn-edit-profil {
    width: 100%;
    padding: 10px 0;
  }
}

@media (max-width: 480px) {
  .profil-container {
    padding: 1rem;
  }

  .profil-photo {
    width: 100px;
    height: 100px;
  }

  .profil-info h3 {
    font-size: 1.1rem;
  }

  .profil-info p {
    font-size: 0.9rem;
  }

  .btn-edit-profil {
    font-size: 0.9rem;
    padding: 8px 0;
  }
}
</style>
