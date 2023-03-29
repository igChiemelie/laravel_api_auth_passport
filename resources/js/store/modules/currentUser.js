import axios from 'axios';


const state = {
    users: [
        // {
        //     id: 1,
        //     name: 'emelie',
        // },
        // {
        //     id: 2,
        //     name: 'bundu',
        // },


    ],
    // isAuthenticated:true,
    user:{
        type: "",
        // type:'User'
    },
    user:[],



};
const getters = {
    allUsers:(state) => state.users,
    isAuthenticated: (state) => !!state.users,


};
const actions = {


    async authenticate({ commit }){
        const response = await axios.get("/api/profile-details");
        console.log(response);
        commit('Authenticated', response)
    },

    async fetchUsers({ commit }) {
        const response = await axios.get("/api/userTest");

        console.log(response.data);
        commit('setUsers', response.data)
    },

    async addUsers({ commit }, { name,email,password,password_confirmation,phone,gender,userType}) {

        console.log(email);
        const response = await axios.post("/api/register", { name,email,password,password_confirmation,phone,gender,userType});

        console.log(response.data);
        commit('newUsers', response.data)
    },

    async Register({ commit }, {form}) {

        console.log(form);
        const response = await axios.post("/api/register", {form});
        let UserForm = new FormData()
        UserForm.append('username', form.name)
        UserForm.append('password', form.password)
        UserForm.append('password_confirmation', form.password_confirmation)
        UserForm.append('phone', form.phone)
        UserForm.append('password', form.password)
        UserForm.append('gender', form.gender)
        UserForm.append('userType', form.userType)
        // await dispatch('LogIn', UserForm)
        console.log(UserForm);
        commit('newUsers', UserForm)
    },

    async Login({ dispatch, commit }, user) {

        // console.log(user);
        const response = await axios.post("/api/login", user);
        commit('setUser', response.data)
        return response.data
        // console.log(response);
        // console.log(response.data);
        // await dispatch("fetchUsers");
    },


    async delUsers({ commit }, id) {
        console.log(id);

        // await axios.delete(`/api/users/${id}`)
        // .then((result) => {
        //     console.log(result);
        //     this.$toast.success(`Hey! I'm here`);
        // }).catch((err) => {

        //     alert(`Hey! I'm here`)
        //     console.error(err);
        //     console.log(err.response.data.errors);
        // })
        commit('removeUsers', id)
    },

    async updateUser({commit}, {updUser, name, id}){
        console.log(updUser);
        console.log(name);
        console.log(id);
        const response = await axios.put(`/api/userTest/${id}`, {name, id})

        // console.log(response.data);
        commit('updateUser', response.data)
        return response.data
    }

};
const mutations = {
    // Authenticated
    // Authenticated:(state, user) => (state.user.type = user),
    setUser:(state, user) => (state.users = user),
    setUsers:(state, users) => (state.users = users),
    newUsers:(state, user) => state.users.unshift(user),
    removeUsers:(state, id) => state.users = state.users.filter(user => user.id !== id),
    updateUser:(state, updUser) => {
        const index = state.users.findIndex(user => user.id === updUser.id);
        if (index !== -1) {
            state.users.splice(index, 1, updUser);
        }
    }

}

export default {
    // namespaces:true,
    state,
    getters,
    actions,
    mutations
}
