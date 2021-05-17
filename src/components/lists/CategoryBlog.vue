<template>
    
    <div class="CategoryBlog">
        <BlogItem v-for='blog in BlogsByCat' :key='blog.id' v-bind:blog='blog' />
    </div>

</template>


<script>

import {mapGetters, mapActions} from 'vuex';
import BlogItem from '@/components/BlogItem';
export default {
    name:"CategoryBlog",

    props:{
       
    },
    watch:{
     "$route.params.Cat"(){
        return this.getBlogsByCategory(this.$route.params.Cat)
     }
    },
    components:{
        BlogItem
    },
    computed:{
    ...mapGetters(['BlogsByCat']),
   
    },
    methods:{
         ...mapActions(['getBlogsByCategory']),
    },
    mounted(){

      return this.getBlogsByCategory(this.$route.params.Cat)
    }
}
</script>

<style scoped>

</style>