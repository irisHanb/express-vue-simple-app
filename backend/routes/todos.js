var express = require('express');
var router = express.Router();
var todoDB = require('../db/todo.js');

router.get('/', async (req, res, next) => {
  const todos = await todoDB.getList();
  console.log(todos);
  res.send(todos);
});

module.exports = router;
