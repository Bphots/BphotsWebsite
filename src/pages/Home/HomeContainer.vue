<template>
    <div class="HomeContainer">

      <div class="title">背锅助手
        <span style="font-size: 32px;">v3.1.1</span>
      </div>
      <div class="content">背锅助手是小型工具软件，帮助风暴英雄的普通玩家进一步理解游戏并提高胜率。目前主要功能是在征召模式的英雄选择环节中，为玩家智能推荐最优英雄，让更多的人能够感受到风暴英雄的精髓和魅力。</div>
      <div class="Download"></div>
    </div>
</template>

<script>
    export default {
        name: "home-container"
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
    width: 800px;
  padding: 24px 32px 32px;
  font-size: 16px;
  text-align: center;
  line-height: 32px;
  text-shadow: 1px 1px 3px rgba(255,255,255,.8);
}
</style>
