<template>
    <div class="">

    </div>
</template>

<script>

 import {mapActions} from 'vuex';

export default {
    name:'master',
    methods:{
      ...mapActions(['getAccess','fetchCategories','fetchBlogs'])
    },
    mounted(){


        //Site 
        var site={
            SiteId:6,
            SiteToken:'e173ed367256db629e2e664f727886f0'
        };

        this.getAccess(site).then(
        this.fetchBlogs())
       
       


    }
}
</script>




<style scoped>



</style>