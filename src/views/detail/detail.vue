<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @switchPosition="switchPosition" ref="detailNav"/>
    <scroll class="content" ref="scroll" @showBack="scroll">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <shop-info :shopInfo="shopInfo"/>
      <detail-good-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
      <detail-good-param :goodParams="goodParams" ref="param"/>
      <detail-comment-info :comment="comment" ref="comment"/>
      <detail-recommend :recommend="recommend" ref="recommend"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isShow"/>
    <detail-bottom-bar @addToCart="addToCart"/>
    <toast :isShow="toastShow" :message="message"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar"
  import DetailSwiper from "./childComps/DetailSwiper"
  import DetailBaseInfo from "./childComps/DetailBaseInfo"
  import ShopInfo from "./childComps/ShopInfo"
  import Scroll from "components/common/scroll/Scroll"
  import DetailGoodInfo from "./childComps/DetailGoodInfo"
  import DetailGoodParam from "./childComps/DetailGoodParam"
  import DetailCommentInfo from "./childComps/DetailCommentInfo"
  import DetailRecommend from "./childComps/DetailRcommend"
  import DetailBottomBar from "./childComps/DetailBottomBar"
  import Toast from "components/common/toast/Toast"

  import {getDetail,Goods,Shop,GoodsParams,getRecommend} from "network/detail"
  import {showBack} from "common/utils"


  export default {
    name:"Detail",
    data() {
      return {
        iid:null,
        topImages:[],
        goods:{},
        shopInfo:{},
        detailInfo:{},
        goodParams:{},
        comment:{},
        recommend:[],
        position:[],
        currentIndex:0,
        message:'',
        toastShow:false
      }
    },
    mixins:[showBack],
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      ShopInfo,
      Scroll,
      DetailGoodInfo,
      DetailGoodParam,
      DetailCommentInfo,
      DetailRecommend,
      DetailBottomBar,
      Toast
    },
    created() {
      this.iid = this.$route.params.iid
      getDetail(this.iid).then(res => {
        const data = res.data.result
        this.topImages = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shopInfo = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.goodParams = new GoodsParams(data.itemParams.info,data.itemParams.rule)
        if(data.rate.cRate !== 0) {
          this.comment = data.rate.list[0]
        }
        getRecommend().then(res => {
          this.recommend = res.data.data.list 
          console.log(this
          .recommend);
        })
       
      })
      
    },
    methods:{
      imageLoad() {
        this.$refs.scroll.refresh() 
        const navBarHeight = this.$refs.detailNav.$el.offsetHeight
        this.position.push(0,this.$refs.param.$el.offsetTop - navBarHeight,
                           this.$refs.comment.$el.offsetTop - navBarHeight,
                           this.$refs.recommend.$el.offsetTop - navBarHeight,
                           Number.MAX_VALUE) 
      },
      switchPosition(index) {
        this.$refs.scroll.backTop(0,-this.position[index],1000)
      },
      scroll(position) {
        let length = this.position.length
        let positionY = -position.y
        for(let i = 0; i < length - 1; i++) {
          if(this.currentIndex !==i && (positionY >= this.position[i] && positionY < this.position[i+1])) {
            this.currentIndex = i 
            this.$refs.detailNav.currentIndex = this.currentIndex
          }
        }
        this.showTopArraw(position)
      },
      addToCart() {
        let product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid
        this.$store.dispatch("addToCart",product).then(res => {
          this.$toast.showMessage(res,1500)
        })
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #ffffff;
    height: 100vh;
  }
  .detail-nav-bar {
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }
  .content {
    height: calc(100% - 93px);
    overflow: hidden;
  }
</style>