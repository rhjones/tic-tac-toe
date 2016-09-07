'use strict';

const api = require('./api');
const ui = require('./ui');
const gameLogic = require('./game-logic');

const onCreateGame = () => {
  event.preventDefault();
  api.createGame()
    .done(gameLogic.createGameSuccess)
    .fail(ui.failure);
};

const onClickCell = () => {
  console.log('click!');
  event.preventDefault();
  let cell = $(event.target);
  console.log('cell is', cell);
  let id = cell.data('id');
  if (gameLogic.isEmpty(id)) {
    api.takeTurn(id)
      .done(gameLogic.takeTurnSuccess)
      .fail(ui.failure);
  } else {
    console.log('cell is taken');
  }
};

const addHandlers = () => {
  $('#new-game').on('click', onCreateGame);
  $('.game-board > div > div').on('click', onClickCell);
};

module.exports = {
  addHandlers,
};
