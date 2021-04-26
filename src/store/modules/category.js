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
        
       var res= await axios.get('http://127.0.0.1:8000/api/BlaxkBlog/6/CategoryAll');
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