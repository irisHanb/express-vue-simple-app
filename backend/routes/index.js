var express = require('express');
var router = express.Router();
const userDB = require('../db/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hi');
  // res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// ? post는 없나?
router.post('/', function(req, res, next) {
  console.log('/ post');
  res.send('post');
});

router.get('/register', function(req, res, next) {});

router.get('/home', function(req, res, next) {
  console.log('homne>>>>> ');
  if (req.session.user) {
    res.send({
      status: 'ok',
      msg: '회원가입이 완료되었습니다.',
      user: req.session.user
    });
  } else {
    res.send({
      status: 'error',
      msg: '회원가입 혹은 로그인 후 이용해 주세요.'
    });
  }
});

//=== join
router.post('/join', async (req, res, next) => {
  const result = await userDB.addUser({
    name: req.body.name,
    pw: req.body.pw
  });
  // console.log(result);
  res.send({
    status: 'ok',
    msg: '회원가입이 완료되었습니다.'
  });
});

//=== login
router.post('/login', async (req, res, next) => {
  const user = await userDB.findUser({
    name: req.body.name,
    pw: req.body.pw
  });
  req.session.loged = true;
  console.log('....', user);
  if (user) {
    res.send({
      status: 'matched',
      msg: '로그인에 성공했습니다.'
    });
  } else {
    res.send({
      status: 'error',
      msg: '회원정보가 없습니다. 회원가입을 해주세요.'
    });
  }
});

//=== login
router.post('/logout', function(req, res, next) {
  req.session.destroy();
  res.send({ status: 'ok', msg: '로그아웃 되었습니다.' });
});

module.exports = router;
