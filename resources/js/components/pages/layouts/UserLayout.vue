<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="container">
        <ul class="navbar-nav ms-auto">
          <router-link class="mr-4 nav-link" to="/" exact>Home</router-link>
          <router-link class="mr-4 nav-link" to="/about">About</router-link>
        </ul>

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
          <ul class="navbar-nav me-auto"></ul>

          <!-- Right Side Of Navbar -->
          <ul class="navbar-nav ms-auto">
            <!-- Authentication Links -->

            <div
              class="dropdown-item nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ user_details.name }}
            </div>

            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" @click.prevent="logout"> Logout </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  // props:[],
  data() {
    return {
      user_details: {},
      test: "working!not",
    };
  },
  mounted() {
    axios.get("/api/user").then((res) => {
      this.user_details = res.data;
    });
  },
  //   created() {
  //     this.getUser();
  //   },
  methods: {
    // async getUser() {
    //   await axios
    //     .get("/api/user")
    //     .then((res) => {
    //       this.user_details = res.data;
    //     })
    //     .catch((error) => {
    //       console.log(console.error);
    //     });
    // },
    logout() {
      axios
        .post("/api/logout")
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          // this.errors = err.response.data.errors;
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
