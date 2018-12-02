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
  @import 'http://at.alicdn.com/t/font_945745_uxdr7oyav8c.css';
* {
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  display:none;
}
#app {
  min-height: 100vh;
  background-color: rgba(0,0,0,.6);
}
body{
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif, å¾®è½¯é›…é»‘, simhei;
  font-size: 14px;
  color:#ffff;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}
</style>
