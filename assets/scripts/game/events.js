'use strict';

const api = require('./api');
const ui = require('./ui');

const onCreateGame = () => {
  event.preventDefault();
  api.createGame()
    .done(ui.success)
    .fail(ui.failure);
};

const onClickCell = () => {
  event.preventDefault();
  let cell = $(event.target);
  // let id = cell.data('id');
  ui.isEmpty(cell);
};

const addHandlers = () => {
  $('#new-game').on('click', onCreateGame);
  $('.cell').on('click', onClickCell);
};

module.exports = {
  addHandlers,
};