<template>
  <div id="app">

    
    <Spinner v-if="spinner" />
    <heading v-if="ready" />
    <Navbar v-if="ready"  />
    <div class="container-fluid">

           <router-view v-if="!spinner" />
    </div>


  </div>
</template>

<script>

import Navbar from '@/components/layouts/Navbar.vue';
import Spinner from '@/components/layouts/Spinner.vue';
import heading from './components/layouts/heading.vue';
import {mapActions,} from 'vuex';


export default {


  props:{
    spinner:{
      type:Boolean,
      default:true
    },
    ready:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    ...mapActions(['fetchAll']),
    
  },
  computed:{
  

  },
  components: {
     Navbar,
     Spinner,
     heading
  },

  mounted(){



    this.fetchAll().then(()=>{

        
        setTimeout(() => {
           //  Disable Spinner
           this.ready = true
        }, 5000);

        setTimeout(() => {
           //  Disable Spinner
           this.spinner = false
        }, 10000);


    })


    
  },

}

</script>





<style>

.navbar {

  border-radius:0px !important;
  background-color: #08004a;
  border-color: #08004a;
  height:65px;

};

.navbar .containter-fluid{
      padding-top: 6px;
};


 body {
     font-family: 'Nunito', sans-serif;
     font-size: 16px;
     font-weight: 300;
     color: #3d455c;
     margin: 0;
     padding: 0;
     overflow-x: hidden;
}
 h1, h2, h3, h4, h5, h6 {
     font-family: 'Nunito Sans', sans-serif;
     font-weight: 700;
     color: #212631;
     margin: 0px 0px 15px;
}
 h1 {
     font-size: 34px;
}
 h2 {
     font-size: 28px;
}
 h3 {
     font-size: 23px;
}
 h4 {
     font-size: 16px;
}
 a {
     font-weight: 600;
     color: #212631;
     text-decoration: none;
}
 a:hover, a:focus{
     color: #212631;
     text-decoration: underline;
     outline: none;
}
 p {
     margin: 0px 0px 20px;
}
 /* ul,ol{
     margin: 0;
     padding: 0;
     list-style: none 
}
 ul.list-style, ol.list-style {
     padding-left: 15px;
     margin-bottom: 10px;
}
 ul.list-style {
     list-style-type: disc;
}
 ol.list-style {
     list-style-type: decimal;
} */



</style>



