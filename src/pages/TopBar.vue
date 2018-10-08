<template>
    <div class="topBar">
      <div class="logo">logo</div>
      <div class="topBarMenu">
        <div class="updateLog">更新日志</div>
        <div class="Login">登录</div>
        <div class="languageChange">中英文转换</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TopBar"
    }
</script>

<style scoped>
.topBar{
  display: flex;
  justify-content: space-between;
  height: 20%;
}
.logo{
  width: 20%;
}
 .topBarMenu{
    width: 50%;
   display: flex;
   text-align: center;
}
  .updateLog{
    width: 33.33%;
  }
  .Login{
    width: 33.33%;
  }
  .languageChange{
    width: 33.33%;
  }
</style>
