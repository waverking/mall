<template>
  <div class="side-bar">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name:"SideBar"
  
  }
</script>

<style scoped>
  .side-bar {
    background-color: rgb(243, 240, 240,.6);
    width: 100px;
  }
</style>