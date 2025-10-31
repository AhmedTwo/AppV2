<script setup></script>

<template>
  <h1>MON TABLEAU DE BORD</h1>

  <div class="table-container">
    <h1>LES UTILISATEURS</h1>
    <table id="table-users">
      <thead>
        <tr>
          <th>ID</th>
          <th>NOM</th>
          <th>PRENOM</th>
          <th>EMAIL</th>
          <th>RÔLE</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dupont</td>
          <td>Jean</td>
          <td>jean.dupont@example.com</td>
          <td>admin</td>
          <td>
            <a href="/dashboard/updateUser/1" title="Modifier">
              <button
                type="button"
                class="btn-details"
                style="background-color: transparent; cursor: pointer"
              >
                ✏️
              </button>
            </a>
            <button
              type="button"
              class="btn-details"
              style="background-color: transparent; cursor: pointer"
            >
              🗑️
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Martin</td>
          <td>Claire</td>
          <td>claire.martin@example.com</td>
          <td>client</td>
          <td>
            <a href="/dashboard/updateUser/2" title="Modifier">
              <button
                type="button"
                class="btn-details"
                style="background-color: transparent; cursor: pointer"
              >
                ✏️
              </button>
            </a>
            <button
              type="button"
              class="btn-details"
              style="background-color: transparent; cursor: pointer"
            >
              🗑️
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="table-container">
    <h1>LES OFFRES</h1>
    <table id="table-offers">
      <thead>
        <tr>
          <th>ID</th>
          <th>TITRE</th>
          <th>ADRESSE</th>
          <th>DOMAINE</th>
          <th>DATE DE CREATION</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Développeur Frontend</td>
          <td>Paris</td>
          <td>Informatique</td>
          <td>20-Oct-2025</td>
          <td>
            <button class="btn-details" title="Détails">⋮</button>
            <button class="btn-details" title="Modifier">✏️</button>
            <button class="btn-details" title="Supprimer">🗑️</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Chef de projet</td>
          <td>Lille</td>
          <td>Management</td>
          <td>18-Oct-2025</td>
          <td>
            <button class="btn-details" title="Détails">⋮</button>
            <button class="btn-details" title="Modifier">✏️</button>
            <button class="btn-details" title="Supprimer">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="table-container">
    <h1>LES SOCIÉTÉS</h1>
    <table id="table-companies">
      <thead>
        <tr>
          <th>ID</th>
          <th>NOM</th>
          <th>ADRESSE</th>
          <th>DOMAINE</th>
          <th>N° SIRET</th>
          <th>STATUS</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>TechNova</td>
          <td>Paris</td>
          <td>Informatique</td>
          <td>123456789</td>
          <td>
            <button class="btn-toggle">Validé</button>
          </td>
          <td>
            <button class="btn-details">⋮</button>
            <button class="btn-details">✏️</button>
            <button class="btn-details">🗑️</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>GreenWorks</td>
          <td>Lyon</td>
          <td>Énergie</td>
          <td>987654321</td>
          <td>
            <button class="btn-toggle">En attente</button>
          </td>
          <td>
            <button class="btn-details">⋮</button>
            <button class="btn-details">✏️</button>
            <button class="btn-details">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* Titres */
h1 {
  margin-left: 2%;
  margin-right: 2%;
  font-size: 2rem;
  color: black;
  border-bottom: 3px solid #2980b9;
  border-top: 3px solid #2980b9;
  padding-bottom: 8px;
  font-weight: 700;
  text-align: center;
}

/* Tableaux */
table {
  width: 80%;
  max-width: 100%;
  border-collapse: collapse;
  margin: 0 auto 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}

.table-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

thead {
  background: linear-gradient(90deg, #05090c, #007bff);
  color: #fff;
}

thead th {
  padding: 14px 19px;
  text-align: left;
  font-weight: 700;
  border-bottom: 3px solid #1c6391;
  user-select: none;
}

tbody td {
  padding: 12px 20px;
  border-bottom: 1px solid #e0e0e0;
  color: #4a4a4a;
  font-size: 1rem;
  width: 12%;
}

tbody tr:hover {
  background-color: #ecf6fd;
  transition: background-color 0.3s ease;
}

.btn-toggle {
  border: 2px solid rgba(31, 31, 248, 0.89);
  border-radius: 30%;
  padding: 2%;
  margin: 5%;
  color: black;
  font-weight: bold;
  width: 100%;
}

.btn-toggle:hover {
  background-color: rgba(31, 31, 248, 0.89);
  color: white;
  transform: scale(1.08);
}

/* responsive fait par chat gpt car je ne connais et comprends pas */

@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem; /* titre plus petit */
    margin-left: 1%;
    margin-right: 1%;
  }

  table {
    width: 100%; /* table pleine largeur */
    font-size: 0.9rem; /* texte plus petit */
  }

  tbody td {
    padding: 10px 8px; /* réduit padding cellules */
  }

  button.voir-plus {
    padding: 10px 20px;
    font-size: 1rem;
    width: 100%; /* bouton prend toute la largeur */
  }

  .btn-toggle {
    width: 100%;
    padding: 8%;
    margin: 5% 0;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.3rem;
  }

  tbody td {
    font-size: 0.85rem;
    padding: 8px 6px;
  }

  button.voir-plus {
    font-size: 0.95rem;
    padding: 8px 16px;
  }
}
</style>
