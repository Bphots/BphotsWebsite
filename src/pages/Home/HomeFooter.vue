<template>
    <div class="HomeFooter">
      <div class="author">
        插画作者：{{picAuthor}}
      </div>
      <div class="copyRight">
        © 2018 BP Hots /
        <a class="icp-link" href="http://www.miibeian.gov.cn" target="_blank">粤ICP备17070591号</a>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name: "home-footer",
      data(){
          return{}
      },
      watch:{
          picAuthor(val){
          }
      },
      computed:{
        ...mapState({
          picAuthor:'picAuthor',
        })
      },
    }
</script>

<style scoped>
.HomeFooter{
  bottom: 0;
  position: fixed;
  width: 100%;
}
.author{
  text-align: right;
  color:#ccc;
}

.copyRight {
  color: #ccc;
  text-align: right;
  line-height: 2rem;
  margin-right: .5rem;
}
  .icp-link{
    color: #ccc;
    text-decoration: none;
  }
</style>
