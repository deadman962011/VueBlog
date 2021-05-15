


<template>
    <div class="BlogOne">

   
         <img class='post-thumb' src="http://127.0.0.1/cdn/webmag/post-2.jpg" alt="">
         <div id="post-header" class="page-header">
          <div class="post-meta">
           <a class="post-category cat-2" href="category.html">JavaScript</a>
           <span class="post-date">March 27, 2018</span>
          </div>
         <h1>Ask HN: Does Anybody Still Use JQuery?</h1>
        </div>


                    <div class="container">
                        <div class="row">
                            <div class="col-md-10">

                            </div>
                        </div>
                    </div>
             

        <!-- <h3>Blog One Page</h3>
        <h1>{{ BlogOne.BlogTitle }}</h1>
        <p>{{  BlogOne }}</p> -->
       
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


 .BlogOneHeading{

width:100%;
height: 180px;


 }

 .page-header .post-meta {
     margin: 15px 0px;
}
 .page-header .post-meta .post-date {
     color: #eceef2;
}
 .post .post-meta {
     margin-top: 15px;
     margin-bottom: 15px;
}
 .post-meta .post-category {
     font-size: 13px;
     text-transform: uppercase;
     padding: 3px 10px;
     font-weight: 600;
     border-radius: 2px;
     margin-right: 15px;
     color: #FFF;
     background-color: #212631;
     -webkit-transition: 0.2s opacity;
     transition: 0.2s opacity;
}
 .post-meta .post-category:hover, .post-meta .post-category:focus {
     text-decoration: none;
     opacity: 0.9;
}
 .post-meta .post-category.cat-1 {
     background-color: #4BB92F;
}
 .post-meta .post-category.cat-2 {
     background-color: #ff8700;
}
 .post-meta .post-category.cat-3 {
     background-color: #8d00ff;
}
 .post-meta .post-category.cat-4 {
     background-color: #0078ff;
}
 .post-meta .post-date {
     font-size: 13px;
     font-weight: 600;
}

 #post-header.page-header {
     padding-top: 120px;
}
 .page-header h1 {
     text-transform: capitalize;
     margin-bottom: 0px;
}
 #post-header.page-header h1 {
     color: #FFF;
}
 .page-header .background-img {
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background-position: center;
     background-size: cover;
}
 .page-header .background-img:after {
     content: '';
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(33, 38, 49, 0.3)), to(transparent));
     background-image: linear-gradient(to top, rgba(33, 38, 49, 0.3) 0%, transparent 100%);
}



</style>