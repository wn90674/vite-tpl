<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <img class="mx-auto my-12" alt="Vue logo" src="~@/assets/logo.png">
  <h1 class="text-center text-4xl text-sky-500 font-bold">{{$t('common.hello')}}</h1>
  <HelloWorld msg="Hello Vue 3 + ts + Vite + tailwindcss + vue-router + pinia" />
</template>
