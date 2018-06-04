<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  display:none;
}
#app {
  min-height: 100vh;
  background-color: #000;
  opacity: .8;
}
</style>
