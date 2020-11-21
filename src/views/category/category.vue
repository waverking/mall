<template>
  <div id="category">
    <nav-bar class="category-nav-bar"><div slot="center">分类</div></nav-bar>
    <div class="category-detail">
      <scroll class="category-scroll">
        <category-side-bar :category="category" @chooseCategory="chooseCategory"/>
      </scroll>
      <scroll class="category-scroll">
         <category-sample :subCategory="subCategory"/>
      </scroll>
    </div> 
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import CategorySideBar from "./childComps/CategorySideBar"
  import CategorySample from "./childComps/CategorySample"
  import Scroll from "components/common/scroll/Scroll"
  import {getCategory,getSubCategory} from "network/category"
  export default {
    name:"Category",
    data() {
      return {
        category:[],
        subCategory:[],
        maitKey:3627
      }
    },
    components:{
      NavBar,
      CategorySideBar,
      Scroll,
      CategorySample
    },
    created() {
      this.getCategory()
      this.getSubCategory(this.maitKey)
    },
    methods:{
      getCategory() {
        getCategory().then(res => {
          this.category = res.data.data.category.list
        })
      },
      getSubCategory(maitKey) {
        getSubCategory(maitKey).then(res => {
          this.subCategory = res.data.data.list
        })
      },
      chooseCategory(maitKey) {
        this.getSubCategory(maitKey)
      }
    }
  }
</script>

<style scoped>
  #category {
    height: 100vh;
  }
  .category-detail {
    height: calc(100% - 93px);
    display: flex;
  }
  /* 加上overflow:hidden可以隐藏超出内容，另一方面可以使鼠标滚轮无效 ,100%是相对于直接父元素的高度*/
  .category-scroll {
    height: 100%;
    overflow: hidden;
  }
  .category-nav-bar {
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>