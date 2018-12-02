<template>
    <div class="HomeContainer">
      <div class="title">背锅助手
        <span style="font-size: 32px;">v3.1.1</span>
      </div>
      <div class="content">背锅助手是小型工具软件，帮助风暴英雄的普通玩家进一步理解游戏并提高胜率。目前主要功能是在征召模式的英雄选择环节中，为玩家智能推荐最优英雄，让更多的人能够感受到风暴英雄的精髓和魅力。</div>
      <transition name="slide-out">
        <div class="download"  v-if="!showDownLoadBtn">
          <div class="btn btn-default"  @click="downLoadBtn">
            <i class="iconfont icon-download" ></i>
            <span>点击下载</span>
          </div>
        </div>
      </transition>
      <transition name="slide-in">
        <div class="download-btn" v-if="showDownLoadBtn">
          <a href="http://vdisk.weibo.com/s/ziA1PneX77_gS" class="btn btn-default" style="width: 40%">
            <i class="iconfont icon-download" ></i>
            <span>本地下载</span>
          </a>
          <a href="https://github.com/wakuflair/HotsBpHelper/releases/download/3.0.1.15/Bphots.zip" class="btn btn-default" style="width: 40%">
            <i class="iconfont icon-download" ></i>
            <span>Github 下载</span>
          </a>
        </div>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "home-container",
         data(){
            return{
              showDownLoadBtn:false,
            }
         },
        methods:{
          downLoadBtn(){
            this.showDownLoadBtn = true
          }
        }
    }
</script>

<style scoped>
  .HomeContainer{
    height: 60%;
    margin-top:12%;
  }
  .title{
    font-size: 64px;
    padding: 0 2rem;
    text-shadow: 0 0 6px;
    text-align: center;
    color: #fff;
  }
  .content {
  margin: auto;
    width: 60%;
  padding: 24px 32px 32px;
  font-size: 16px;
  text-align: center;
  line-height: 32px;
  text-shadow: 1px 1px 3px rgba(255,255,255,.8);
}
  .download{
    position: relative;
    margin: 0 40%;
    text-align: center;
    height: 4rem;
  }
  .btn {
    display: block;
    position: relative;
    margin: auto;
    padding: .5rem;
    text-decoration: none;
    cursor: pointer;
    transition: all .2s ease-out;
    overflow: hidden;
  }

  .btn-default {
    background-color: rgba(255, 255, 255, .2);
    color: #fff;
    border: 1px solid #fff;
    border-radius: .5rem;
    font-size: 1.5rem;
  }
  .btn-default:hover {
    color: #000;
    background-color: rgba(255, 255, 255, .8);
  }
  .btn-default:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30%;
    height: 0;
    padding: 0;
    padding-bottom: 30%;
    margin: auto;
    border-radius: 50%;
    background-color: #fff;
    transition: all .2s linear;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: -1;
  }
  .btn-default-active {
    background-color: #eee;
    color: #000;
  }
  .btn-default:active:after {
    width: 120%;
    padding-bottom: 120%;
    opacity: 1;
  }

  .btn-circle {
    color: #fff;
    margin-bottom: 2rem;
    padding: 0;
    font-size: 1rem;
    width: 2rem;
    height: 2rem;
    background-color: #333;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 2px #fff;
    outline: none;
  }
  .btn-circle:hover {
    background-color: #eee;
    color: #000;
  }
 .icon-download{
   font-size: 1.5rem;
 }
  .download-btn{
    margin: 0 30%;
    text-align: center;
    display: flex;
    justify-content: space-around;
    height: 4rem;
    transition: 0.5s;
  }
  .slide-out-enter-active {
    transition: all .2s ease;
  }
  .slide-out-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-out-enter, .slide-out-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(100%);
    opacity: 0;
  }

  .slide-in-enter-active {
    transition: all 2.5s ease;
  }
  .slide-in-leave-active {
    transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-in-enter, .slide-in-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(100%);
    opacity: 0;
  }
</style>
