<template>
  <div class>
    <h2>todo list</h2>
    <form>
      <input type="text" v-model="todoText" />
      <button type="button" @click="addTodo">add todo</button>
    </form>
    <ul>
      <li v-for="todo in list" :key="todo.id">
        {{todo.text}}
        <button>del</button>
      </li>
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
    this.$http.get("/api/todos").then(res => {
      this.list = [];
      this.list = res.data;
    });
  },
  methods: {
    addTodo() {
      const todo = {
        id: 3,
        text: this.todoText,
        done: false
      };
      this.$http.post("/api/todos", { todo }).then(res => {
        console.log("done>", res.data);

        this.todoText = null;
        this.list = [...res.data];
      });
    }
  }
};
</script>

