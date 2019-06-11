<template>
  <div class="me">
    <h2>Me</h2>
    <div class>
      <label for>UserInfo:</label>
      <pre>{{user}}</pre>
      <div class>
        <label for>Access Log:</label>
        <div v-for="log in accessLog" key>{{log.userId}}, {{log.createdAt}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: null,
      accessLog: []
    };
  },
  created() {
    this.$http.get("/me").then(res => {
      console.log("lalal");
      // this.user = res.user;
      // this.accessLog = res.accessLog;
    });
  }
};
</script>

