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
  opacity: .4;
  color:#ffff;
}
body{
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif, å¾®è½¯é›…é»‘, simhei;
  font-size: 14px;
  color: rgb(0, 0, 0);
  background: rgb(0, 0, 0);
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}
</style>
