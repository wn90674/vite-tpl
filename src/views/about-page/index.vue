<script lang="ts" setup>
import { countStore } from '@/stores/index'
import { computed } from 'vue';
const count = computed(() => countStore().count)
function inc() {
  countStore().increase()
}
</script>
<template>
  <div class="my-16 text-2xl text-center text-slate-700 font-bold">
    <h4>store width persist demo</h4>
    <div class="my-4">
      <input class="w-16 font-bold text-sky-500 inline-block outline-none pointer-events-none select-none" type="text" :value="count">
      <input class="text-xl rounded  hover:cursor-pointer outline outline-purple-300 outline-1 px-2 py-1 hover:text-white hover:bg-violet-700 transition-colors duration-300" type="button" value="increase" @click="inc">
    </div>
  </div>
</template>
