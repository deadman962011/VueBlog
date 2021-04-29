import axios from 'axios'

const state = { 
    Blogs:[],
    BlogsByCat:[],
    BlogOne:{}
 };

const getters = {
    BlogAll:state=>state.Blogs,
    BlogsByCat:state=>state.BlogsByCat,
    BlogOne:state=>state.BlogOne

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

    },

    getBlogOne({commit,state,dispatch},BlogId){

        if(state.Blogs.length === 0){
            dispatch('fetchBlogs').then(function(){

                //get State Blogs Array
                var  blogs= state.Blogs
    
                //filter Array 
                var res =  blogs.find(obj => {
                    return obj.id == BlogId
                    })
    
                commit('BlogOne',res)
    
            })
        }
        else{
                //get State Blogs Array
                var  blogs= state.Blogs

                //filter Array 
                var res =  blogs.find(obj => {
                    return obj.id == BlogId
                    })

                console.log(res)
                commit('BlogOne',res)
        }

    }
    

};

const mutations = {
    BlogAll:(state, Blogs) =>(state.Blogs = Blogs),
    BlogsByCat:(state,BlogsByCat) =>(state.BlogsByCat = BlogsByCat),
    BlogOne:(state,BlogOne) => (state.BlogOne = BlogOne)
};

export default{

    state,
    getters,
    actions,
    mutations

}