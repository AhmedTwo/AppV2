import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Connexion from '../views/SignIn.vue'
import Inscription from '../views/SignUp.vue'
import Password from '../views/PasswordForget.vue'
import ApplyCompany from '../views/ApplyCompany.vue'
import Accueil from '../views/Home.vue'
import Apply from '../views/ApplyOffer.vue'
import Offers from '../views/Offers.vue'
import Companys from '../views/Companys.vue'
import CompanyDetails from '../views/CompanyDetails.vue'
import myRequest from '../views/MyRequest.vue'
import Request from '../views/Request.vue'
import DashboardCompany from '../views/DashboardCompany.vue'
import DashboardAdmin from '../views/DashboardAdmin.vue'
import Favoris from '../views/Favoris.vue'
import Profil from '../views/Profil.vue'
import Contact from '../views/Contact.vue'
import OffersCompany from '../views/OffersCompany.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomeView,
    },
    {
      path: '/SignIn',
      name: 'connexion',
      component: Connexion,
    },
    {
      path: '/SignUp/addUser/',
      name: 'inscription',
      component: Inscription,
    },
    {
      path: '/SignIn/passwordForget',
      name: 'motDePasse',
      component: Password,
    },
    {
      path: '/SignIn/applyCompany',
      name: 'ajoutSociete',
      component: ApplyCompany,
    },
    {
      path: '/Home',
      name: 'Accueil',
      component: Accueil,
    },
    {
      path: '/Home/apply',
      name: "Postuler à l'offre",
      component: Apply,
    },
    {
      path: '/Offers',
      name: 'Nos Offres',
      component: Offers,
    },
    {
      path: '/Companys',
      name: 'Nos Companys',
      component: Companys,
    },
    {
      path: '/Companys/CompanyDetails',
      name: 'Détails de la société',
      component: CompanyDetails,
    },
    {
      path: '/OffersCompany',
      name: 'Les Offres de La Société',
      component: OffersCompany,
    },
    {
      path: '/myRequest',
      name: 'Mes Demandes',
      component: myRequest,
    },
    {
      path: '/Request',
      name: 'Toutes les Demandes',
      component: Request,
    },
    {
      path: '/Dashboard_Company',
      name: 'Tableau de Bord Société',
      component: DashboardCompany,
    },
    {
      path: '/Dashboard_Admin',
      name: 'Tableau de Bord Administrateur',
      component: DashboardAdmin,
    },
    {
      path: '/Favoris',
      name: 'Mes Favoris',
      component: Favoris,
    },
    {
      path: '/Profil',
      name: 'Mon Profil',
      component: Profil,
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
    }
  ],
})

export default router
