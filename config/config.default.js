'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}';

  // add your config here
  config.middleware = [];

  // change to your own sequelize configurations
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'egg_blog',
    username: 'root',
    password: '321504',
  };

  config.view = {
    mapping: {
      '.ejs': 'ejs',
    },
  }

  config.ejs = {
    layout: 'layout.ejs',
  };

  return config;
};
