<template>
     <div class="authincation h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-6">
                    <div class="authincation-content">
                        <div class="row no-gutters">
                            <div class="col-xl-12">
                                <div class="auth-form">
									<div class="text-center mb-3">
										<a><img src="images/1.png" alt="" style="width:auto;"></a>
									</div>
                                    <h4 class="text-center mb-5">Forgot Password</h4>
                                    <form  @submit.prevent="forgotPassword">
                                        <div class="mb-3">
                                            <label><strong>Email</strong></label>
                                            <input type="email" v-model="form.email" class="form-control" placeholder="hello@example.com" required>
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary btn-block">SUBMIT</button>
                                        </div>
                                        <div class="new-account mt-3">

                                            <p>Already have an account? <router-link class="text-primary" to="/login">Sign in</router-link></p>
                                        </div>
                                    </form>
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

import axios from 'axios';
export default {
    name: 'ForgotPassword',
    data() {
        return {
            form:{
                email:'',

            },
            errors:[]
        }

    },
    methods: {


        async forgotPassword(){
                try {
                    const response = await axios.post('/api/forgot', {
                        email:this.form.email
                    })

                    console.log(response);
                    if (response.status !== 200) {
                        // alert('error');
                        // this.$swal(response.data.status);
                        this.$toast.error(
                            response.data.status,
                            {
                                position:"top-right",
                                duration: 5050,
                            }
                        );
                    }else{
                        alert(response.data.status);
                        this.$toast.success(
                            response.data.status,
                            {
                                position:"top-right",
                                duration: 5050,
                            }
                        );
                    }

                } catch (error) {
                    // this.showError = true
                        this.$toast.error(
                        'Error \n We can"t find a user with this email address',
                           
                            {
                                position: "top-right",
                                duration: 5050,
                            }
                        );
                    // console.log(error.status);
                    console.error(error);

                }

            // console.log(response);
        }



    }
}
</script>
