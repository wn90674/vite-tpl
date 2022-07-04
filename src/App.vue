<template>
  <nav class="my-4 flex justify-around">
    <router-link class="px-8 py-4 border border-purple-500 rounded-lg hover:cursor-pointer hover:text-white hover:bg-purple-500" to="/">home-page</router-link>
    <router-link class="px-8 py-4 border border-purple-500 rounded-lg hover:cursor-pointer hover:text-white hover:bg-purple-500" to="/about">about-page</router-link>
  </nav>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
