<template>
  <div class="border">
    <div v-if="Object.keys(goods).length !== 0" class="base-info">
      <div class="info-title">{{goods.title}}</div>
      <div class="info-price">
        <span class="info-newPrice">{{goods.newPrice}}</span>
        <span class="info-oldPrice"><del>{{goods.oldPrice}}</del></span>
        <span v-if="goods.discount" class="info-discount">{{goods.discount}}</span>
      </div>
      <div class="info-other">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="info-service">
        <span v-for="index in goods.services.length-1" :key="index">
          <img :src="goods.services[index-1].icon">
          <span class="service-name">{{goods.services[index-1].name}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .border{
    border-bottom: 4px solid rgba(57,57,57,.1);
  }
  .base-info{
    margin: 6px 6px;
  }
  .info-title{
    font-weight: bold;
    color: rgb(56,56,56);
    font-size: 16px;
  }
  .info-price{
    margin-top: 10px;
  }
  .info-newPrice{
    color: var(--color-high-text);
    font-size: 18px;
  }
  .info-oldPrice{
    font-size: 14px;
    margin-left: 8px;
  }
  .info-discount{
    font-size: 14px;
    padding: 2px 6px;
    color: white;
    font-weight: bold;
    margin-left: 8px;
    border-radius: 50px;
    background-color: var(--color-high-text);
  }
  .info-other{
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    font-size: 14px;
    border-top: none;
    padding-bottom: 10px;
    border-bottom:1px solid rgba(57,57,57,.1);
  }
  .info-service{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    height: 56px;
    line-height: 62px;
  }
  .info-service img {
    width: 16px;
    height: 18px;
    position: relative;
    top: 4px
  }
</style>