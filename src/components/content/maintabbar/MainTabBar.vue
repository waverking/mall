<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img src="~assets/image/tabbar/home.svg" slot="original">
      <img src="~assets/image/tabbar/home_active.svg"  slot="activated">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="~assets/image/tabbar/category.svg" slot="original">
      <img src="~assets/image/tabbar/category_active.svg"  slot="activated">
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img src="~assets/image/tabbar/shopcart.svg" slot="original">
      <img src="~assets/image/tabbar/shopcart_active.svg"  slot="activated">
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="~assets/image/tabbar/profile.svg" slot="original">
      <img src="~assets/image/tabbar/profile_active.svg"  slot="activated">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"
export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>