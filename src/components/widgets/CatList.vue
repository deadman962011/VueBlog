<template>
   <div class="CatList">
       <div class="aside-widget">
         <div class="section-title">
          <h2>Catagories</h2>
         </div>
         <div class="category-widget">
            <ul>
                <li v-for="cat in CategoryAll" :key="cat.id"><router-link  :to="{ name:'Category', params:{ Cat:cat.CategoryName }} ">{{ cat.CategoryName }} <span>{{ cat.ItemNum }}</span> </router-link></li>
            </ul>
         </div>
        </div>
    </div> 
</template>

<script>

import {mapGetters} from 'vuex';

export default {
    name:'CatList',
    computed:{
      ...mapGetters(['CategoryAll'])
    },
    methods:{
      
    },
    mounted(){
    
    }

}
</script>

<style scoped>
 .aside-widget {
     margin-bottom: 40px;
}
 .category-widget ul li {
     display:block;
     padding-bottom: 10px;
     border-bottom: 1px solid #eceef2;
}
 .category-widget ul li + li {
     margin-top:10px;
}
 .category-widget ul li > a {
     display:block;
     -webkit-transition:0.2s color;
     transition:0.2s color;
}
 .category-widget ul li > a > span {
     float:right;
     color:#fff;
     background-color: #212631;
     padding:0px 5px;
     font-weight:600;
     border-radius:2px;
}
 .category-widget ul li > a.cat-1 > span {
     background-color: #4BB92F;
}
 .category-widget ul li > a.cat-2 > span {
     background-color: #ff8700;
}
 .category-widget ul li > a.cat-3 > span {
     background-color: #8d00ff;
}
 .category-widget ul li > a.cat-4 > span {
     background-color: #0078ff;
}
 .category-widget ul li > a:hover, .category-widget ul li > a:focus {
     text-decoration:none;
}
 .category-widget ul li > a.cat-1:hover, .category-widget ul li > a.cat-1:focus {
     color: #4BB92F;
}
 .category-widget ul li > a.cat-2:hover, .category-widget ul li > a.cat-2:focus {
     color: #ff8700;
}
 .category-widget ul li > a.cat-3:hover, .category-widget ul li > a.cat-3:focus {
     color: #0078ff;
}
 .category-widget ul li > a.cat-4:hover, .category-widget ul li > a.cat-4:focus {
     color: #8d00ff;
}
</style>