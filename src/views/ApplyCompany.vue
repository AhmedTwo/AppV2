<script setup></script>

<template>
  <div id="containerFirst">
    <div id="containerSecond">
      <h1 class="h1AddCompany">AJOUT D'UNE NOUVELLE SOCIÉTÉ !</h1>

      <!-- Utiliser une URL absolue avec un / au début
    garantit que le POST sera envoyé à la bonne route, et donc que ce bloc sera bien déclenché  -->
      <form
        id="addCompanyForm"
        method="POST"
        action="/connexion/applyCompany"
        onsubmit="return validerSiret()"
      >
        <div class="divAdd">
          <label for="inputNom">NOM DE LA SOCIÉTÉ</label>
          <input type="text" id="inputNom" name="inputNom" required />
        </div>
        <div class="divAdd">
          <label for="inputNbEmploye">NOMBRE EMPLOYEES</label>
          <input type="text" id="inputNbEmploye" name="inputNbEmploye" required />
        </div>
        <div class="divAdd">
          <label for="inputDomaine">DOMAINE</label>
          <input type="text" id="inputDomaine" name="inputDomaine" required />
        </div>
        <div class="divAdd">
          <label for="inputAdresse">ADRESSE POSTALE</label>
          <input type="text" id="inputAdresse" name="inputAdresse" required />
        </div>
        <div class="divAdd">
          <label for="inputLatitutde">LATITUDE</label>
          <input type="text" id="inputLatitutde" name="inputLatitutde" required />
        </div>
        <div class="divAdd">
          <label for="inputLongitude">LONGITUDE</label>
          <input type="text" id="inputLongitude" name="inputLongitude" required />
        </div>
        <div class="divAdd">
          <label for="inputDescription">DESCRIPTIF</label>
          <input type="text" id="inputDescription" name="inputDescription" required />
        </div>
        <div class="divAdd">
          <label for="inputEmail">EMAIL</label>
          <input type="email" id="inputEmail" name="inputEmail" required />
        </div>
        <div class="divAdd">
          <!-- inputmode="numeric" → pavé numérique sur smartphone
                 pattern="\d{14}" → exactement 14 chiffres
                 maxlength="14" → limite de saisie -->
          <label for="inputSiret">N_SIRET</label>
          <input
            type="text"
            id="inputSiret"
            name="inputSiret"
            inputmode="numeric"
            pattern="\d{14}"
            maxlength="14"
            required
          />
        </div>

        <div class="divAdd">
          <label for="inputLogo">LIEN DU LOGO</label>
          <input type="text" id="inputLogo" name="inputLogo" required />
        </div>

        <div class="divAdd">
          <label for="inputLogo">NOM</label>
          <input type="text" id="inputFirstName" name="inputFirstName" required />
        </div>

        <div class="divAdd">
          <label for="inputLogo">PRENOM</label>
          <input type="text" id="inputLastName" name="inputLastName" required />
        </div>

        <div class="divAdd">
          <label for="telephone">TELEPHONE</label>
          <input type="text" id="telephone" name="inputTelephone" required />
        </div>

        <div class="divAdd">
          <label for="ville">VILLE</label>
          <input type="text" id="ville" name="inputVille" required />
        </div>

        <div class="divAdd">
          <label for="zipcode">CODE POSTAL</label>
          <input type="text" id="zipcode" name="inputZipcode" required />
        </div>

        <div class="divAdd">
          <label for="photo">PHOTO DE PROFIL :</label>
          <input type="file" id="photo" name="inputPhoto" accept=".pdf, .jpg, .png" required />
        </div>

        <button
          type="submit"
          class="btn"
          onclick="return confirm('Es-tu sûr de vouloir envoyer cette société à Admin ?')"
          title="Envoyer"
        >
          ENVOYER
        </button>
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

/* Formulaire */
#containerSecond {
  background-color: #ffffff;
  padding: 1rem 1.5rem;
  border: 1px solid black;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.637);
  width: 60%; /*  élargi à 60% pour 2 colonnes */
  max-width: 800px; /*  plus grand max */
  margin-top: 3%;
}

/* Titre */
.h1AddCompany {
  text-align: center;
  font-size: 2rem;
  color: black;
  margin-bottom: 2rem;
}

#addCompanyForm {
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

/* 🟢Les éléments qui doivent prendre toute la largeur */
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
</style>
