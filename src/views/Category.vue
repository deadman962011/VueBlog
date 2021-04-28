<template>
  <div class="category">

    <div class="row">
      <div class="col-sm-9">
        <h2>Category One Blogs </h2>
        <CategoryBlog />
      </div>

      <div class="col-sm-3">
        <CatList />
      </div>
    </div>


   

  </div>
</template>

<script>
// @ is an alias to /src

import CategoryBlog from '@/components/lists/CategoryBlog.vue';
import CatList from '@/components/widgets/CatList.vue';
export default {
  name: 'Category',
  components:{
    CategoryBlog,
    CatList
  }

}
</script>

<style scoped>

</style>
