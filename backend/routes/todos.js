var express = require('express');
var router = express.Router();
var todos = require('../db/todos.json');

router.get('/', function(req, res, next) {
  console.log(todos);
  res.send(todos);
});

module.exports = router;
