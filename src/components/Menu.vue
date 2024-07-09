<script setup lang="ts">
import type { PropType } from 'vue'
defineProps({
  align: {
    type: String as PropType<'vertical' | 'horizanal'>
  }
})
</script>
<template>
  <div :class="['flex', { 'flex-col': align === 'vertical' }]">
    <router-link
      class="item"
      to="/"
    >
      产品
    </router-link>
    <a
      class="item"
      to="https://www.zzxxtech.com/actives/intledu"
      target="_blank"
    >
      社区
    </a>
    <router-link
      class="item"
      to="/study"
    >
      学习
    </router-link>
    <router-link
      class="item"
      to="/about"
    >
      about
    </router-link>
  </div>
</template>
<style scoped lang="scss">
// 如果直接写样式，不会被压缩
// 方案1 使用unocss的transformers
.item {
  @apply relative  text-center text-xl px-8 py-5 cursor-pointer font-300 text-white lt-sm:self-start;
  &:hover {
    @apply font-500 shadow-sm;
    &:after {
      // content: '';
      @apply absolute content-none  bg-green-300 w-8 h-1 bottom-0 left-[calc(50%-1rem)];
      // left: calc(50% - 1rem);
    }
  }
}
</style>
