'use strict';

const app = require('../app');
const gameLogic = require('../game/logic.js');

// GENERIC UI ACTIONS

const message = (messageId) => {
  $(messageId).show().delay(3000).fadeToggle('slow');
};

const toggleAuth = () => {
  $('.auth-nav').toggle();
  $('.auth-forms').toggle();
  $('.user-nav').toggle();
  $('.game-play').toggle();
};

const toggleAuthOptions = () => {
  $('.sign-up-link').toggleClass('hidden');
  $('.log-in-link').toggleClass('block');
  $('#log-in').toggle('fast');
  $('#sign-up').toggle('fast');
};

const toggleChangePassword = () => {
  $('#change-password').toggle();
};

const toggleStats = () => {
  $('.stats').toggle();
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
  toggleStats();
};

const logOutSuccess = () => {
  app.user = null;
  toggleStats();
  toggleAuth();
};

const passwordChangeSuccess = () => {
  toggleChangePassword();
  message('#password-changed');
};

// GAME STATS

const displayStats = (data) => {
  let stats = gameLogic.calculateGameStats(data);
  $('.wins').text(stats.wins);
  $('.losses').text(stats.losses);
  $('.ties').text(stats.ties);
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
  displayStats,
};
