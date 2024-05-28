// import { createRouter, createWebHistory } from 'vue-router'
// import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: (routes) => {
    return [
      ...setupLayouts(routes),
      {
        path: '/fssd/sdsd',
        component: () => import('@/pages/about.vue')
      }
    ]
  }
})

// 重定向方案
// router.beforeEach((to, from, next) => {
//   if (to.path === '/home') {
//     next('/')
//   }
//   next()
// })
export default router
