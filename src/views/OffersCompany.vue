<script setup>
import ImagesLogo from '../assets/images/imagePortal.png'
</script>

<template>
  <div class="container">
    <br /><br /><br /><br /><br />

    <h1>↓ DETAILS DE LA SOCIETEE ↓</h1>

    <table id="datatable" class="display">
      <thead>
        <tr>
          <th>COMPAGNIE</th>
          <th>NAME</th>
          <th>NB EMPLOYE</th>
          <th>DOMAINE</th>
          <th>ADRESSE</th>
          <th>DESCRIPTION</th>
          <th>NOMBRE D'OFFRE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img :src="ImagesLogo" width="100" />
          </td>
          <td>Exemple SARL</td>
          <td>25</td>
          <td>Informatique</td>
          <td>123 Rue du Code, Paris</td>
          <td>Entreprise spécialisée dans le développement web.</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>

    <h1>↓ OFFRES DE LA SOCIETEE ↓</h1>

    <table id="idTable" class="display">
      <thead>
        <tr>
          <th>TITRE</th>
          <th>CONTRAT</th>
          <th>IMAGE</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Développeur Web</td>
          <td>CDI</td>
          <td>
            <img :src="ImagesLogo" width="200" alt="Image de l'offre" />
          </td>
          <td>
            <a href="/offers/offerDetails" title="Voir les détails"> Voir détail </a>
          </td>
        </tr>
        <tr>
          <td>Stagiaire Front-End</td>
          <td>Stage</td>
          <td>
            <img :src="ImagesLogo" width="200" alt="Image de l'offre" />
          </td>
          <td>
            <a href="/offers/offerDetails" title="Voir les détails"> Voir détail </a>
          </td>
        </tr>
        <tr>
          <td>Chef de projet</td>
          <td>CDD</td>
          <td>
            <img :src="ImagesLogo" width="200" alt="Image de l'offre" />
          </td>
          <td>
            <a href="/offers/offerDetails" title="Voir les détails"> Voir détail </a>
          </td>
        </tr>
      </tbody>
    </table>

    <h1>COMPAGNIE SANS OFFRE !</h1>
  </div>
</template>

<style scoped>
/* Container */
.container {
  width: 90%;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* Titres */
.container h1 {
  text-align: center;
  margin: 30px 0;
  font-size: 24px;
  color: #333;
}

/* Message sans offre */
.container h1:last-of-type {
  color: #c00;
}

/* Tableaux */
table.display {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: #fff;
  border: 1px solid #ccc;
}

/* En-tête */
table.display thead {
  background: #0073e6;
  color: #fff;
}

table.display th,
table.display td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
}

/* Lignes au survol */
table.display tbody tr:hover {
  background: #f1f7ff;
}

/* Images */
table.display img {
  border-radius: 4px;
  max-width: 100px;
}

/* Liens */
a {
  color: black;
}

a:hover {
  text-decoration: underline;
}

/* responsive fait par chat gpt car je ne connais et comprends pas */

@media (max-width: 1024px) {
  table.display th,
  table.display td {
    font-size: 13px;
    padding: 8px;
  }

  table.display img {
    max-width: 80px;
  }
}

@media (max-width: 768px) {
  table.display {
    font-size: 12px;
  }

  table.display th,
  table.display td {
    padding: 6px;
  }

  .container h1 {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .container {
    width: 95%;
    padding: 10px;
  }

  table.display th,
  table.display td {
    padding: 4px;
    font-size: 11px;
  }

  table.display img {
    max-width: 60px;
  }

  .container h1 {
    font-size: 18px;
  }
}
</style>
