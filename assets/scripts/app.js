'use strict';

const app = {
  host: 'https://aqueous-atoll-85096.herokuapp.com',
  alerts: {
    welcome: {
      class: 'welcome',
      msg: '<span class="larger">Welcome!</span><br/>Click "New Game" to get started.',
    },
    xWin: {
      msg: '<h2><i class="fa fa-circle x" aria-hidden="true"></i> wins!</h2>',
    },
    yWin: {
      msg: '<h2><i class="fa fa-circle-o o" aria-hidden="true"></i> wins!</h2>',
    },
    tie: {
      msg: '<h2><i class="fa fa-star-half-o" aria-hidden="true"></i> Tie game</h2>',
    },
    passwordChangeFail: {
      class: 'warning',
      msg: '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Unable to change password.',
    },
    passwordChangeSuccess: {
      class: 'success',
      msg: '<i class="fa fa-lock" aria-hidden="true"></i> Your password has been changed.',
    },
    signUpFail: {
      class: 'warning',
      msg: '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Unable to create account.',
    },
    logInFail: {
      class: 'warning',
      msg: '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Unable to log in.',
    },
    logOutFail: {
      class: 'warning',
      msg: '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Unable to log out.',
    },
    createGameFail: {
      class: 'warning',
      msg: '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Unable to create a new game.',
    },
    endGameFail: {
      class: 'warning',
      msg: '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Unable to mark game as completed.',
    },
    turnFail: {
      class: 'warning',
      msg: '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Unable to save your move.',
    },
  },
};

module.exports = app;
