<template>
    <div class="HomeSwiper">
      <swiper :options="swiperOption">
        <swiper-slide class="slide-1" v-for="(banners,index) in Pic">
          <img :src=banners.img>
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
              img: 'http://113.107.241.242/attachment/material/imagestVgUshKbtYOWHUVSl1BP59OTs3IgXD.jpg'
            },
            {
              id: 1,
              img: 'http://113.107.241.242/attachment/material/imagesCdPRsQqcL5ajVoVcB5j31X5VJRnJcs.jpg'
            },
            {
              id: 1,
              img: 'http://113.107.241.242/attachment/material/images7wo8UEoSaFIFTAUu60kXWle3F1Kd2F.jpg'
            },
            {
              id: 1,
              img: 'http://113.107.241.242/attachment/material/images95s9ZmT3cS1k8f7a9xASfbbc210qTw.jpg'
            },
            {
              id: 1,
              img: 'http://113.107.241.242/attachment/material/imageshho1ZeT3cSxcX8eA5XePqm82ffaiXz.jpg'
            }
          ],
          swiperOption: {
            spaceBetween: 30,
            effect: 'fade',
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
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
  z-index: -1;
}
</style>
