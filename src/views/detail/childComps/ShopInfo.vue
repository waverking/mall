<template>
  <div class="container">
    <div class="shop-info">
      <div class="shop-title">
        <img :src="shopInfo.logo" alt="">
        <span>{{shopInfo.name}}</span>
      </div>
      <div class="shop-profile">
        <div class="total-sell">
          <p>{{(shopInfo.sells / 10000).toFixed(1)}}万</p>
          <span>总销量</span>
        </div>
        <div class="total-goods">
          <p>{{shopInfo.goodsCount}}</p>
          <span>全部宝贝</span>
        </div>
        <div class="middle-border"></div>
        <div>
          <table class="shop-rate">
            <tr v-for="(item,index) in shopInfo.score" :key="index">
              <td><span>{{item.name}}</span></td>
              <td :class="item.score>=5?'high-color':'low-color'">
                <span>{{item.score}}</span>
              </td>
              <td :class="item.score>=5?'high-color high-back':'low-color low-back '">
                <span v-if="item.score>=5">高</span>
                <span v-else>低</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="bottom">
        <span>进店逛逛</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"ShopInfo",
    props:{
      shopInfo:{
        type:Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
 .container{
    border-bottom: 4px solid rgba(57,57,57,.1);
  }
  .shop-info{
    margin-top: 20px;
    margin-left: 10px;
  }
  .shop-title{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .shop-title img{
    border: 1px solid rgba(57,57,57,.2);
    border-radius: 50%;
    width: 18%;
    height: 18%;
    padding: 4px 4px;
  }
  .shop-title span{
    margin-left: 10px;
  }
  .shop-profile{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
    margin-left: 16px;
    font-size: 14px;
  }
  .shop-profile div{
    display: inline-block;
  }
  .total-goods p,.total-sell p{
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }
  .middle-border{
    border: 1px solid rgba(57,57,57,.2);
    height: 50px;
  }
  .shop-rate{
    border-spacing: 8px;
  }
  .shop-rate td:last-child{
    border: 1px solid;
    color: white;
    border-radius: 4px;
  }
  .high-color{
    color: rgb(233,22,44);
  }
  .low-color{
    color: rgb(60,142,53);
  }
  .high-back{
    background-color: rgb(233,22,44);
  }
  .low-back{
    background-color: rgb(60,142,53);
  }
  .bottom{
    text-align: center;
    height: 62px;
    line-height: 50px;
  }
  .bottom span{
    border: 1px solid rgba(57,57,57,.2);
    border-radius: 50px;
    padding: 6px 28px;
    background-color: rgba(57,57,57,.1);
    font-size: 14px;
  }
</style>