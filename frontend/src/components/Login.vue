<template>
  <div>
    <h2>Log In</h2>
    <form @submit.prevent="login(email,password)">
      <input type="text" v-model="email" placeholder="Email Address">
      <input type="password" v-model="password" placeholder="Password">
      <input type="submit" value="Login">
    </form>
    <p>
      <i></i>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      msg: ""
    };
  },
  methods: {
    login(email, password) {
      this.$store
        .dispatch("LOGIN", { email, password })
        .then(() => this.redirect())
        .catch(({ message }) => alert(message));
    },
    redirect() {
      // const { search } = window.location;
      // const tokens = search.replace(/^\?/, "").split("&");
      // const { returnPath } = tokens.reduce((qs, tkn) => {
      //   const pair = tkn.split("=");
      //   qs[pair[0]] = decodeURIComponent(pair[1]);
      //   return qs;
      // }, {});

      this.$router.push("/");
    }
  }
};
</script>


<style lang="sass" scoped>


</style>


