<template>
  <div id="app">
    <div v-if="isUser">
      <h2>User Page</h2>
      <Menus></Menus>
      <router-view/>
    </div>
    <div v-else>
      <h2>Register</h2>
      <Register></Register>
    </div>
  </div>
</template>
<script>
import Menus from "./components/Menus.vue";
import Register from "./components/Register.vue";

import { mapState } from "vuex";

export default {
  data() {
    return {
      ...mapState(["isUser"])
    };
  },
  components: { Register, Menus }
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
