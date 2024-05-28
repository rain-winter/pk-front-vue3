<template>
  <div class="flex">
    <router-link to="/">产品</router-link>
    <a
      to="https://www.zzxxtech.com/actives/intledu"
      target="_blank"
    >
      社区
    </a>
    <router-link to="/study">学习</router-link>
    <router-link to="/about">about</router-link>
  </div>
  <router-view />
  <div>footer</div>
</template>
