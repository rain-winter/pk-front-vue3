<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { Swiper as SwiperType } from 'swiper'
import type { SwiperItemType } from '@/components/type'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

const props = defineProps({
  items: {
    type: Array as PropType<Array<SwiperItemType>>
  },
  height: {
    type: String,
    default: 'h-100'
  }
})

const modules = [Navigation, Pagination, Scrollbar, A11y]
const onSwiper = (swiper: SwiperType) => {
  console.log(swiper)
}
const onSlideChange = () => {}

const getClassAndStyle = (str: string) => {
  // 如果height的值包含rem em px，则返回 {string: str, class: ''}
  return {
    style: /(rem|em|px)/.test(props.height) ? { height: str } : {},
    class: /h-/.test(props.height) ? str : ''
  }
}
</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="10"
    :class="getClassAndStyle(height).class"
    :style="getClassAndStyle(props.height).style"
    class="w-full"
    :pagination="{ clickable: true }"
    navigation
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide
      v-for="(item, index) in items"
      :key="index"
      class="bg-amber"
    >
      <slot :item="item">
        <div
          class="w-full h-full bg-cover bg-no-repeat bg-center-top"
          :style="{ backgroundImage: `url(${item.image})` }"
        >
          <Container class="h-full">
            <div class="d-flex flex-col justify-center items-start lt-sm:px-4">
              <p class="text-4xl font-bold text-white">{{ item.title }}</p>
              <p class="text-xl sm:text-xl sm:text-gray-100 pt-4">{{ item.subTitle }}</p>
            </div>
          </Container>
        </div>
      </slot>
    </swiper-slide>
  </swiper>
</template>
<style scoped lang="scss">
:deep(.swiper-slide) {
  // @apply w-[1200px];
}
// .swiper-slide {
//   width: 1000px !important;
// }
</style>
