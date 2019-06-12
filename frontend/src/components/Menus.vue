<template>
  <div class="user">
    <div class="user__header"></div>

    <a @click.prevent="onClickLogout">Logout</a>
  </div>
</template>
<script>
import store from "../store";

export default {
  computed: {
    isAuthenticated() {
      return store.getters.isAuthenticated;
    }
  },
  methods: {
    onClickLogout() {
      store.dispatch("LOGOUT").then(() => this.$router.push("/"));
    }
  }
};
</script>
<style lang="scss">
a {
  margin: 0 20px;
}
</style>


