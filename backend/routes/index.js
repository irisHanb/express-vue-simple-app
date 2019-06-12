var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // req.session.destroy();
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
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
// router.get('/join', function(req, res, next) {
//   res.send('join');
// });

router.post('/join', function(req, res, next) {
  if (!req.session.users) req.session.users = [];
  req.session.users.push(req.body.user);
  // req.session.user = req.body.user;
  res.send({
    status: 'ok',
    msg: '회원가입이 완료되었습니다.',
    user: req.body.user
  });
});

//=== login
router.post('/login', function(req, res, next) {
  const tgUser = req.body.user;
  const user = req.session.users.filter(user => user.id === tgUser.id)[0];
  // console.log(user.pw, tgUser.pw);
  if (user) {
    if (parseInt(user.pw) == parseInt(tgUser.pw)) {
      res.send({
        status: 'matched',
        msg: '로그인에 성공했습니다.',
        user: tgUser
      });
    } else {
      res.send({
        status: 'not',
        msg: '비밀번호를 다시 입력해주세요.',
        user: tgUser
      });
    }
  } else {
    res.send({
      status: 'error',
      msg: '회원정보가 없습니다. 회원가입을 해주세요.',
      user: tgUser
    });
  }
});

//=== login
router.post('/logout', function(req, res, next) {
  // req.session.destroy();
  res.send({ status: 'ok', msg: '로그아웃 되었습니다.' });
});

module.exports = router;
