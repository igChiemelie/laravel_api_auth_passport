import { createRouter, createWebHistory } from 'vue-router'

import Guestlayout from '../components/pages/layouts/Guestlayout'

import Index from '../components/Index'
import Home from '../components/Home'
import Contact from '../components/Contact'
import About from '../components/About'
import ForgotPassword from '../components/pages/auth/Forgot-Pass';
import ResetPassword from '../components/pages/auth/Reset';
import NotFound from '../components/NotFound';

import Login from '../components/pages/auth/Login'
import Register from '../components/pages/auth/Register'
import Logout from '../components/pages/auth/Logout'

// import UserLayout from '../components/pages/layouts/UserLayout'
import Dashboard from '../components/pages/user/Index';
import adminDashboard from '../components/pages/admin/Admin';


import store from '../store/modules/auth';



const routes = [

    {
        // path:'/:pathMatch(.*)*',
        // component:NotFound
    },
    {
        path:'/',
        component:Guestlayout,
        meta: {
            requiresAuth: false
        },
        children:[
            {
                path:'/',
                name: "Index",
                component:Index,

            },
            {
                path:'/Home',
                name: "Home",
                component:Home,

            },
            {
                path:'/contact',
                name: "Contact",
                component:Contact,
                meta: {
                    roles: ['Admin','User']
                }
            },
            {
                path:'/about',
                name: "About",
                component:About,
                meta: {
                    roles: ['Admin','User']
                }
            },
            {
                path:'/register',
                name: "Register",
                component:Register,
                meta: { guest: true },
            },
            {
                path:'/login',
                name: "Login",
                component:Login,

                beforeEnter: (to, from, next) => {
                   const loggedIn = localStorage.getItem('user')

                    if (store.getters.isLogged && loggedIn) {
                        console.log('User is authenticated redirect to dashboard.');
                        next('/dashboard')
                        return
                    }

                    next()

                },
                // children:[

                // ]
            },
            {
                path:'/forgot-password',
                name: "ForgotPassword",
                component:ForgotPassword,

            },
            {
                path:'/reset/:token',
                name: "ResetPassword",
                component:ResetPassword,

            },
            {
                path:'/dashboard',
                name: "Dashboard",
                meta:{
                    requiresAuth:true
                },
                component:()=> import('../components/pages/user/Index'),
            },


            
        ]
    },
    {
        // path:'http://localhost:8000/login/goggle'
        path:'/login/:provider/callback',
        component:{
            template:'<div class="auth-component"></div>'
        }
    }


    // {
    //     path:'/dashboard',
    //     component:UserLayout,
    //     children:[
    //         {
    //             path:'/dashboard',
    //             name: "Dashboard",
    //             component:Dashboard,
    //             // beforeEnter: (to, from, next) => {
    //             //     axios.get("/api/authenticated")
    //             //     .then((res) => {
    //             //         next();
    //             //     }).catch((error) => {
    //             //        return next('/login')
    //             //     });


    //             // },
    //             // meta:{
    //             //     requiresAuth:true
    //             // },
    //             children:[
    //                 {
    //                     path:'admin',
    //                     name: "Admin",
    //                     component:adminDashboard,
    //                     meta:{
    //                         roles:['Admin']
    //                     }
    //                 },
    //                 {
    //                     path:'agent',
    //                     name: "EcommAgent",
    //                     component:userDashboard,
    //                     meta:{
    //                         roles:['EcommerceAgent']
    //                     }
    //                 },

    //             ]
    //         }
    //     ]
    // },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass:'red-text',
    routes,
})


router.beforeEach((to, from, next)=>{
    console.log(to);
    const loggedIn = localStorage.getItem('user')

    if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
        console.log('User is not authorized for this route.');
        next('/login')
        return
    }

    next()

})



export default router
