<template>
    
    <div class="RecentBlog">
        <div class="col-xs-12 col-md-12">
          <div class="section-title">
           <h2>Recent Posts</h2>
         </div>
          <BlogItem v-for='blog in BlogAll' :key='blog.id' v-bind:blog='blog' />
        </div>
    </div>

</template>


<script>

import {mapGetters} from 'vuex';
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
        // ...mapActions(['fetchBlogs'])
    },
    // mounted(){
    //         return this.fetchBlogs()
    // }
}
</script>

<style scoped>

</style>