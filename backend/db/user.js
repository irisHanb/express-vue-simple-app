const users = [{ name: 'han', pw: 1111 }];

const userDB = {
  findUser({ name, pw }) {
    // console.log({ name, pw });
    const validator = user =>
      user.name === name && parseInt(user.pw) === parseInt(pw);
    return Promise.resolve().then(() => users.filter(validator)[0]);
  },
  addUser({ name, pw }) {
    return Promise.resolve().then(users.push({ name, pw }));
  }
};

module.exports = userDB;
