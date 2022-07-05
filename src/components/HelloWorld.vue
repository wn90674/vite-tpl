<script setup lang="ts">
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h1
    class="my-8 text-center text-3xl font-bold  text-slate-600 hover:cursor-pointer  hover:underline hover:text-rose-500"
  >
    {{ msg }}
  </h1>
</template>
