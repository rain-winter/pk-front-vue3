<script setup lang="ts">
import type { SwiperItemType } from '@/components/type'
import bg from '@/assets/images/bg.png'

import { useThemeStore } from '@/stores/useThemeStore'
const themeStore = useThemeStore()

const items: SwiperItemType[] = [
  {
    image: bg,
    title: '12212',
    subTitle: '12323'
  },
  {
    image: bg,
    title: '12212',
    subTitle: '12323'
  },
  {
    image: bg,
    title: '12212',
    subTitle: '12323'
  },
  {
    image: bg,
    title: '12212',
    subTitle: '12323'
  }
]
</script>
<template>
  <div>
    <Swiper
      :items="items"
      :height="`${themeStore.rate * 36}rem`"
    />
    <Card :icon="'i-mdi-home'" />
  </div>
</template>
