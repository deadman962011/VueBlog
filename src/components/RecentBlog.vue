<template>
    
    <div class="RecentBlog">
        <div class="col-xs-12 col-md-10">
          <BlogItem v-for='blog in BlogAll' :key='blog.id' v-bind:blog='blog' />
        </div>
    </div>

</template>


<script>

import {mapGetters, mapActions} from 'vuex';
import BlogItem from '@/components/BlogItem';
export default {
    name:"RecentBlog",

    components:{
        BlogItem
    },
    computed:{
    ...mapGetters(['BlogAll'])
    },
    methods:{
         ...mapActions(['fetchBlogs'])
    },
    mounted(){
      return this.fetchBlogs()
    }
}
</script>

<style scoped>

</style>