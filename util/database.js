const Sequelize = require('sequelize');

const sequelize = new Sequelize('online-store', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
