import axios from "axios";

const state= {
        ads:[]
}


const getters = {}


const actions = {
    
    getAds(){

        //get Ads

        //setUrl
        var url = process.env.VUE_APP_BASEURLBLAXK+'AdAll';

        axios.get(url).then(function(response){

            if(response.status === 200){

                console.log(response.data)

            }

        })
    }

}

const mutations = {

}




export default{

    state,
    getters,
    actions,
    mutations

}


