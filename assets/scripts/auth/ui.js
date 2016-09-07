'use strict';

const app = require('../app');

// GENERIC UI ACTIONS

const message = (messageId) => {
  $(messageId).show().delay(3000).fadeToggle('slow');
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

const toggleChangePassword = () => {
  $('#change-password').toggle();
};

// AJAX FAILURE

const logInFailure = () => {
  message('#log-in-fail');
};

const logOutFailure = () => {
  message('#log-out-fail');
};

const passwordChangeFailure = () => {
  message('#password-change-fail');
};

const signUpFailure = () => {
  message('#sign-up-fail');
};

// AJAX SUCCESS

const logInSuccess = (data) => {
  app.user = data.user;
  toggleAuth();
};

const logOutSuccess = () => {
  app.user = null;
  toggleAuth();
};

const passwordChangeSuccess = () => {
  toggleChangePassword();
  message('#password-changed');
};

module.exports = {
  toggleAuthOptions,
  toggleChangePassword,
  logInFailure,
  logOutFailure,
  passwordChangeFailure,
  signUpFailure,
  logInSuccess,
  logOutSuccess,
  passwordChangeSuccess,
};
