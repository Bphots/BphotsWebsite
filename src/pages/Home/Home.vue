<template>
<div>
  <HomeSwiper/>
  <TopBar/>
  <home-container/>
  <home-footer/>
</div>
</template>

<script>
  import TopBar from '../TopBar';
  import HomeSwiper from '../Home/homeSwiper'
  import HomeContainer from '../Home/HomeContainer'
  import HomeFooter from '../Home/HomeFooter'
    export default {
      components: {
        TopBar,
        HomeSwiper,
        HomeContainer,
        HomeFooter
      },
      name: "Home",
      component:{
          TopBar
      },
    }
</script>

<style scoped>

</style>
