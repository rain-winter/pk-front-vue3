<script setup lang="ts"></script>
<template>
  <div>
    <router-link
      class="item router-link"
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
.itemd {
  @apply text-center text-xl py-2 px-4 cursor-pointer;
}
</style>
