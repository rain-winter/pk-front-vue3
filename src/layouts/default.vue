<script setup lang="ts">
const { y } = useWindowScroll()
const [show, toggle] = useToggle(false)

useResizeObserver(document.body, () => {
  const width = window.innerWidth
  if (width >= 640) {
    toggle(true)
  } else {
    toggle(false)
  }
})
</script>
<template>
  <div
    :class="{ 'bg-black bg-opacity-30': y > 0 }"
    class="fixed top-0 w-full z-60"
  >
    <Container>
      <img
        src="../assets/logo.svg"
        alt=""
        class="w-14 h-full lt-sm: mx-auto"
      />
      <div
        class="lt-sm:(i-tabler:menu-2 text-xl text-gray-100 absolute right-3 top-3 cursor-pointer hover:text-gray-300)"
        @click="toggle()"
      ></div>
      <Menu
        v-show="show"
        class="lt-sm: ( flex-col absolute top-14 right-0 w-full )"
      />
    </Container>
  </div>
  <router-view />
  <div>
    <data class="mobile-hide">default footer</data>
    <div class="mobile hidden">mobile-device</div>
  </div>
</template>
