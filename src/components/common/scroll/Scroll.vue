<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscroll from "better-scroll"
  export default {
    name:"Scroll",
    data(){
      return {
        scroll:null
      }
    },
    mounted(){
      this.scroll = new Bscroll(this.$refs.wrapper,{
        probeType:3,
        click:true,
        pullUpLoad:true
      }),
      this.scroll.on("scroll",position => {
        this.$emit("showBack",position)
      }),
      this.scroll.on("pullingUp",() => {
        this.$emit("loadMore")
      })
   },
    methods:{
      backTop(x,y,time = 500){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      },
      getY() {
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>