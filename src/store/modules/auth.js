import axios from 'axios'


const state={

    auth:{}

};

const getters={

   

};

const actions={

    async getAccess({ commit },form){        

        //Do Request 
        var res=await axios.post(process.env.VUE_APP_BASEURLBLAXK+'login',form)

        var auth ={

            token:res.data
        }

        //Check Response And set acceess Token
        axios.defaults.headers.common['Authorization'] = 'bearer '+ auth.token;


        commit('auth',auth)

    }

};

const mutations={
    auth:(state,auth) => (state.auth = auth)
};


export default{

    state,
    getters,
    actions,
    mutations

}