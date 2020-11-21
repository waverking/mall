<template>
  <van-swipe class="my-swiper" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageShow">
        </a>
      </van-swipe-item>
  </van-swipe>
</template>

<script>
  import Swipe from 'vant/lib/swipe';
  import 'vant/lib/swipe/style'; 
  import SwipeItem from 'vant/lib/swipe-item';
  import 'vant/lib/swipe-item/style'; 

  export default {
    name:"HomeSwiper",
    data() {
      return {
        isLoad:false
      }
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem
    },
    methods:{
      imageShow() {
        if(!this.isLoad) {
          this.$emit("showHeight")
          this.isLoad = !this.isLoad
        }
      }
    }
  }
</script>

<style scoped>
  .my-swiper img {
    width: 100%;
    height: 100%;
  }
</style>