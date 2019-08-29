const bcrypt = require('bcryptjs');
const { promisify } = require('util')

const bhashPromisify = promisify(bcrypt.hash)

function beforeCreate(user, options) {
  return bhashPromisify(user.password, 10).then(hash => {
    user.password = hash
    return user
  })
}

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    name: STRING(30),
    password: STRING(32),
    age: INTEGER,
    last_sign_in_at: DATE,
    created_at: DATE,
    updated_at: DATE,
  }, {
      hooks: {
        beforeCreate: beforeCreate
      }
    });

  return User;
};