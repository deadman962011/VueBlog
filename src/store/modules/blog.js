import axios from 'axios'

const state = { 
    Blogs:[],
    BlogsByCat:[],
    BlogOne:{},
    Ads:[],
    Categories:[],
    Authors:[]
    
 };

const getters = {
    BlogAll:state=>state.Blogs,
    BlogsByCat:state=>state.BlogsByCat,
    BlogOne:state=>state.BlogOne

};

const actions = {

    async fetchBlogs({ commit }){


        //get access Token
        var res =await axios.get(process.env.VUE_APP_BASEURLBLAXK+'BlaxkBlog/'+process.env.VUE_APP_SITEID+'/BlogAll',);

        commit('BlogAll',res.data)
       

    },

    async fetchBlogsByCat({commit},catId){

        //get Category From state 

        //fetch Category Blogs
        var res =await axios.get(process.env.VUE_APP_BASEURLBLAXK+'BlaxkBlog/'+process.env.VUE_APP_SITEID+'/BlogByCat/' + catId);
        console.log(catId)
        console.log(res.data)
        commit('BlogsByCat',res.data)

    },



    
    getBlogOne({commit,state},BlogId){

        if(state.Blogs.length == 0){
            // dispatch('fetchBlogs').then(function(){

            setTimeout(() => {

                //get State Blogs Array
                var  blogs= state.Blogs

                //filter Array 
                var res =  blogs.find(obj => {
                    return obj.id == BlogId
                    })
    
                commit('BlogOne',res)

            }, 3000);

    
            // })
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