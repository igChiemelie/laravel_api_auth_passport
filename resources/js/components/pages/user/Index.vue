<template>
  <div class="flex bg-gray-100 border-b border-gray-300 py-4">
    <div class="container mx-auto flex justify-between">
      <div class="container mx-auto py-2">
        <div>
          <!-- working -->

          <!-- {{ userData }} -->
          <!-- {{ user.data.email }} -->
          <!-- JI ON FIRE!!! -->
          <ul>
            <li>UserId: {{ userData.data.id }}</li>
            <li>Email: {{ userData.data.email }}</li>
            <li>Gender: {{ userData.data.gender }}</li>
            <li>Created_on: {{ userData.data.created_at }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import axios from "axios";
// axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
//   "token"
// )}`;

export default {
  name: "Dashboard",

  data() {
    return {};
  },

  mounted() {},
  computed: mapGetters(["userData"]),
  // created() {
  //     this.getUser();
  // },
  methods: {},
};
</script>
