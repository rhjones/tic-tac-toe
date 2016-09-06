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
  if(ui.isEmpty(cell)) {
    ui.takeTurn(cell);
  } else {
    console.log('cell is taken');
  }
};

const addHandlers = () => {
  $('#new-game').on('click', onCreateGame);
  $('.cell').on('click', onClickCell);
};

module.exports = {
  addHandlers,
};