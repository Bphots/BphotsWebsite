<template>
    <div class="HomeSwiper">
      <swiper :options="swiperOption" style=" width:110%;height: 100%;">
        <swiper-slide class="slide" v-for="(banners,index) in Pic" :key="index" :style="{backgroundImage:'url('+banners.img+')'}">
          <!--<div class="Img" :style="{backgroundImage:'url('+banners.img+')'}"></div>-->
        </swiper-slide>
        <!--<div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>-->
        <!--<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>-->
        <!--<div class="swiper-button-next swiper-button-white" slot="button-next"></div>-->
      </swiper>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  var myVue = {}
    export default {
        name: "homeSwiper",
        components:{
          swiper,
          swiperSlide
        },
      data() {
        return {
          Pic: [
            {
              id: 1,
              img: 'http://113.107.241.242/attachment/material/imagestVgUshKbtYOWHUVSl1BP59OTs3IgXD.jpg',
              name:'byron007'
            },
            {
              id: 2,
              img: 'http://113.107.241.242/attachment/material/imagesCdPRsQqcL5ajVoVcB5j31X5VJRnJcs.jpg',
              name:'Stooooo'
            },
            {
              id: 3,
              img: 'http://113.107.241.242/attachment/material/images7wo8UEoSaFIFTAUu60kXWle3F1Kd2F.jpg',
              name:'squidsmith'
            },
            {
              id: 4,
              img: 'http://113.107.241.242/attachment/material/images95s9ZmT3cS1k8f7a9xASfbbc210qTw.jpg',
              name:'Blizzard'
            },
            {
              id: 5,
              img: 'http://113.107.241.242/attachment/material/imageshho1ZeT3cSxcX8eA5XePqm82ffaiXz.jpg',
              name:'Blizzard'
            }
          ],
          swiperOption: {
            spaceBetween: 30,
            effect: 'fade',
            loop:true,
            autoplay:{
              delay:4000,
              stopOnLastSlide: false,
              disableOnInteraction: true,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: false
            },
            on: {
              slideChangeTransitionEnd: function(){
                let index = parseInt(this.activeIndex) - 1
                //console.log(index);//切换结束时，告诉我现在是第几个slide
                if(index > 4) myVue.$store.commit('setpicAuthor','Blizzard')
                if(index < 4) myVue.$store.commit('setpicAuthor',myVue.Pic[index].name)
              },
            }
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      },
      beforeCreate () {
        myVue = this
      }
    }
</script>

<style scoped>
.HomeSwiper{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.slide{
  height: 100%;
  /*width: 110%;*/
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: 6s slideToLeft linear forwards;
}
  /*.Img{*/
    /*height: 100%;*/
    /*width: 100%;*/
    /*background-size: 100% 100%;*/
    /*background-repeat: no-repeat;*/
  /*}*/
</style>
