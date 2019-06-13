var express = require('express');
var router = express.Router();
var todoDB = require('../db/todo.js');

router.get('/', async (req, res, next) => {
  const todos = await todoDB.getList();
  // console.log(todos);
  res.send(todos);
});

router.post('/', async (req, res, next) => {
  console.log('post>', req.body.todo);
  const todos = await todoDB.addTodo(req.body.todo);
  res.send(todos);
});

module.exports = router;
