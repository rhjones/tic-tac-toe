'use strict';

const game = require('./game');
const ui = require('./ui');

const createGameSuccess = (data) => {
  console.log(data);
  ui.clearCells();
  game.currentGame = data.game;
};

const isEmpty = (id) => {
  console.log(id);
  console.log(game.currentGame.cells);
  console.log(game.currentGame.cells[id]);
  return (!game.currentGame.cells[id]);
};

module.exports = {
  createGameSuccess,
  isEmpty,
};
