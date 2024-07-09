// uno.config.ts
import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'
import { presetIcons, transformerVariantGroup } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  // ...UnoCSS options
  presets: [presetWind(), presetIcons({ extraProperties: { display: 'inline-block' } })],
  transformers: [
    transformerDirectives(),
    // 启用样式组
    transformerVariantGroup()
  ],
  // 针对全局组件的样式 class="router-link"
  shortcuts: {
    'router-link': ' text-xl font-300 cursor-pointer px-8 hover:(text-teal-600)',
    'bg-image': 'w-full h-full bg-center-top bg-no-repeat bg-cover'
  }
})
