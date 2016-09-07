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

const onEndGameSuccess = (data) => {
  gameLogic.updateGame(data);
  ui.endGame();
};

const makeMove = (data) => {
  let result = gameLogic.takeTurnSuccess(data);
  // if result is true or 'tie' (but not false)
  if (result) {
    api.endGame()
      .done(onEndGameSuccess)
      .fail(ui.failure);
  }
};

const onClickCell = () => {
  console.log('click!');
  event.preventDefault();
  let cell = $(event.target);
  console.log('cell is', cell);
  let id = cell.data('id');
  if (gameLogic.isValidMove(id)) {
    api.takeTurn(id)
      .done(makeMove)
      .fail(ui.failure);
  } else {
    ui.invalidMove();
  }
};

const addHandlers = () => {
  $('#new-game').on('click', onCreateGame);
  $('.game-board > div > div').on('click', onClickCell);
};

module.exports = {
  addHandlers,
};
