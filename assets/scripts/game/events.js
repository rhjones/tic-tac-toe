'use strict';

const api = require('./api');
const ui = require('./ui');

const onCreateGame = () => {
  event.preventDefault();
  api.createGame()
    .done(ui.success)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#new-game').on('click', onCreateGame);
};

module.exports = {
  addHandlers,
};