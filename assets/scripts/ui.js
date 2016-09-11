'use strict';

const app = require('./app');
const game = require('./game/game');

// GENERIC UI ACTIONS

const clearForm = (formId) => {
  document.getElementById(formId).reset();
};

const messageFade = (location, messageKey) => {
  $(location)
    .removeClass()
    .addClass(app.alerts[messageKey].class)
    .html(app.alerts[messageKey].msg)
    .show()
    .delay(3000)
    .fadeToggle('slow');
};

const messageStick = (location, messageKey) => {
  $(location)
    .removeClass()
    .addClass(app.alerts[messageKey].class)
    .html(app.alerts[messageKey].msg)
    .show();
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
  $('.pwd-form').slideToggle();
};

const toggleStats = () => {
  $('.stats').toggleClass('inline-block');
};

const clearCells = () => {
  for (let i = 0; i < 9; i++) {
    let cell = $('.game-board').find("[data-id='" + i + "']");
    cell.html('');
  }
};

const hideGameMessages = () => {
  $('.game-messages').hide();
};

const hideGameOver = () => {
  $('#game-over').hide();
};

// AUTH FAILURE

const logInFailure = () => {
  messageFade('.messages div', 'logInFail');
};

const logOutFailure = () => {
  messageFade('.messages div', 'logOutFail');
};

const passwordChangeFailure = () => {
  messageFade('.messages div', 'passwordChangeFail');
};

const signUpFailure = () => {
  messageFade('.messages div', 'signUpFail');
};

// AUTH SUCCESS

const logInSuccess = (data) => {
  app.user = data.user;
  toggleAuth();
  toggleStats();
  clearForm('sign-up');
  clearForm('log-in');
  messageStick('.game-message div', 'welcome');
  $('.game-messages').show();
};

const logOutSuccess = () => {
  app.user = null;
  toggleStats();
  toggleAuth();
  $('#game-over').hide();
  clearForm('change-password');
  $('#welcome').hide();
  $('.sign-up-link').removeClass('hidden');
  $('.log-in-link').addClass('hidden');
  $('#log-in').show();
  $('#sign-up').hide();
  $('.game-messages').hide();
};

const passwordChangeSuccess = () => {
  toggleChangePassword();
  clearForm('change-password');
  messageFade('.messages div', 'passwordChangeSuccess');
};

// GAME STATS

const displayStats = (stats) => {
  $('.win > .count').text(stats.wins);
  $('.lose > .count').text(stats.losses);
  $('.tie > .count').text(stats.ties);
};

// GAME FAILURE

const createGameFailure = () => {
  messageFade('.messages div', 'createGameFail');
};

const endGameFailure = () => {
  messageFade('.messages div', 'endGameFail');
};

const takeTurnFailure = () => {
  messageFade('.messages div', 'turnFail');
};

// GAME UI ACTIONS

const endGame = () => {
  if (game.winner === 'x') {
    messageStick('.game-message div', 'xWin');
  } else if (game.winner === 'o') {
    messageStick('.game-message div', 'oWin');
  } else if (game.winner === 'tie') {
    messageStick('.game-message div', 'tie');
  }
  $('.game-messages').show();
};

const markCell = (id) => {
  let cell = $('.game-board').find("[data-id='" + id + "']");
  if (game.xTurn) {
    cell.html('<i class="fa fa-circle x" aria-hidden="true"></i>');
  } else if (!game.xTurn) {
    cell.html('<i class="fa fa-circle-o o" aria-hidden="true"></i>');
  }
};

const setPlayerX = () => {
  $('.fa-arrow-right').fadeIn('fast');
};

const indicatePlayer = () => {
  $('.fa-arrow-right').fadeToggle('fast');
  $('.fa-arrow-left').fadeToggle('fast');
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
  clearCells,
  endGame,
  markCell,
  indicatePlayer,
  setPlayerX,
  hideGameMessages,
  createGameFailure,
  endGameFailure,
  takeTurnFailure,
  hideGameOver,
};
