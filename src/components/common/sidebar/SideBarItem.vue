<template>
  <div class="side-bar-item">{{sideBarItem.title}}</div>
</template>

<script>
  export default {
    name:"SideBarItem",
    props:{
      sideBarItem:{
        type:Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .side-bar-item {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
  }
</style>