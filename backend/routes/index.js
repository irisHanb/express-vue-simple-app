var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log();
  // res.render('index', { title: 'Express' });
  requestAnimationFrame.sendFile(
    path.join(__dirname, '../public', 'index.html')
  );
});

module.exports = router;
