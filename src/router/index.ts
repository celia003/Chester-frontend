import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      // path: '/',
      // name: 'home',
      // component: HomeView
      path: '/',
      name: 'Login',
      component: () => import('@/views/Login.vue'),
      meta: {
        title: 'App',
      }
    },
    {
      path: '/recover_password',
      name: 'RecoverPassword',
      component: () => import('@/views/RecoverPassword.vue'),
      meta: {
        title: 'App - Recover Password',
      }
    },
    {
      path: '/generate_password/:email?/:token?',
      name: 'GeneratePassword',
      
      component: () => import('@/views/GeneratePassword.vue'),
      meta: {
        title: 'App - Generate Password',
      }
    },
    {
      path: '/users',
      name: 'Users',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/management/Users.vue')
    },
    {
      path: '/users/:userId',
      name: 'UserDetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/management/UserDetail.vue')
    },
    {
      path: '/users/add',
      name: 'UserAdd',
      component: () => import('@/views/management/UserEdit.vue')
    },
    {
      path: '/users/:userId/edit',
      name: 'UserEdit',
      component: () => import('@/views/management/UserEdit.vue')
    },

  ]
})

export default router
