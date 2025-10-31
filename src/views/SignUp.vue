<script setup>
import ImagesPortal from '../assets/images/Portal.png'
</script>

<template>
  <div id="containerFirst">
    <div id="containerSecond">
      <h1 class="h1Add"> INSCRIPTION &nbsp;&nbsp; <img :src="ImagesPortal" alt="fond logo porte de portal job" width="35" />
      </h1>

      <form id="addForm" method="POST" action="/inscription/addUser/" enctype="multipart/form-data">
        <div class="divAdd">
          <label for="nom">Nom</label>
          <input type="text" id="nom" name="inputNom" required />
        </div>

        <div class="divAdd">
          <label for="prenom">Prénom</label>
          <input type="text" id="prenom" name="inputPrenom" required />
        </div>

        <div class="divAdd">
          <label for="email">Email</label>
          <input type="email" id="email" name="inputEmail" required />
        </div>

        <div class="divAdd">
          <label for="password">Mot de passe</label>
          <input type="password" id="password" name="inputPassword" required />
        </div>

        <div class="divAdd">
          <label for="telephone">Téléphone</label>
          <input type="text" id="telephone" name="inputTelephone" required />
        </div>

        <div class="divAdd">
          <label for="ville">Ville</label>
          <input type="text" id="ville" name="inputVille" required />
        </div>

        <div class="divAdd">
          <label for="zipcode">Code postal</label>
          <input type="text" id="zipcode" name="inputZipcode" required />
        </div>

        <div class="divAdd">
          <label for="qualification">Qualification</label>
          <input type="text" id="qualification" name="inputQualification" required />
        </div>

        <div class="divAdd">
          <label for="preference">Préférences</label>
          <input type="text" id="preference" name="inputPreference" required />
        </div>

        <div class="divAdd radio-box">
          <p>Disponibilité immédiate :</p>
          <label><input type="radio" name="choix" value="1" required /> Oui</label>
          <label><input type="radio" name="choix" value="0" required /> Non</label>
        </div>

        <div class="divAdd">
          <label for="photo">Photo de profil :</label>
          <input type="file" id="photo" name="inputPhoto" accept=".jpg, .jpeg, .png" required />
          <label for="cv">CV :</label>
          <input type="file" id="cv" name="inputCv" accept=".pdf" required />
        </div>

        <button type="submit" class="btn">S'INSCRIRE</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Conteneur principal */
#containerFirst {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 8%;
}

/* Titre */
.h1Add {
  text-align: center;
  font-size: 2rem;
  color: black;
  margin-bottom: 2rem;
}

/* Formulaire */
#containerSecond {
  background-color: #ffffff;
  padding: 1rem 1.5rem;
  border: 1px solid black;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.637);
  width: 60%; /*  élargi à 60% pour 2 colonnes */
  max-width: 800px; /*  plus grand max */
  margin-top: 4%;
}

#addForm {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
}

.divAdd {
  flex: 1 1 calc(50% - 1rem); /* 2 champs par ligne */
  display: flex;
  flex-direction: column;
}

.divAdd label {
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: black;
}

.divAdd input {
  padding: 0.5rem 0;
  border: 1px solid rgba(0, 0, 0, 0.671);
  border-radius: 5px;
}

.divAdd input:focus {
  border-color: #007bff;
  outline: none; /* ca supprime le contour du focus ajouté par le navigateur. */
}

/* Les éléments qui doivent prendre toute la largeur */
.divAdd.radio-box,
.divAdd:last-of-type,
.btn {
  flex: 1 1 100%;
}

/* Bouton */
.btn {
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 10px;
}

.btn:hover {
  background-color: var(--primary);
  color: white;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

#button:hover {
  background-color: #0056b3;
}

/* responsive fait par chat gpt car je ne connais et comprends pas */

@media (max-width: 1024px) {
  #form {
    grid-template-columns: 1fr 1fr; /* garde 2 colonnes mais plus espacées */
    gap: 1rem 1.5rem;
  }

  .container {
    padding: 2rem 3rem;
  }
}

@media (max-width: 768px) {
  #form {
    grid-template-columns: 1fr; /* 1 colonne sur tablette */
  }

  .radio-box {
    grid-column: span 1;
  }

  .btn {
    grid-column: span 1;
  }

  .container {
    padding: 2rem;
  }

  .titleH1 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1.5rem;
  }

  .titleH1 {
    font-size: 1.7rem;
  }

  .field input[type='text'],
  .field input[type='email'],
  .field input[type='password'],
  .field input[type='file'] {
    font-size: 0.95rem;
    padding: 0.6rem;
  }

  .btn {
    width: 100%;
    padding: 0.8rem;
  }
}
</style>
