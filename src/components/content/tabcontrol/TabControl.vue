<template>
  <div class="tab-control">
    <div v-for="(item,index) in tab_titles" :key="index"
         class="tab-control-item" :class="{activated:index===currentIndex}"
         @click="changeColor(index)"> 
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:"TabControl",
    data() {
      return {
        currentIndex:0
      }
    },
    props:{
      tab_titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      changeColor(index) {
        this.currentIndex = index
        this.$emit("switchGoods",index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
  }
  .tab-control-item {
    flex: 1;
  }
  .activated {
    color: var(--color-high-text);
  }
  .activated span {
    padding: 8px;
    border-bottom: 2px solid var(--color-high-text);
  }
</style>