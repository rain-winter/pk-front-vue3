import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'
// import Pages from 'vite-plugin-pages'
import VueRouter from 'unplugin-vue-router/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    UnoCSS(),
    vue(),
    vueJsx(),
    VueDevTools()
    // Pages({
    //   dirs: ['src/pages'],
    //   extendRoute(route) {
    //     if (route.path === '/home') {
    //       return {
    //         ...route,
    //         path: '/'
    //       }
    //     }
    //   }
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
