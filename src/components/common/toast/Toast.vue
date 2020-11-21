<template>
  <div v-show="isShow" class="toast">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name:"Toast",
    data() {
      return {
        message:'',
        isShow:false
      }
    },
    methods:{
      showMessage(message = "添加失败",duration = 1500) {
        this.message = message
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
        }, duration);
      }
    }
  }
</script>

<style scoped>
  .toast {
    position:absolute;
    top: 50%;
    left: 50%;
    z-index: 9;
    transform: translate(-50%,-50%);
    background-color: rgba(47, 54, 64,.6);
    color: #ffffff;
    height: 60px;
    line-height: 30px;
    border-radius: 20px;
    padding: 16px;
    letter-spacing: 2px;
  }
</style>