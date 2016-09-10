'use strict';

const app = {
  host: 'https://aqueous-atoll-85096.herokuapp.com',
  alerts: {
    passwordChanged: {
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
