<template>
  <div class="goods-item" @click="showDetail">
    <img v-lazy="itemImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goods_item.title}}</p>
      <span class="goods-price">{{goods_item.price}}</span>
      <span class="collection">{{goods_item.cfav}}</span>
    </div>  
  </div>
</template>

<script>
  export default {
    name:"GoodsListItem",
    props:{
      goods_item:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      itemImage() {
        return this.goods_item.image || this.goods_item.show.img
      }
    },
    methods:{
      imageLoad() {
        this.$bus.$emit("imageLoad")
      },
      showDetail() {
        this.$router.push("/detail/" + this.goods_item.iid)
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 48%;
    padding-bottom: 20px;
  }
  .goods-item img {
    width: 100%;
    height: 90%;
    border-radius: 18px;
  }
  .goods-info {
    text-align: center;
    font-size: 16px;
  }
  .goods-info p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 4px;
  }
  .goods-price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-item .collection {
    position: relative;
  }
  .goods-item .collection::before {
    content: '';
    position: absolute;
    left: -16px;
    width: 14px;
    height: 14px;
    background: url("~assets/image/common/collect.svg") 0 0/14px 14px;
  }
</style>