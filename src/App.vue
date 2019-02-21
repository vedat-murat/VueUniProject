<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <sfooter></sfooter>
  </div>
</template>

<script>
    import Navigation from './components/navigation/Navigation';
    import StFooter from './components/footer/Footer';

    export default {
        components: {
            navigation: Navigation,
            sfooter: StFooter
        }
    }
</script>

<style scoped>
  #app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
</style>
