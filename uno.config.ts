// uno.config.ts
import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'
import { presetIcons } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [presetWind(), presetIcons({ extraProperties: { display: 'inline-block' } })]
})
