<template>
    <div></div>
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
      data(){
          return{
             Pic:[
              {
                id:1,
                img:'http://113.107.241.242/attachment/material/imagestVgUshKbtYOWHUVSl1BP59OTs3IgXD.jpg'
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
                 id:1,
                 img:'http://113.107.241.242/attachment/material/imageshho1ZeT3cSxcX8eA5XePqm82ffaiXz.jpg'}
             ]
          }
      },

    }
</script>

<style scoped>

</style>
