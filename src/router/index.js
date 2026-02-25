import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import StudentPage from '../views/StudentPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import HistoryPage from '../views/HistoryPage.vue'
import ModulesPages from '../views/ModulesPages.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: HomePage 
  },
  { 
    path: '/login', 
    name: 'Login',
    component: LoginPage 
  },
  { 
    path: '/student', 
    name: 'Dashboard',
    component: StudentPage,
    meta: { requiresAuth: true }
  },
  { 
    path: '/profile', 
    name: 'Profile',
    component: ProfilePage,
    meta: { requiresAuth: true }
  },
  { 
    path: '/history', 
    name: 'History',
    component: HistoryPage,
    meta: { requiresAuth: true }
  },
  // Route dynamique pour les semestres (ex: /semestre/5)
  { 
    path: '/semestre/:id', 
    name: 'Modules',
    component: ModulesPages,
    meta: { requiresAuth: true }
  },
  // Redirection automatique si la route n'existe pas
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Permet de revenir en haut de page lors d'un changement de route
  scrollBehavior() {
    return { top: 0 }
  }
})

// Optionnel : Un garde de navigation (Navigation Guard)
// Empêche d'accéder aux pages /student ou /profile sans être passé par /login
router.beforeEach((to, from, next) => {
  const isAuthenticated = true; // Remplace par ta logique réelle (ex: vérification d'un token)

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router

