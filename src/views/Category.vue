<template>
  <div class="category">

    <div class="row">
      <div class="col-sm-8">
        <h2>Category One Blogs </h2>
        <CategoryBlog />
      </div>

      <div class="col-sm-4">
       <MainSideBox />
       <CatList />
      </div>
    </div>


   

  </div>
</template>

<script>
// @ is an alias to /src

import CategoryBlog from '@/components/lists/CategoryBlog.vue';
import CatList from '@/components/widgets/CatList.vue';
import MainSideBox from '@/components/ads/MainSideBox'
export default {
  name: 'Category',
  components:{
    CategoryBlog,
    CatList,
    MainSideBox
  }

}
</script>

<style scoped>

</style>
