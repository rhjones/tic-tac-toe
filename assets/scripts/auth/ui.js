'use strict';

const app = require('../app');
const game = require('../game/game');

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

const toggleChangePassword = () => {
  if (game.currentGame !== null) {
    console.log($('#warning'));
    $('#saving-game').show().delay(3000).toggle('slow', 'swing', function() {
      $('#change-password').toggle('slow');
    });
  }
  else {
    $('.game-play').toggle();
    $('#change-password').toggle();
  }
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
  toggleChangePassword,
};
