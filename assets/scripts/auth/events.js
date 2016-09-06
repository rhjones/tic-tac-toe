'use strict';

const getFormFields = require('../../..//lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onLogIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.logIn(data)
    .done(ui.logInSuccess)
    .fail(ui.failure);
};

const onLogOut = (event) => {
  event.preventDefault();
  api.logOut()
    .done(ui.success)
    .fail(ui.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.success)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#log-in').on('submit', onLogIn);
  $('#log-out').on('submit', onLogOut);
  $('#change-password').on('submit', onChangePassword);
};

module.exports = {
  addHandlers,
};
