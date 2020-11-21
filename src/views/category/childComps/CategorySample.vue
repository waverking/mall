<template>
  <div>
    <div class="category-sample-top">
      <sub-category v-for="(item,index) in subCategory" :key="index" :subCategoryItem="item"/>
    </div>
  </div>

</template>

<script>
  import SubCategory from "./SubCategory"
  export default {
    name:"CategorySample",
    data() {
      return {
        
      } 
    },
    computed:{
      
    },
    props:{
       subCategory:{
         type:Array,
         default() {
           return []
         }
       }
      },
    components:{
      SubCategory,
     
    },
    created() {
 
    },
    methods:{

    }
    
  }
</script>

<style scoped>
  .category-sample-top {
    display: flex;
    flex-wrap: wrap;
    width: 240px;
    margin: 0 0 20px 26px;
  }
</style>