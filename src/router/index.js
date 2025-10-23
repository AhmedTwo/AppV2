import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Connexion from '../views/SignIn.vue'
import Inscription from '../views/SignUp.vue'
import Password from '../views/passwordForget.vue'
import ApplyCompany from '../views/applyCompany.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
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
  ],
})

export default router
