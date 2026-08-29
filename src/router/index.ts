import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/dashboard', name: 'dashboard', component: () => import('../views/DashboardView.vue') },
    { path: '/hangul', name: 'hangul', component: () => import('../views/HangulView.vue') },
    { path: '/flashcard', name: 'flashcard', component: () => import('../views/FlashcardView.vue') },
    { path: '/levels', name: 'levels', component: () => import('../views/LevelSelectView.vue') },
    { path: '/grammar', name: 'grammar', component: () => import('../views/GrammarView.vue') },
    { path: '/quiz', name: 'quiz', component: () => import('../views/QuizView.vue') },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  ],
})

export default router
