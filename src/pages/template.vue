<template>
  <div class="template">
    <nav class="sidebar">
      <header class="sidebar-title">
        <span>选择你的英雄</span>
      </header>
      <dl class="sidebar-list">
        <dd class="sidebar-item" v-for="(item, index) in 10" :key="index">
          <p class="sidebar-item-content">泽拉图</p>
        </dd>
      </dl>
    </nav>
    <section class="main">
      <nav class="tag">
        <span class="active">基础属性</span>
        <span>英雄关系</span>
      </nav>
      <section class="main-container">
        <header class="main-header">
          <span class="main-title-desc">选择对应关系</span>
          <dl class="main-title">
            <dd>相生关系</dd>
            <dd>克制关系</dd>
            <dd>被克制关系</dd>
          </dl>
        </header>
        <dl class="main-content">
          <dd class="content-item" v-for="(item, index) in 10" :key="index">
            <span class="content-name">阿巴瑟</span>
            <div class="content-relation">
              <span class="content-grow" @click="showModal(index)">
                1
                <div class="modal" v-show="toggle === true && modal === index">
                  <label v-for="(item, index) in 21" :key="index">
                    <input type="radio" name="point" @click.stop="setPoint(index - 10)">
                    <span>{{index - 10}}</span>
                  </label>
                </div>
              </span>
              <span class="content-restraint">2</span>
              <span class="content-restrained">3</span>
            </div>
          </dd>
        </dl>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'bpTemplate',
  data () {
    return {
      toggle: false,
      modal: 0
    };
  },
  methods: {
    showModal (num) {
      this.toggle = true;
      this.modal = num;
    },
    setPoint (point) {
      console.log('setPoint', point);
      this.toggle = false;
    }
  }
};
</script>

<style scoped>
/* global */
.template {
  display: flex;
  padding: 50px;
}

/* sidebar */
.sidebar {
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  color: #fff;
  opacity: .5;
}
.sidebar-title {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.sidebar-list {
  padding: 6px;
  text-align: center;
}
.sidebar-item {
  margin: 6px 0;
  padding: 8px 0;
  cursor: pointer;
  transition: .4s;
}
.sidebar-item:hover, .sidebar-item.active {
  color: #000;
  background-color: #eee;
}

/* main */
.main {
  flex-grow: 1;
  padding: 0 10px;
  border: 1px solid #ccc;
  color: #fff;
  opacity: .5;
}
.tag {
  padding: 0 20px;
}
.tag>span {
  display: inline-block;
  padding: 10px;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: .4s;
}
.tag>span:active, .tag>span.active {
  border-color: #fff;
}
.main-header {
  padding: 10px 0;
}
.main-title-desc {
  display: inline-block;
  width: 120px;
  text-align: center;
}
.main-title {
  display: inline-flex;
  justify-content: space-around;
  width: calc(100% - 130px);
}
.main-title>dd {
  display: inline-block;
}
.content-name {
  display: inline-block;
  padding: 20px 0;
  width: 120px;
  text-align: center;
  cursor: pointer;
  transition: .4s;
}
.content-name:hover, .content-name.active {
  color: #000;
  background-color: #eee;
}
.content-relation {
  display: inline-flex;
  justify-content: space-around;
  width: calc(100% - 130px);
}
.content-relation>span {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #eee;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
}
.modal {
  position: relative;
  top: -30px;
  left: -30px;
  z-index: 1;
  width: 100px;
  border: 1px solid #fff;
  background-color: #000;
  opacity: 1;
}
.modal>label {
  display: block;
}
</style>
