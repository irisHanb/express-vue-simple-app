<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import Menus from "./components/Menus.vue";
import Register from "./views/Register.vue";

import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["user"])
  },
  components: { Register, Menus },
  created() {
    this.$http.get("/api/users").then(res => console.log("users> ", res.data));
  },
  mehtods: {}
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.wrap {
  margin: 0 auto;
  width: 600px;
}
</style>
