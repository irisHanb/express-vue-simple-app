var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  // console.log(req.body.email);
  res.send({ data: 'ok' });
});

module.exports = router;
