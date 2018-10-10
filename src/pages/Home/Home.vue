<template>
<div>
  <HomeSwiper/>
<TopBar/>
</div>
</template>

<script>
  import TopBar from '../TopBar';
  import HomeSwiper from '../Home/homeSwiper'
    export default {
      components: {
        TopBar,
        HomeSwiper
      },
      name: "Home",
      component:{
          TopBar
      },
    }
</script>

<style scoped>

</style>
