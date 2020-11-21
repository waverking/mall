<template>
  <div id="cart">
    <nav-bar class="cart-nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
  
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import Scroll from "components/common/scroll/Scroll"
  import CartList from "./childComps/CartList"
  import CartBottomBar from "./childComps/CartBottomBar"

  import {mapGetters} from "vuex"
  export default {
    name:"Cart",
    data() {
      return {
       
      }
    },
    components:{
      NavBar,
      Scroll,
      CartList,
      CartBottomBar
    },
    computed:{
      ...mapGetters(["cartLength"])
    },
    activated(){
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  #cart {
    height: 100vh;
  }
  .content {
    height: calc(100% - 133px);
    overflow: hidden;
  }
  .cart-nav-bar {
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>