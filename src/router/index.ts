// import { createRouter, createWebHistory } from 'vue-router'
// import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})

// 重定向方案
// router.beforeEach((to, from, next) => {
//   if (to.path === '/home') {
//     next('/')
//   }
//   next()
// })
export default router
