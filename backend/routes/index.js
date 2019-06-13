var express = require('express');
var router = express.Router();
const userDB = require('../db/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(req.session);
  // res.send(req.session.userId);
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// ? post는 없나?
router.post('/', function(req, res, next) {
  console.log('/ post', req.body.userId);
  res.send('post');
});

module.exports = router;
