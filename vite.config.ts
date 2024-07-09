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
import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin'

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
    Layouts(),
    // {
    //   layoutsDirs: 'src/layouts',
    //   pagesDirs: 'src/pages',
    //   defaultLayout: 'default'
    // }

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
        '@vueuse/core',
        'pinia'
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
  },
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport8plugin({
          unitToConvert: 'px',
          viewportWidth: (file) => {
            let num = 1920
            if (file.indexOf('m_') !== -1) {
              num = 375
            }
            return num
          },
          unitPrecision: 5, // 单位转换后保留的精度
          propList: ['*'], // 能转化为vw的属性列表
          viewportUnit: 'vw', // 希望使用的视口单位
          fontViewportUnit: 'vw', // 字体使用的视口单位
          selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
          minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
          mediaQuery: true, // 媒体查询里的单位是否需要转换单位
          replace: true, //  是否直接更换属性值，而不添加备用属性
          exclude: [/node_modules\/ant-design-vue/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
          include: [], // 如果设置了include，那将只有匹配到的文件才会被转换
          landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
          landscapeUnit: 'vw', // 横屏时使用的单位
          landscapeWidth: 1024 // 横屏时使用的视口宽度
        })
      ]
    }
  }
})
