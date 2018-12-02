<template>
    <div class="topBar">
      <div class="logo">
        <img src="../assets/browser.png" style="width: 42px;">
      </div>
      <div class="topBarMenu">
        <div class="nav-item" @click="updateLog">更新日志</div>
        <div class="nav-item" @mouseenter="!showLoading?loginTable(1):''" @mouseleave="!showLoading?loginTable(0):''">
          <div v-if="!showLoading">登录</div>
          <div class="login-icon" v-if="showLoading">
            <i class="iconfont icon-Loading"></i>
          </div>
          <div class="nav-item-login-table" v-show="showLoginTable">
            <div class="nav-item-login" v-for="(area,index) in areaServe" :key="index" @click="login(index)">{{area}}</div>
          </div>
        </div>
        <div class="nav-item" @click="changeLanguge">中英文转换</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TopBar",
        data(){
          return{
            areaServe:['国服','亚服','美服','欧服'],
            showLoginTable:false,
            showLoading:false,
          }
        },
      methods:{
        loginTable(type){
          this.showLoginTable = type==1? true: false
        },
        login(index){
          console.log(index)
          this.showLoginTable = false
          this.showLoading = true
        },
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
  min-width: 80px;
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
.nav-item-login-table{
  z-index: 999;
}
.nav-item-login {
  background: #5F5F5F;
}
.nav-item-login:hover{
  background: #999999;
  transition: 0.5s;
}

  .languageChange{
    width: 33.33%;
    height: 100%;
    line-height: 60px;
  }
.demo-spin-icon-load{
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from { transform: rotate(0deg);}
  50%  { transform: rotate(180deg);}
  to   { transform: rotate(360deg);}
}
.demo-spin-col{
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
.icon-Loading{
  font-size: 1.5rem;
}
  .login-icon{
    height: 60px;
    width: 60px;
    margin: auto;
    position: relative;
    animation: login-icon  2s  linear infinite;
    /*animation-direction: alternate;*/
  }
@keyframes login-icon
{
  from { transform: rotate(0deg);}
  50%  { transform: rotate(180deg);}
  to   { transform: rotate(360deg);}
}
</style>
