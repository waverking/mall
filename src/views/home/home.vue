<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :tab_titles="['流行','新款','精选']" class="tab-control"
                   @switchGoods="switchGoods" ref="tabControl_1" v-show="isShowTab"/>
    <!-- 滚动区域 -->
    <scroll class="content" ref="scroll" @showBack="showBack" @loadMore="loadMore">
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @showHeight="showHeight"/>
      <!-- 推荐 -->
      <recommend :recommends="recommends"/>
      <!-- 特色 -->
      <feature/>
      <!-- 切换栏 -->
      <tab-control :tab_titles="['流行','新款','精选']"
                   @switchGoods="switchGoods" ref="tabControl_2"/>
      <!-- 商品信息 -->
      <goods-list :goods="goodsType"/>
    </scroll>
    <!-- 返回顶部 -->
    <back-top @click.native="backTop" v-show="isShow"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import HomeSwiper from "./childComps/HomeSwiper"
  import Recommend from "./childComps/Recommend"
  import Feature from "./childComps/Feature"
  import TabControl from "components/content/tabcontrol/TabControl"
  import GoodsList from "components/content/goods/GoodList"
  import Scroll from "components/common/scroll/Scroll"
  // import BackTop from "components/content/backtop/BackTop"

  import {getHomeMultiData,getHomeGoodsData} from "network/home"
  import {debounce,showBack} from "common/utils"
  export default {
    name:"Home",
    data() {
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentgoods:'pop',
        // isShow:false,
        tabHeight:0,
        isShowTab:false,
        positionY:0
      }
    },
    computed:{
      goodsType() {
        return this.goods[this.currentgoods].list
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      Recommend,
      Feature,
      TabControl,
      GoodsList,
      Scroll,
      // BackTop
    },
    mixins:[showBack],
    created() {
      this.getHomeMultiData()
      this.getHomeGoodsData('pop')
      this.getHomeGoodsData('new')
      this.getHomeGoodsData('sell')
    },
    mounted() {
      const refresh =  debounce(this.$refs.scroll.refresh,500)
      this.$bus.$on("imageLoad" ,() => {
        refresh()
      })
    },
    activated() {
      this.$refs.scroll.refresh()
      this.$refs.scroll.backTop(0,this.positionY,0)      
    },
    deactivated() {
      this.positionY = this.$refs.scroll.getY()
    },
    methods:{
      getHomeMultiData() {
        getHomeMultiData().then(res => {
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
      },
      getHomeGoodsData(type) {
        const page = this.goods[type].page + 1
        getHomeGoodsData(type,page).then(res => {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        })
      },
      switchGoods(index) {
        switch(index) {
          case 0:
            this.currentgoods = 'pop'
            break
          case 1:
            this.currentgoods = 'new'
            break
          case 2:
            this.currentgoods = 'sell'
            break
        }
        this.$refs.tabControl_2.currentIndex = index
        this.$refs.tabControl_1.currentIndex = index
      },
      // 监听自定义组件的点击事件得加上.native修饰符
      // backTop() {
      //   this.$refs.scroll.backTop(0,0,1000)
      // },
      showBack(position) {
        this.showTopArraw(position)
        this.isShowTab = -position.y > this.tabHeight 
      },
      // showBackArraw(position) {
      //   this.isShow = -position.y > 2000
      // },
      loadMore() {
        this.getHomeGoodsData(this.currentgoods)
        this.$refs.scroll.refresh()
      },
      showHeight() {
        this.tabHeight = this.$refs.tabControl_2.$el.offsetTop
      }
    }
  }
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative; 
  }
  .home-nav {
    background-color: var(--color-tint);
    color:#ffffff;
  }
  /* better-scroll里面无效 */
  .tab-control {
    position: relative;
    z-index: 9;
    background-color: #ffffff;
    margin-top: -1px;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

</style>