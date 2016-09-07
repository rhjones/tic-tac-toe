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

const toggleAuth = () => {
  $('#sign-up-link').toggle();
  $('#log-in-link').toggle();
  $('#log-in').toggle('fast');
  $('#sign-up').toggle('fast');
};

module.exports = {
  failure,
  success,
  logInSuccess,
  toggleAuth,
};
