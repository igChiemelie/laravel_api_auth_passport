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
                                    <h4 class="text-center mb-5">Reset Password</h4>
                                    <form  @submit.prevent="handleSubmit">
                                        <div class="mb-3">
                                            <label><strong>Email</strong></label>
                                            <input type="email" v-model="form.email" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                            <label><strong>Password</strong></label>
                                            <input type="password" v-model="form.password" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                                <label class="mb-1"><strong>Confirm Password</strong></label>
                                                <input type="password"  v-model="form.cpassword" class="form-control">
                                            </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary btn-block">SUBMIT</button>
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
    name: 'ResetPassword',
    data() {
        return {
            form:{
                email:'',
                password:'',
                cpassword:'',

            },
            errors:[]
        }

    },
    methods: {

        async handleSubmit(){
            const response = await axios.post('/api/reset', {
                email:this.form.email,
                password:this.form.password,
                password_confirmation:this.form.cpassword,
                token:this.$route.params.token,
            });
            console.log(response);
            this.$router.push({name: "Login"});
        }



    }
}
</script>
