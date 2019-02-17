<template>
  <div id="app">
    <router-view name="navigation"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<style scoped>
  #app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
</style>
