<template>
    
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li ><router-link to="/">Home</router-link></li>
        <li v-for="cat in CategoryAll" :key="cat.id"><router-link :to="{ name:'Category', params:{ Cat:cat.CategoryName }} ">{{ cat.CategoryName }}</router-link>
        </li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" ><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>

</template>



<style scoped>

</style>

<script>

 import {mapActions,mapGetters} from 'vuex';

export default {
    
    computed:{
      ...mapGetters(['CategoryAll'])
    },
    methods:{
      ...mapActions(['fetchCategories'])
    },
    mounted(){
      return this.fetchCategories()
    }


}
</script>



