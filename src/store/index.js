import Vue from 'vue';
import Vuex from 'vuex';
import blog from './modules/blog';
import category from './modules/category';
Vue.use(Vuex);


export default new Vuex.Store({

    modules:{
        category,
        blog
      
      
    }

})