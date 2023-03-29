/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import { createApp } from 'vue';
import router from './router';
import store from './store';
import axios, {AxiosInstance} from 'axios';
import UniversalSocialauth from 'universal-social-auth';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Toaster from '@meforma/vue-toaster';

// import 

const app = createApp({
    created() {
        const userInfo = localStorage.getItem('user')
        if (userInfo) {
            const userData = JSON.parse(userInfo)
            this.$store.commit('setUserData', userData)
        }

        axios.interceptors.response.use(
            response => response,
            error => {
                if (error.response.status === 401) {
                    this.$store.dispatch('Logout')
                }
                return Promise.reject(error)
            }
        )
    },
})
app.use(router);
app.use(VueSweetalert2);
app.use(Toaster);
app.use(store);



const options = {
    providers: {
      apple: {
        nonce: '**************',
        state: '**************',
        clientId: '**************',
        responseMode: 'form_post',
        response_type: 'code  id_token',
        optionalUrlParams: ['response_mode', 'use_popup', 'state'],
        usePopup: true,
        redirectUri: 'https://myapp.com/auth/github/callback'
      },
      github: {
        clientId: '**************',
        redirectUri: 'https://myapp.com/auth/github/callback'
      },
      google: {
        clientId: '320295552087-68mstpnq402jpbilvvk3pv2d3oouq8bn.apps.googleusercontent.com',
        redirectUri: 'http://localhost:8000/login/google/callback'
      },
      facebook: {
        clientId: '************',
        redirectUri: 'https://myapp.com/auth/facebook/callback'
      },
      twitter: {
        url: 'https://myapp.com/auth/twitter',
        clientId: '********',
        redirectUri: 'https://myapp.com/auth/twitter/callback'
      }
    }
}
  
const Oauth = new UniversalSocialauth(axios, options)
   
app.config.globalProperties.$Oauth = Oauth
app.config.globalProperties.$axios = axios

app.mount('#app')


