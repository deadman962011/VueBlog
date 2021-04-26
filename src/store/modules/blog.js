import axios from 'axios'

const state = { 
    Blogs:[]
 };

const getters = {
    BlogAll:state=>state.Blogs
};

const actions = {

    async fetchBlogs({ commit }){

        var res =await axios.get('http://127.0.0.1:8000/api/BlaxkBlog/6/BlogAll');
        console.log('Blog Fetched')
        commit('BlogAll',res.data)
    }
    

};

const mutations = {
    BlogAll:(state, Blogs) =>(state.Blogs = Blogs)
};

export default{

    state,
    getters,
    actions,
    mutations

}