<script setup lang="ts">
const { y } = useWindowScroll()
</script>
<template>
  <div
    :class="{ 'bg-black bg-opacity-30': y > 0 }"
    class="fixed top-0 w-full"
  >
    <Container>
      <img
        src="../assets/logo.svg"
        alt=""
        class="w-14 h-full"
      />
      <Menu />
    </Container>
  </div>
  <div class="h-[1200px]"></div>
  <router-view />
  <div>footer</div>
</template>
