<template>
  <!-- <body class="vh-100"> -->
  <div class="authincation">
    <div class="container">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col-md-6">
          <div class="authincation-content">
            <div class="row no-gutters">
              <div class="col-xl-12">
                <div class="auth-form">
                  <div class="text-center mb-3">
                    <a><img src="images/1.png" alt="" style="width: auto" /></a>
                  </div>
                  <h4 class="text-center mb-4">Create an Account</h4>
                  <form @submit.prevent="saveForm">
                    <div class="mb-3">
                      <label class="mb-1"><strong>Name</strong></label>
                      <input
                        type="text"
                        v-model="form.name"
                        class="form-control"
                        placeholder="name"
                      />

                      <span class="invalid-feedback" role="alert" v-if="errors.name">
                        <strong>{{ errors.name[0] }}</strong>
                      </span>
                    </div>

                    <div class="mb-3">
                      <label class="mb-1"><strong>Email</strong></label>
                      <input
                        type="email"
                        v-model="form.email"
                        class="form-control"
                        placeholder="hello@example.com"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="mb-1"><strong>Phone</strong></label>
                      <input type="number" v-model="form.phone" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="mb-1"><strong>Password</strong></label>
                      <input
                        type="password"
                        v-model="form.password"
                        class="form-control"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="mb-1"><strong>Confirm Password</strong></label>
                      <input
                        type="password"
                        v-model="form.password_confirmation"
                        class="form-control"
                      />
                    </div>



                    <div class="row mb-3">
                        <label for="gender" class="col-sm-12 col-form-label">Gender</label>
                        <div class="col-sm-12">
                            <select name="department" class="form-control" v-model="form.gender" >
                                <option value="#">Gender</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>

                            <span class="invalid-feedback" role="alert">
                                <strong></strong>
                            </span>
                        </div>
                    </div>
                    <div class="text-center mt-4">
                      <button type="submit" class="btn btn-primary btn-block">
                        Sign me up
                      </button>
                    </div>
                  </form>
                  <div class="new-account mt-3">
                    <p>
                      Already have an account?
                      <router-link class="text-primary" to="/login">Sign in</router-link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- </body> -->
</template>
<style scoped></style>

<script>
import { mapActions } from "vuex";

export default {
  mounted() {
    console.log("Component mounted.");
  },
  setup: () => ({
    title: "Register page component",
  }),
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone: "",
        gender: "",
        userType: "user",
      },
      errors: [],
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async saveForm() {
        const UserForm = new FormData();
        UserForm.append('name', this.form.name);
        UserForm.append('email', this.form.email);
        UserForm.append('password', this.form.password);
        UserForm.append('password_confirmation', this.form.password_confirmation);
        UserForm.append('phone', this.form.phone);
        UserForm.append('password', this.form.password);
        UserForm.append('gender', this.form.gender);
        UserForm.append('userType', this.form.userType);
        try {

            await this.Register(UserForm)
            .then((res) => {
                this.$toast.success(
                        'Registration successful',
                        {
                            position:"top-right",
                            duration: 5050,

                        }
                    )
// rujecowa@mailinator.com
                this.$router.push("/login")
                console.log(res);
                console.log(res.data);
            })
            // this.showError = false
        } catch (error) {
            // this.showError = true
            this.$toast.error(
            'Error',
            {
              position: "top-right",
              duration: 5050,
            }
          );
          console.log(error);
        }
    },

  },
};
</script>
