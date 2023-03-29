<template>
    <!-- <div class="body authincation"> -->

    <div class="container mt-0">

        <div class="body">
            <div class="row align-items-center justify-contain-center">
                <div class="col-xl-12 mt-5">
                    <div class="card border-0">
                        <div class="card-body login-bx">
                            <div class="row">

                                <div class="offset-xl-3 col-xl-6 col-md-6 pe-0">
                                    <div class="sign-in-your">
                                        <div class="text-center mb-3">
                                            <img src="images/1.png" alt=""  class="mb-3" style="width:auto;">
                                            <h4 class="fs-20 font-w800 text-black"></h4>
                                            <h4 class="fs-20 font-w800 text-black">Already Have An Account</h4>
                                            <span class="dlab-sign-up">Sign In</span>

                                        </div>
                                        <form @submit.prevent="loginForm">
                                            <div class="mb-3">
                                                <label class="mb-1"><strong>Email Address</strong></label>
                                                <input type="email" v-model="form.email"  class="form-control" required>
                                                <span class="invalid-feedback" role="alert" v-if="errors.email">
                                                    <strong>{{ errors.name[0] }}</strong>
                                                </span>
                                            </div>
                                            <div class="mb-3">
                                                <label class="mb-1"><strong>Password</strong></label>
                                                <input type="password"  v-model="form.password" class="form-control" required>
                                            </div>
                                            <div class="row d-flex justify-content-between mt-4 mb-2">
                                                <div class="mb-3">
                                                <div class="form-check custom-checkbox ms-1">
                                                        <input type="checkbox" class="form-check-input" id="basic_checkbox_1">
                                                        <label class="form-check-label" for="basic_checkbox_1">Remember Me</label>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <router-link to="/forgot-password" class="btn btn-link"> Forgot Your Password?</router-link>

                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <button type="submit" class="btn btn-primary btn-block shadow">Sign Me In</button>
                                            </div>
                                        </form>
                                        <div class="text-center my-3">
                                            <span class="dlab-sign-up style-1">continue With</span>
                                        </div>
                                        <div class="mb-3 dlab-signup-icon">
                                            <button @click="useAuthProvider('google', null)" class="btn btn-outline-light"><i class="fa-brands fa-google me-2 google"></i>Google</button>
                                            <!-- <button @click="useAuthProvider('google', null)">auth Google</button> -->
                                            <!-- <button @click="AuthProvider('facebook')" class="btn btn-outline-light"><i class="fa-brands fa-facebook me-2 facebook"></i>Facebook</button>
                                            <button @click="SocailLogin('google')" class="btn btn-outline-light"><i class="fa-brands fa-google me-2 google"></i>Google</button>
                                            <button @click="AuthProvider('twitter')" class="btn btn-outline-light mt-lg-0 mt-md-1 mt-sm-0 mt-1 linked-btn"><i class="fa-brands fa-linkedin me-2 likedin"></i>linkedin</button>
                                        -->
                                        </div>
                                        <div class="text-center">
                                            <span>Don't Have An Account? <router-link to="/register" class="text-primary"> Sign Up</router-link></span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import { ProderT } from 'universal-social-auth'
import { Providers} from 'universal-social-auth'


export default {
    name: "Login",
    mounted() {
        console.log("Component mounted.");
    },
    setup: () => ({
        title: "Login page component",
    }),
   data() {
        return {
            form:{
                email:'',
                password:'',
            },
            
            errors:[],
            responseData: {
                provider: '',
                code: '',
            },
            rsp:'',
            hash: '',
            data: { tok: '' },
            fauth: false,
        }

    },
    methods: {
        ...mapActions(['Login']),
   
        // loginWithGoogle(){
        //     // this.$router.push('login/google');
        //     window.location.href ="http://localhost:8000/login/google";
        //     // window.location.href ="login/google";

        // },
        // loginWithFacebook(){
        //     this.$router.push('/auth/facebook/redirect');

        // },

        // AuthProvider(provider){
        //     this.$auth.authenticate(provider).then(response =>{
        //         self.SocailLogin(provider, response)
        //     }).catch(err=>{
        //         console.log({err:err})
        //     })
        // },
        // SocailLogin(provider, response){
        //     // this.$http.post('/login/google/'+provider,response).then(response=>{
        //     this.$http.get('/login/'+provider, response).then(response=>{
        //         console.log(response.data);
        //     }).catch(err => {
        //         console.log({err:err})
        //     })

          
        // },

    useAuthProvider (provider, proData) {
        const pro = proData

        const ProData = pro || Providers[provider]
        this.$Oauth.authenticate(provider, ProData).then((response) => {
            
            if (response) {
                alert(response);
                console.log(response);
                console.log(response.code);

                localStorage.setItem('res', JSON.stringify(response));
                
                this.responseData.code = response.code
                this.responseData.provider = provider
                this.useSocialLogin()
            }
        }).catch((err) => {
            console.log(err)
        })
    },

    useSocialLogin () {
      // otp from input Otp form
      // hash user data in your backend with Cache or save to database
      const pdata = { code: this.responseData.code, otp: this.data.tok, hash: this.hash }
      this.$axios.post('/api/login/' + this.responseData.provider, pdata).then(async (response) => {
          // `response` data base on your backend config
        if (response.data.status === 444) {
          hash.value = response.data.hash
          fauth.value = true // Option show Otp form incase you using 2fa or any addition security apply to your app you can handle all that from here

        }else if (response.data.status === 445) {
          //do something Optional

        }else {

          console.log(response)
          console.log(response.data.u)
          await useLoginFirst(response.data.u)
        
        }
      }).catch((err) => {

        console.log(err)
      })
    },

 useLoginFirst(e) {
      // this sample of to pust user data to my store
      // eslint-disable-next-line no-console
      console.log('userdata', e)
    },
        async loginForm() {
            const User = new FormData();
            User.append("email", this.form.email);
            User.append("password", this.form.password);

                console.log(User);
                await this.Login(User)
                .then((res)=>{

                    // console.log(res);
                    this.$toast.success(
                        'welcome Back',
                        {
                            position:"top-right",
                            duration: 5050,

                        }
                    );
                    // this.$toast.success(`Login Successful`);
                   //  this.$router.push({name: "Dashboard"});
                   // this.$router.push("/posts");
                   // this.showError = false
                   if (res.data.userType == "Admin") {
                        this.$router.push({name: "Admin"});

                   }else{
                        this.$router.push({name: "Dashboard"});

                   }

                }).catch((err)=>{

                    
                    this.$toast.error(
                        'Incorrect Credentials',
                        {
                            position:"top-right",
                            duration: 5050,

                        }
                    )
                   
                })

                

        },


    },
};
</script>

<style>

</style>
