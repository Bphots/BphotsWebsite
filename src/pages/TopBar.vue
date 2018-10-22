<template>
    <div class="topBar">
      <div class="logo">
        <img src="../assets/browser.png" style="width: 42px;">
      </div>
      <div class="topBarMenu">
        <div class="nav-item" @click="updateLog">更新日志</div>
        <div class="nav-item" @click="loginBlizzard">登录</div>
        <div class="nav-item" @click="changeLanguge">中英文转换</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TopBar",
        data(){
          return{}
        },
      methods:{
        loginBlizzard(){},
        changeLanguge(){},
        updateLog(){},
      },
    }
</script>

<style scoped>
.topBar{
  display: flex;
  justify-content: space-between;
  height: 20%;
  z-index: 1;
}
.logo{
  width: 10%;
  margin: 1rem;
}
 .topBarMenu{
    width: 15%;
    height:50px;
    font-size: 15px;
   display: flex;
   text-align: center;
   align-items: center;
   overflow: hidden;
}
  .updateLog{
    width: 33.33%;
    height: 100%;
    line-height: 60px;
  }
  /*.Login{*/
    /*width: 33.33%;*/
    /*height: 100%;*/
    /*line-height: 60px;*/
  /*}*/
/*.Login:hover{*/
  /*background: #666;*/
  /*transition: all .2s ease-out;*/
/*}*/
.nav-item {
  width: 33.33%;
  display: block;
  position: relative;
  height: 60px;
  line-height: 60px;
  float: left;
  color: #fff;
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}
.nav-item:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  margin: auto;
  background-color: #eee;
  transition: all .2s ease-out;
  z-index: -1;
}
.nav-item:hover::after {
  width: 100%;
}
.nav-item.active::after {
  background-color: #fff;
  width: 100%;
}
.nav-item.crazy.active::after {
  animation: rainbow 3s linear infinite;
}
.nav-item.lang-toggle {
  position: relative;
  padding: 0;
  width: 3rem;
  line-height: 2rem;
  font-size: 1rem;
  transition: transform 6s linear;
}
.nav-item.lang-toggle.active i{
  animation: flip .5s ease-out;
}
  .languageChange{
    width: 33.33%;
    height: 100%;
    line-height: 60px;
  }
</style>
