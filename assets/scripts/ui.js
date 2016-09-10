'use strict';

const app = require('./app');
const game = require('./game/game');

// GENERIC UI ACTIONS

const clearForm = (formId) => {
  document.getElementById(formId).reset();
};

const message = (messageKey) => {
  let message = $('.messages div');
  console.log(message);
  $('.messages div')
    .removeClass()
    .addClass(app.alerts[messageKey].class)
    .html(app.alerts[messageKey].msg)
    .show()
    .delay(3000)
    .fadeToggle('slow');
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

const toggleNewGameButton = () => {
  if ($('.new-game').attr('disabled')) {
    $('.new-game').removeAttr('disabled');
  } else {
    $('.new-game').attr('disabled', 'disabled');
  }
};

const hideWelcome = () => {
  $('#welcome').hide();
};

const hideGameOver = () => {
  $('#game-over').hide();
};

// AUTH FAILURE

const logInFailure = () => {
  message('logInFail');
};

const logOutFailure = () => {
  message('logOutFail');
};

const passwordChangeFailure = () => {
  message('#password-change-fail');
};

const signUpFailure = () => {
  message('signUpFail');
};

// AUTH SUCCESS

const logInSuccess = (data) => {
  app.user = data.user;
  toggleAuth();
  toggleStats();
  clearForm('sign-up');
  clearForm('log-in');
  message('#welcome');
};

const logOutSuccess = () => {
  app.user = null;
  toggleStats();
  toggleAuth();
  $('#game-over').hide();
  clearForm('change-password');
  $('#welcome').hide();
  $('.new-game').removeAttr('disabled');
  $('.sign-up-link').removeClass('hidden');
  $('.log-in-link').addClass('hidden');
  $('#log-in').show();
  $('#sign-up').hide();
};

const passwordChangeSuccess = () => {
  toggleChangePassword();
  clearForm('change-password');
  message('#password-changed');
};

// GAME STATS

const displayStats = (stats) => {
  $('.win > .count').text(stats.wins);
  $('.lose > .count').text(stats.losses);
  $('.tie > .count').text(stats.ties);
};

// GAME FAILURE

const createGameFailure = () => {
  message('createGameFail');
};

const endGameFailure = () => {
  message('endGameFail');
};

const takeTurnFailure = () => {
  message('turnFail');
};

// GAME UI ACTIONS

const endGame = () => {
  if (game.winner === 'x') {
    $('#game-over').html('<h2><i class="fa fa-circle x" aria-hidden="true"></i> wins!</h2>');
  } else if (game.winner === 'o') {
    $('#game-over').html('<h2><i class="fa fa-circle-o o" aria-hidden="true"></i> wins!</h2>');
  } else if (game.winner === 'tie') {
    $('#game-over').html('<h2><i class="fa fa-star-half-o" aria-hidden="true"></i> Tie game</h2>');
  }

  $('#game-over').show();
  toggleNewGameButton();
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
  hideWelcome,
  toggleNewGameButton,
  createGameFailure,
  endGameFailure,
  takeTurnFailure,
  hideGameOver,
};
