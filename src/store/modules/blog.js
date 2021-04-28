import axios from 'axios'

const state = { 
    Blogs:[],
    BlogsByCat:[]
 };

const getters = {
    BlogAll:state=>state.Blogs,
    BlogsByCat:state=>state.BlogsByCat

};

const actions = {

    async fetchBlogs({ commit }){

        var res =await axios.get('http://127.0.0.1:8000/api/BlaxkBlog/6/BlogAll');
        console.log('Blog Fetched')
        commit('BlogAll',res.data)
    },

    async fetchBlogsByCat({commit},catId){

        //get Category From state 

        //fetch Category Blogs
        var res =await axios.get('http://127.0.0.1:8000/api/BlaxkBlog/6/BlogByCat/' + catId);
        console.log(catId)
        console.log(res.data)
        commit('BlogsByCat',res.data)

    }
    

};

const mutations = {
    BlogAll:(state, Blogs) =>(state.Blogs = Blogs),
    BlogsByCat:(state,BlogsByCat) =>(state.BlogsByCat = BlogsByCat)
};

export default{

    state,
    getters,
    actions,
    mutations

}