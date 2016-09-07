'use strict';

const api = require('./api');
const ui = require('./ui');

const onCreateGame = () => {
  event.preventDefault();
  api.createGame()
    .done(ui.createGameSuccess)
    .fail(ui.failure);
};

const onClickCell = () => {
  event.preventDefault();
  let cell = $(event.target);
  let id = cell.data('id');
  if(ui.isEmpty(id)) {
    api.takeTurn(id)
      .done(ui.takeTurnSuccess)
      .fail(ui.failure);
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