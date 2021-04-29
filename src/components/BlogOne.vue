


<template>
    <div class="BlogOne">
        <h3>Blog One Page</h3>
        <h1>{{ BlogOne.BlogTitle }}</h1>
        <p>{{  BlogOne }}</p>
       
    </div>
</template>


<script>

import {mapGetters, mapActions} from 'vuex';
export default {
    name:'BlogOne',
    props:{
    
    },
    computed:{
        ...mapGetters(['BlogOne','BlogAll']),


    },
    methods:{
        ...mapActions(['getBlogOne'])
    },
    mounted(){

      
            //get Param
            var BlogId= this.$route.params.Blog;
            return this.getBlogOne(BlogId)
        


  
    }
     
    
    
}
</script>

<style scoped>

</style>