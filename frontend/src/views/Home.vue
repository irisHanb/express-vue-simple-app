<template>
  <div class>
    <div class="header">
      <h2></h2>
      <span v-if="userId">{{userId}} 님 반갑습니다.</span>
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
  data() {
    return {
      // id: null
    };
  },
  components: { Menus },
  created() {},
  computed: {
    ...mapState(["userId"])
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout").then(res => {
        this.$router.push({ name: "register" });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
