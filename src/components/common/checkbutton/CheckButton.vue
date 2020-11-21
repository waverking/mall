<template>
  <div class="button" :class="{activated:isChecked}" >
    <img src="~assets/image/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name:"CheckButton",
    props:{
      isChecked:{
        type:Boolean,
        default() {
          return false
        }
      }
    },
    methods:{
      
    }
  }
</script>

<style scoped>
  .button {
    border-radius: 50%;
    border:1px solid rgb(189, 186, 186);
  }
  .activated {
    background-color: var(--color-tint);

  }
</style>