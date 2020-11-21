<template>
  <side-bar>
    <side-bar-item v-for="(item,index) in category" :key="index" :sideBarItem="item"
                   @click.native="chooseCategory(index,item)"
                   :class="{activated:currentIndex === index}"/>
  </side-bar>
</template>

<script>
  import SideBar from "components/common/sidebar/SideBar"
  import SideBarItem from "components/common/sidebar/SideBarItem"
  export default {
    name:"CategorySideBar",
    data() {
      return {
        currentIndex:0
      }
    },
    props:{
      category:{
        type:Array,
        default() {
          return []
        }
      }
    },
    components:{
      SideBar,
      SideBarItem
    },
    methods:{
      chooseCategory(index,item) {
        this.currentIndex = index
        this.$emit("chooseCategory",item.maitKey)
      }
    }
  }
</script>

<style scoped>
  .activated {
    color: var(--color-tint);
    border-left: 4px solid var(--color-tint);
    border-right: 4px solid transparent;
  }
</style>