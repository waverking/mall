<template>
  <good-list :goods="recommend"/>
</template>

<script>
  import GoodList from "components/content/goods/GoodList"
  export default {
    name:"DetailRecommend",
    props:{
      recommend:{
        type:Array,
        default() {
          return []
        }
      }
    },
    components:{
      GoodList
    },
  
  }
</script>

<style scoped>

</style>