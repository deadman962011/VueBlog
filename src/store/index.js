import Vue from 'vue';
import Vuex from 'vuex';
import BlaxkBlog from './modules/BlaxkBlog';


Vue.use(Vuex);


export default new Vuex.Store({

    modules:{
        BlaxkBlog,
    }

})