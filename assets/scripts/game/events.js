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

const makeMove = (data) => {
  let result = gameLogic.takeTurnSuccess(data);
  if (result === 'x') {
    console.log('x won!');
    api.endGame()
      .done(ui.success)
      .fail(ui.failure);
  } else if (result === 'o') {
    console.log('o won!');
  } else if (result === 'tie') {
    console.log('tie!');
  }
};

const onClickCell = () => {
  console.log('click!');
  event.preventDefault();
  let cell = $(event.target);
  console.log('cell is', cell);
  let id = cell.data('id');
  if (gameLogic.isEmpty(id)) {
    api.takeTurn(id)
      .done(makeMove)
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
