import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import(/* webpackChunkName: "about" */ '../views/Articles.vue')
  },
  {
    path: '/my_articles',
    name: 'My Articles',
    component: () => import(/* webpackChunkName: "about" */ '../views/My_Articles.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/setting',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue')
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import(/* webpackChunkName: "about" */ '../views/Favorites.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
