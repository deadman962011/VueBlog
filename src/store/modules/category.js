// import axios from 'axios'

import axios from "axios";

const state = ()=>({ 
    Categories:[]
 });

const getters = {
    CategoryAll:state=>state.Categories
};

const actions = {

    async fetchCategories({ commit }){
        
       var res= await axios.get(process.env.VUE_APP_BASEURLBLAXK+'BlaxkBlog/'+process.env.VUE_APP_SITEID+'/CategoryAll');
        commit('CategoryAll',res.data)
    }
    

};

const mutations = {
    CategoryAll(state, Categories) {state.Categories = Categories}
};

export default{

    state,
    getters,
    actions,
    mutations

}