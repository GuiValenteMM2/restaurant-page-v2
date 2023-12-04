import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue')
    },
    
    {
      path:'/signup',
      name: 'signup',

      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/cart',
      name: 'cart',

      component: () => import('../views/CartView.vue')
    },
    {
      path: '/contact',
      name: 'contact',

      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
