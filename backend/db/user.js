const users = [{ userId: 'han', pw: 1111 }];

const userDB = {
  getUsers() {
    return Promise.resolve().then(() => users);
  },
  findUser({ userId, pw }) {
    // console.log({ name, pw });
    const validator = user =>
      user.userId === userId && parseInt(userId) === parseInt(pw);
    return Promise.resolve().then(() => users.filter(validator)[0]);
  },
  addUser({ userId, pw }) {
    users.push({ userId, pw });
    console.log('db::users> ', users);
    return Promise.resolve().then(() => userId);
  }
};

module.exports = userDB;
