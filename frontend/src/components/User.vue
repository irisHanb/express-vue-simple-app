<template>
  <div>
    <h1>Users</h1>
    <p>{{this.name}}</p>
  </div>
</template>


<script>
export default {
  created() {
    // this.$http.get("/api/users").then(res => (ths.name = res.data));
    console.log("hi~");
  },
  data() {
    return {
      name: ""
    };
  }
};
</script>

