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

const checkRows = (id) => {
  console.log('checking rows for cell', id);
};

const checkCols = (id) => {
  console.log('checking cols for cell', id);
};

const checkDiagonals = (id) => {
  let cells = app.game.cells;
  let win = false;
  if ([0, 4, 8].indexOf(id) > -1) {
    win = (cells[0] === cells[4]) && (cells[4] === cells[8]);
  }
  if ([2, 4, 6].indexOf(id) > -1) {
    if ((cells[2] === cells[4]) && (cells[4] === cells[6])) {
      win = true;
    }
  }
  return win;
};

const checkWin = (id) => {
  console.log('checking for a win using cell', id);
  checkRows(id);
  checkCols(id);
  if ([0, 2, 4, 6, 8].indexOf(id) > -1) {
    if(checkDiagonals(id)) {
      console.log(app.game.cells[id], 'won!');
    }
  }
};

const markCell = (id) => {
  console.log('turn success!');
  let cell = $('.game-board').find( "[data-id='" + id + "']");
  if (app.xTurn) {
    cell.html('x');
  } else if (!app.xTurn) {
    cell.html('o');
  }
  if(app.currentGameMoves >= 5) {
    checkWin(id);
  }
  app.xTurn = !app.xTurn;
};

const takeTurnSuccess = (data) => {
  console.log(data);
  app.game = data.game;
  app.currentGameMoves++;
  console.log('current moves', app.currentGameMoves);
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