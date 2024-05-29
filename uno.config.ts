// uno.config.ts
import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'
import { presetIcons } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  // ...UnoCSS options
  presets: [presetWind(), presetIcons({ extraProperties: { display: 'inline-block' } })],
  transformers: [transformerDirectives()],
  // 针对全局组件的样式 class="router-link"
  shortcuts: {
    'router-link': ' text-xl font-300 cursor-pointer px-8 hover:(text-teal-600)'
  }
})
