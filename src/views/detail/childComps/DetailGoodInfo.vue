<template>
  <div v-if="Object.keys(detailInfo).length != 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index"
           :src="item" alt="" @load="imageLoad">
    </div>
  </div>
</template>

<script>
  import {debounce} from "common/utils"
  export default {
    name:"DetailGoodInfo",
    data() {
      return {
        counter:0,
        imageLength:0,
        debounceLoad:null
      }
    },
    props:{
      detailInfo:{
        type:Object,
        default() {
          return {}
        }
      }
    },
    created() {
      this.debounceLoad = debounce(() => {
         this.$emit("imageLoad")
      },100)
    },
    methods:{
      imageLoad() {
        this.debounceLoad()
      }
    },
   
  }
</script>

<style scoped>
  .info-desc,.info-key {
    text-indent: 2em;
    line-height: 20px;
    margin: 10px;
  }
  .start,.end {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(57, 57, 57, .2);
    margin: 10px;
  }
  .end {
    float:right;
  }
  .start::after , .end::before{
    content: '';
    position: absolute;
    top: 4px;
    width: 80px;
    height: 2px;
    background-color: rgba(57, 57, 57, .2);
  }
  .start::after {
    left: 16px;
  }
  .end::before {
    right: 16px;
  }
  .info-list img {
    width: 100%;
    height: 100%;
  }
</style>