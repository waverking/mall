<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods_item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem"
  export default {
    name:"GoodsList",
    props:{
      goods:{
        type:Array,
        dafault(){
          return []
        }
      }
    },
    components:{
      GoodsListItem
    }
  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 10px;
  }
</style>