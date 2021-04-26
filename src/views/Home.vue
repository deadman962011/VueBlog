<template>
  <div class="home">
   <Carousel />
   <RecentBlog />

  </div>
</template>

<script>
// @ is an alias to /src

import Carousel from '@/components/Carousel.vue';
import RecentBlog from '@/components/RecentBlog.vue';
export default {
  name: 'Home',
  components:{
    Carousel,
    RecentBlog
  }

}
</script>

<style scoped>

</style>
