<template>
  <div class>
    <div class="header">
      <h2></h2>
      <span v-if="user">{{user.id}} 님 반갑습니다.</span>
      <a href @click.prevent="onLogout">logout</a>
    </div>
    <nav>
      <router-link to="/todos">todos</router-link>
      <router-link to="/memos">memos</router-link>
    </nav>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menus from "../components/Menus.vue";
import { mapState } from "vuex";

export default {
  components: { Menus },
  created() {
    this.$http.get("/").then(res => console.log(res));
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout").then(res => {
        this.$router.push({ name: "register" });
      });
    }
  }
  // props: {
  //   msg: String
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
