import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('../views/TempView.vue')
    }
    ,
    {
      path: '/reactivity',
      name: 'reactivity',
      component: () => import('../views/ReactivityView.vue')
    }
    ,
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/ComputedView.vue')
    }
    ,
    {
      path: '/crView',
      name: 'crView',
      component: () => import('../views/CrView.vue')
    }
    ,
    {
      path: '/listView',
      name: 'listView',
      component: () => import('../views/ListView.vue')
    }
    ,
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/EventView.vue')
    }
  ]
})

export default router
