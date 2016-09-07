'use strict';

const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const logInSuccess = (data) => {
  console.log(data);
  app.user = data.user;
};

module.exports = {
  failure,
  success,
  logInSuccess,
};
