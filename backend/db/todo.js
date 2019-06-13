const todos = [
  {
    id: 1,
    text: '333',
    done: true
  },
  {
    id: 2,
    text: '222',
    done: false
  }
];

const todoDB = {
  addTodo(todo) {
    console.log('addtodo', todo);
    todos.push(todo);
    return Promise.resolve().then(() => todos);
  },
  getList() {
    return Promise.resolve().then(() => todos);
  },
  deleteTodo(tgTodo) {
    const validator = todo => todo.id != tgTodo.id;
    return Promise.resolve().then(() => todos.filter(validator));
  }
};

module.exports = todoDB;
