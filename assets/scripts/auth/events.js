'use strict';

const getFormFields = require('../../..//lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
};

const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
}

module.exports = {
  addHandlers,
};
