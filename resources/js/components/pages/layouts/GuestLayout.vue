<template>
  <link rel="stylesheet" href="css/style.css" />

  <nav class="navbar navbar-expand-md navbar-light color shadow-sm">
    <div class="container" style="margin-top: 1rem">
      <router-link class="mr-4 nav-link" to="/" exact>Home</router-link>
      <router-link class="mr-4 nav-link d-lg-block" to="/about">About</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="{{ __('Toggle navigation') }}"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left Side Of Navbar -->
        <!-- <ul class="navbar-nav me-auto"></ul> -->

        <!-- Right Side Of Navbar -->
        <ul v-if="isLogged" class="navbar-nav ms-auto">
            <!-- <li class="nav-item">
                <router-link class="mr-4 nav-link" to="/dashboard">Dashboard</router-link>
            </li> -->
            <li>logged in</li>


            <li class="nav-item" style="padding: 0.5rem 0.4rem;">
                <a  v-for="user in userData" :key="user.id">
                    {{ user.name }}
                </a>
            </li>

          <li class="nav-item dropdown" >

            <a id="navbarDropdown" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
            </a>


            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" @click.prevent="logout"> Logout </a>
            </div>
          </li>
        </ul>

        <!-- v-else-if="!user_details.id" -->
        <ul class="navbar-nav ms-auto" v-else>
          <!-- Authentication Links -->
          <!-- <router-link class="mr-4 nav-link d-lg-none" to="/about">About</router-link> -->
          <router-link class="mr-4 nav-link" to="/login" exact>Login</router-link>
          <router-link class="mr-4 nav-link" to="/register">Register</router-link>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
    };
  },
    // computed: mapGetters(["userData"]),
  computed: {
    // ...mapGetters(["isLogged", "userData"]),
    ...mapGetters(["isLogged"]),
  },
  // mounted() {
  //   axios.get("/api/user").then((res) => {
  //     this.user_details = res.data;
  //   });
  // },
  // created() {
  //     this.getUser();
  // },
  methods: {
    logout() {
      this.$store.dispatch("Logout").then(() => {
        this.$router.push("/login");
      });
    },

    // getUser() {
    //   axios
    //     .get("/api/auth-user")
    //     .then((res) => {
    //       this.user_details = res.data;
    //     })
    //     .catch((error) => {
    //       console.log(console.error);
    //     });
    // },

    // logout() {
    //   axios
    //     .post("/api/logout")
    //     .then(() => {
    //       this.$router.push("/login");
    //       this.user_details = {};
    //     })
    //     .catch((err) => {
    //       // this.errors = err.response.data.errors;
    //       console.log(err);
    //     });
    // },
  },
};
</script>
<style>
.color {
  background-color: #33a9ff;
}
.red-text {
  color: red;
}
</style>
