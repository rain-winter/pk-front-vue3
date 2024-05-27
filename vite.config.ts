import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'
// import Pages from 'vite-plugin-pages'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Layouts from 'vite-plugin-vue-layouts'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    vue(),
    UnoCSS(),
    vueJsx(),
    Icons({}),
    Components({
      /* options */
      directoryAsNamespace: false,
      resolvers: [
        IconsResolver({
          prefix: 'i'
        })
      ]
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    }),
    AutoImport({
      /* options */
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // 全局导入
      imports: [
        'vue',
        // 'vue-router',
        VueRouterAutoImports,
        '@vueuse/core'
      ]
    }),
    VueDevTools(),
    viteMockServe({
      mockPath: 'mock',
      enable: false // 线上不使用这个mock
    })
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
