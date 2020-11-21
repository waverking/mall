<template>
  <div class="subcategory">
    <a :href="subCategoryItem.link">
      <img v-lazy="subCategoryItem.image" alt="">
    </a>
    <div>{{subCategoryItem.title}}</div>
  </div>
</template>

<script>
  export default {
    name:"SubCategory",
    props:{
      subCategoryItem:{
        type:Object,
        default() {
          return {}
        }
      }
    }

  }
</script>

<style scoped>
  .subcategory {
    width: 70px;
    margin: 20px;
    text-align: center;
  }
  .subcategory img {
    width: 80%;
    height: 80%;
  }
</style>