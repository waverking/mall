<template>
  <div class="tab-bar-item" @click="changePath">
    <div v-if="!isActivated"><slot name="original"></slot></div>
    <div v-else><slot name="activated"></slot></div>
    <div :style="pinkfont"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path:{
      type:String,
      default:''
    }
  },
  data(){
    return {
    
    }
  },
  computed:{
    isActivated() {
      return this.$route.path.indexOf(this.path) != -1
    },
    pinkfont(){
      return this.isActivated ? {color:'#ff5777'}:{}
    }
  },
  methods:{
    changePath(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
      flex: 1;
      text-align: center;
      font-size: 16px;
    }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
  }
 
</style>