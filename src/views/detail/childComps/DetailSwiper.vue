<template>
  <van-swipe class="my-swiper" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in topImages" :key="index">
          <img :src="item" alt="">
      </van-swipe-item>
  </van-swipe>
</template>

<script>
  import Swipe from 'vant/lib/swipe';
  import 'vant/lib/swipe/style'; 
  import SwipeItem from 'vant/lib/swipe-item';
  import 'vant/lib/swipe-item/style'; 

  export default {
    name:"DetailSwiper",
    props:{
      topImages:{
        type:Array,
        default() {
          return []
        }
      }
    },
    components:{
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem
    }
  } 
</script>

<style scoped>
  .my-swiper {
    height: 360px;
  }
  .my-swiper img {
    width: 100%;
    height: 100%;
  }
</style>