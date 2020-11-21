<template>
  <nav-bar>
    <div slot="left" class="left" @click="back">
      <img src="~assets/image/common/back.svg" alt="">
    </div>
    <div slot="center" class="center">
      <div v-for="(item,index) in details" :key="index" 
           class="center-item"
           :class="{activated:index === currentIndex}"
           @click="chooseItem(index)">
        {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"

  export default {
    name:"DetailNavBar",
    data() {
      return {
        details:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    components:{
      NavBar
    },
    methods:{
      back() {
        this.$router.back()
      },
      chooseItem(index) {
        this.currentIndex = index
        this.$emit("switchPosition",index)
      }
    },
   
  }
</script>

<style scoped>
  .left {
    margin-top: 6px;
  }
  .center {
    display: flex;
  }
  .center-item {
    flex: 1;
  }
  .activated {
    color: var(--color-high-text);
  }
</style>