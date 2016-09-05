'use strict';

const getFormFields = require('../../..//lib/get-form-fields');

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
};

const onSignUp = () => {
  event.preventDefault();
  console.log('clicked sign up');
}

module.exports = {
  addHandlers,
};
