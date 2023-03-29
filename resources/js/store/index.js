import Vuex from 'vuex';
// import Vue from 'vue';
import { createApp } from 'vue';
const Vue = createApp({})
Vue.use(Vuex);

import currentUser from './modules/currentUser'
import auth from './modules/auth'
// create store



export default new Vuex.Store({
    modules:{
        // currentUser,
        auth
    }


})
