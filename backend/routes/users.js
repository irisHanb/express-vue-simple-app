var express = require('express');
var router = express.Router();
var userDB = require('../db/user.js');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await userDB.getUsers();
  res.send(users);

  // if (req.session.userId) console.log(req.session.userId);
  // res.send(req.session.userId);
});

// join
router.post('/join', async (req, res, next) => {
  const userId = await userDB.addUser({
    userId: req.body.userId,
    pw: req.body.pw
  });
  res.send({ userId });
});

router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.send({ msg: '로그아웃 되었습니다.' });
});

router.post('/login', (req, res, next) => {
  req.session.userId = req.body.userId;
  res.send({
    status: 'logined',
    msg: '로그인 되었습니다.',
    userId: req.session.userId
  });
});

module.exports = router;
