const user = require('./user/user.service.js');
const userReset = require('./user-reset/user-reset.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(user);
  app.configure(userReset);
};
