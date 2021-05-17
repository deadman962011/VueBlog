import axios from 'axios'

const state = { 
    Blogs:[],
    BlogsByCat:[],
    Ads:[],
    Categories:[],
    Authors:[],
    BlogOne:{},

    
 };

const getters = {
    BlogAll:state=>state.Blogs,
    CategoryAll:state=>state.Categories,
    AuthorAll:state=>state.Authors,
    AdsAll:state=>state.Ads,
    BlogsByCat:state=>state.BlogsByCat,
    BlogOne:state=>state.BlogOne

};

const actions = {


    fetchAll({commit}){

        var SetUrl =process.env.VUE_APP_BASEURLBLAXK+'BlaxkBlog/'+process.env.VUE_APP_SITEID+'/';

        axios.get(SetUrl).then(function(response){

            if(response.status != 200){
                console.log('Baddd')
            }
            else{
                commit('CategoryAll',response.data.payload.Categories)
                commit('BlogAll',response.data.payload.Blogs)
                commit('Ads',response.data.payload.Ads)
                commit('AuthorAll',response.data.payload.Authors)
            }
        })

    },

    getBlogsByCategory({state,commit},CatId){


        let BlogsArr= []
        if(state.Blogs.length == 0){
            // dispatch('fetchBlogs').then(function(){

            setTimeout(() => {

                //get State Blogs Array
                var  blogs= state.Blogs

                //filter Array 
                blogs.forEach(blog => {
                    


                    if(blog.category.CategoryName == CatId){
                        BlogsArr.push(blog)
                    }else{
                        console.log('blog != CatId')
                    }

                });


                console.log(BlogsArr)
                commit('BlogsByCat',BlogsArr)

            }, 3000);

    
            // })
        }
        else{
                //get State Blogs Array
                var  blogs= state.Blogs

                //filter Array 
                blogs.forEach(blog => {
                    if(blog.category.CategoryName == CatId){
                        BlogsArr.push(blog)
                    }

                });

                console.log(BlogsArr)
                commit('BlogsByCat',BlogsArr)
        }

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

                commit('BlogOne',res)
        }

    }


};

const mutations = {
    BlogAll:(state, Blogs) =>(state.Blogs = Blogs),
    CategoryAll:(state,Categories) => (state.Categories = Categories),
    AuthorAll:(state,Authors) => (state.Authors = Authors),
    Ads:(state,Ads) => (state.Ads = Ads),
    BlogsByCat:(state,BlogsByCat) =>(state.BlogsByCat = BlogsByCat),
    BlogOne:(state,BlogOne) => (state.BlogOne = BlogOne),


};





export default{

    state,
    getters,
    actions,
    mutations

}