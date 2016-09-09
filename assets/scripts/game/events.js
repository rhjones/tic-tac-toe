'use strict';

const api = require('./api');
const ui = require('../ui');
const logic = require('./logic');

const getStats = (data) => {
  let stats = logic.calculateGameStats(data);
  ui.displayStats(stats);
};

const onGetStats = () => {
  api.getFinishedGames()
    .done(getStats)
    .fail();
};

const onCreateGame = () => {
  event.preventDefault();
  api.createGame()
    .done(logic.createGameSuccess)
    .fail(ui.createGameFailure);
};

const onEndGameSuccess = (data) => {
  logic.updateGame(data);
  ui.endGame();
  onGetStats(data);
};

const makeMove = (data) => {
  let result = logic.takeTurnSuccess(data);

  // if result is true or 'tie' (but not false)
  if (result) {
    api.endGame()
      .done(onEndGameSuccess)
      .fail(ui.endGameFailure);
  } else {
    ui.indicatePlayer();
  }
};

const onClickCell = () => {
  event.preventDefault();
  let id = $(event.target).data('id');
  if (logic.isValidMove(id)) {
    api.takeTurn(id)
      .done(makeMove)
      .fail(ui.takeTurnFailure);
  }
};

const addHandlers = () => {
  $('.new-game').on('click', onCreateGame);
  $('.game-board > div > div').on('click', onClickCell);
};

module.exports = {
  addHandlers,
  onGetStats,
};
