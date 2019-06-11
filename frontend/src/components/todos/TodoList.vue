<template>
  <div class>
    <ul>
      <li v-for="todo in list" :key="todo.id">{{todo.text}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.$http.get("/todos").then(res => {
      this.list = res.data;
    });
  }
};
</script>

