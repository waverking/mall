<template>
  <div class="bottom-bar">
    <div class="choose-all">
      <check-button @click.native="clickAll" :isChecked="allCheckedStatus" 
                    ref="bottomCheck"/>
      <span>全选</span>
    </div>
    <div class="total-price">
      总价：{{totalPrice}}元
    </div>
    <div class="calculation" @click="toCalculate">
      去结算({{calculation}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/common/checkbutton/CheckButton"
  import {mapGetters} from "vuex"
  export default {
    name:"CartBottomBar",
    data() {
      return {
       
      }
    },
    computed:{
      ...mapGetters(["totalPrice","calculation","cartLength","cartList"]),
      allCheckedStatus() {
        if(this.cartLength === 0) return false
        return !(this.cartList.filter(item => !item.checked).length)
      }
    },
    components:{
      CheckButton
    },
    methods:{
      clickAll() {
        if(this.allCheckedStatus) {
          this.$store.dispatch("cancelAll")
        }else {
          this.$store.dispatch("chooseAll")
        }
      },
      toCalculate() {
        if(!this.cartLength) {
          this.$toast.showMessage("购物车为空")
        }
      }
    },
   
  }
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    height: 40px;
    background-color: rgb(224, 216, 216);
  }
  .choose-all {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 76px;
  }
  .choose-all span {
    margin-left: 10px;
  }
  .total-price {
    flex: 1;
  }
  .calculation {
    width: 100px;
    height: 40px;
    line-height: 40px;
    background-color: orangered;
    color: #ffffff;
  }
</style>