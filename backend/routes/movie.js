var express = require('express');
var router = express.Router();
var movies = require('../movies.json');

router.get('/', (req, res, next) => {
  console.log('movie index');
  res.send(movies);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  console.log('movie show>>> ', id);
  const movie = movies.filter(movie => movie.id === id);
  console.dir(movie);
  res.send(movie);
});

module.exports = router;
