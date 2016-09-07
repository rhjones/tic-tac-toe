'use strict';

const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const toggleAuth = () => {
  $('.auth-buttons').toggle();
  $('.auth-forms').toggle();
  $('.user-buttons').toggle();
  $('.game-play').toggle();
};

const toggleAuthOptions = () => {
  $('#sign-up-link').toggle();
  $('#log-in-link').toggle();
  $('#log-in').toggle('fast');
  $('#sign-up').toggle('fast');
};

const logInSuccess = (data) => {
  app.user = data.user;
  toggleAuth();
};

const logOutSuccess = () => {
  app.user = null;
  toggleAuth();
};

module.exports = {
  failure,
  success,
  logInSuccess,
  logOutSuccess,
  toggleAuthOptions,
};
