<script setup>
import ImagesLogo from '../assets/images/logo_portal_job.png'
</script>

<template>
  <div class="main">
    <h1 class="title-h1">DÉTAILS DE LA SOCIÉTÉ</h1>

    <div class="table-container">
      <table id="company-table" class="table responsive-table">
        <thead>
          <tr>
            <th class="col">ID</th>
            <th class="col">Nom</th>
            <th class="col">Employés</th>
            <th class="col">Secteur</th>
            <th class="col">Adresse</th>
            <th class="col">Latitude</th>
            <th class="col">Longitude</th>
            <th class="col">Description</th>
            <th class="col">N° Siret</th>
            <th class="col">Logo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="cell-id">1</td>
            <td class="cell-name">TechNova</td>
            <td class="cell-employees">120</td>
            <td class="cell-sector">Informatique</td>
            <td class="cell-address">123 Rue de l'Innovation, 75001 Paris</td>
            <td class="cell-lat">48.8566</td>
            <td class="cell-lng">2.3522</td>
            <td class="cell-desc">
              Développement de logiciels et solutions cloud pour entreprises.
            </td>
            <td class="cell-siret">123 456 789 00012</td>
            <td class="cell-logo">
              <a href="/offers/offerCompany" class="logo-link">
                <img
                  :src="ImagesLogo"
                  alt="Logo de la compagnie"
                  class="logo-img"
                />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.main {
  max-width: 1400px; /* agrandi */
  margin: 8% auto;
  background-color: #ffffff;
  padding: 50px 40px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.06);
}

.title-h1 {
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  color: #007bff;
  margin-bottom: 50px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.table-container {
  width: 100%;
  /* overflow-x: auto; → supprimé pour éviter la barre de défilement */
}

.table {
  width: 100%;
  border-collapse: collapse; /* supprime les doubles bordures */
  table-layout: auto; /* ← clé pour alignement naturel */
  font-size: 18px;
  background-color: #fff;
}

.table thead {
  background-color: #007bff;
  color: #fff;
}

.table th,
.table td {
  padding: 16px 18px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #eee; /* ← ligne verticale à droite */
  vertical-align: top;
}

.table th:last-child,
.table td:last-child {
  border-right: none; /* ← pas de ligne après la dernière colonne */
}

.table th {
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.table td {
  color: #333;
  word-break: break-word; /* pour éviter les débordements */
}

.table tbody tr:hover {
  background-color: #f0f9f7;
}

.cell-logo {
  text-align: center;
}

.logo-img {
  width: 100px;
  max-height: 80px;
  object-fit: contain;
  border-radius: 6px;
  transition: all 0.25s ease-in-out;
}

.logo-img:hover {
  transform: scale(1.07);
  box-shadow: 0 4px 8px rgba(26, 188, 156, 0.3);
}

.logo-link {
  display: inline-block;
}

/* responsive fait par chat gpt car je ne connais et comprends pas */

@media (max-width: 768px) {
  .main {
    padding: 20px; /* réduit les marges internes */
    margin: 20px auto;
  }

  .title-h1 {
    font-size: 24px; /* titre plus petit */
    margin-bottom: 30px;
  }

  .table-container {
    overflow-x: auto; /* active scroll horizontal sur mobile */
  }

  .table {
    font-size: 14px; /* texte plus petit */
  }

  .table th,
  .table td {
    padding: 10px; /* réduit espace dans les cellules */
  }

  .logo-img {
    width: 70px;
    max-height: 60px;
  }
}
</style>
