'use strict';

const api = require('./api');
const ui = require('./ui');
const logic = require('./logic');

const onCreateGame = () => {
  event.preventDefault();
  api.createGame()
    .done(logic.createGameSuccess)
    .fail(ui.failure);
};

const onEndGameSuccess = (data) => {
  logic.updateGame(data);
  ui.endGame();
};

const makeMove = (data) => {
  let result = logic.takeTurnSuccess(data);

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
  let id = $(event.target).data('id');
  if (logic.isValidMove(id)) {
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
