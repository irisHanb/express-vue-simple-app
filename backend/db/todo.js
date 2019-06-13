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
    return Promise.resolve().then(users.push(todo));
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
