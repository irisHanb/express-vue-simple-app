<template>
  <div class>
    <h2>todo list</h2>
    <form>
      <input type="text" v-model="todoText">
      <button type="button" @click="addTodo">add todo</button>
    </form>
    <ul>
      <li v-for="todo in list" :key="todo.id">{{todo.text}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoText: null,
      list: []
    };
  },
  created() {
    this.$http.get("/todos").then(res => {
      this.list = [];
      this.list = res.data;
    });
  },
  methods: {
    addTodo() {}
  }
};
</script>

