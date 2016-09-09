'use strict';

const app = require('./app');
const game = require('./game/game');

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
  $('.stats').toggleClass('inline-block');
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
  $('#welcome').show();
};

const logOutSuccess = () => {
  app.user = null;
  toggleStats();
  toggleAuth();
  $('#welcome').hide();
};

const passwordChangeSuccess = () => {
  toggleChangePassword();
  message('#password-changed');
};

// GAME STATS

const displayStats = (stats) => {
  $('.win > .count').text(stats.wins);
  $('.lose > .count').text(stats.losses);
  $('.tie > .count').text(stats.ties);
};

const gameMessage = (messageId) => {
  $(messageId).show().delay(3000).fadeToggle('slow');
};

const createGameFailure = () => {
  gameMessage('#create-game-fail');
};

const endGameFailure = () => {
  gameMessage('#end-game-fail');
};

const takeTurnFailure = () => {
  gameMessage('#turn-fail');
};

const clearCells = () => {
  for (let i = 0; i < 9; i++) {
    let cell = $('.game-board').find("[data-id='" + i + "']");
    cell.html('');
  }
};

const toggleNewGameButton = () => {
  if($('.new-game').attr('disabled')) {
    $('.new-game').removeAttr('disabled');
  } else {
    $('.new-game').attr('disabled', 'disabled');
  }
};

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
  console.log('winner is', game.winner);
};

const invalidMove = () => {
  console.log('bad move');
};

const markCell = (id) => {
  console.log('turn success!');
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

const hideWelcome = () => {
  $('#welcome').hide();
};

const hideGameOver = () => {
  $('#game-over').hide();
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
  invalidMove,
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
