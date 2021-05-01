import axios from 'axios'

const state={

    auth:{}

};

const getters={

   

};

const actions={

    async getAccess({ commit },form){        

        //Do Request 
        var res=await axios.post('http://127.0.0.1:8000/api/login',form)

        var auth ={

            token:res.data
        }

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