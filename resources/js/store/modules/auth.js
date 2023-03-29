import axios from 'axios';



const state = {
    users: [],
    user:[]
};
const getters = {
    isLogged: state => !!state.user,
    userData:(state) => state.user,


};

const actions = {
    async Register({commit }, form) {

        console.log(form);
        const response = await axios.post("/api/register", form);
        return response.data
    },

    async Login({ dispatch, commit }, credentials) {

        // console.log(credentials);
        const response = await axios.post("/api/login", credentials);
        commit('setUserData', response.data)
        return response.data
        // console.log(response);
        // console.log(response.data);
    },

    // async loginWGoogle({ dispatch, commit }, credentials) {

    //     // console.log(credentials);
    //     const response = await axios.get("/login/google");
    //     commit('setUserData', response.data)
    //     return response.data
    //     // console.log(response);
    //     // console.log(response.data);
    // },

    async Logout({ commit }, id) {
        console.log(id);

        let user = null;
        commit('clearUserData', user)

    },


};
const mutations = {
    // Authenticated
    // Authenticated:(state, user) => (state.user.type = user),
    setUserData:(state, userData)=>{
        state.user = userData
        localStorage.setItem('user', JSON.stringify(userData))
        localStorage.setItem('token', userData.access_token)
        axios.defaults.headers.common.Authorization = `Bearer ${userData.access_token}`

    },

    clearUserData:(state, user)=>{
        // user = null;
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        // location.reload();
    }


}

export default {
    // namespaces:true,
    state,
    getters,
    actions,
    mutations
}
