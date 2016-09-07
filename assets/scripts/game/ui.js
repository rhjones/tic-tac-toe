'use strict';

const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const createGameSuccess = (data) => {
  console.log(data);
  app.game = data.game;
};

const isEmpty = (id) => {
  console.log(id);
  console.log(app.game.cells);
  console.log(app.game.cells[id]);
  return (!app.game.cells[id]);
};

const markCell = (id) => {
  console.log('turn success!');
  let cell = $('.game-board').find( "[data-id='" + id + "']");
  console.log(cell);
  if (app.xTurn) {
    cell.html('x');
  } else if (!app.xTurn) {
    cell.html('o');
  }
  app.xTurn = !app.xTurn;
};

const takeTurnSuccess = (data) => {
  console.log(data);
  app.game = data.game;
  markCell(app.currentCellId);
};

module.exports = {
  failure,
  success,
  createGameSuccess,
  isEmpty,
  markCell,
  takeTurnSuccess,
};