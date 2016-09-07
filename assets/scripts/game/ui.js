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

const checkRows = (cells, id) => {
  console.log('checking rows for cell', id);
  if ([0, 1, 2].indexOf(id) > -1) {
    return ((cells[0] === cells[1]) && (cells[1] === cells[2]));
  }
  if ([3, 4, 5].indexOf(id) > -1) {
    return ((cells[2] === cells[4]) && (cells[4] === cells[5]));
  }
  if ([6, 7, 8].indexOf(id) > -1) {
    return ((cells[6] === cells[7]) && (cells[7] === cells[8]));
  }
};

const checkCols = (id) => {
  console.log('checking cols for cell', id);
};

const checkDiagonals = (cells, id) => {
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
  let cells = app.game.cells;
  console.log('checking for a win using cell', id);
  if (checkRows(cells, id)) {
    return true;
  }
  else if (checkCols(cells, id)) {
    return true;
  }
  else if ([0, 2, 4, 6, 8].indexOf(id) > -1) {
    if(checkDiagonals(cells, id)) {
      return true;
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
  app.xTurn = !app.xTurn;
};

const takeTurnSuccess = (data) => {
  console.log(data);
  app.game = data.game;
  app.currentGameMoves++;
  let id = app.currentCellId;
  console.log('current moves', app.currentGameMoves);
  markCell(id);
  if(app.currentGameMoves >= 5) {
    checkWin(id);
  }
  if (checkWin(id)) {
    console.log('game is won!');
  }
};

module.exports = {
  failure,
  success,
  createGameSuccess,
  isEmpty,
  markCell,
  takeTurnSuccess,
};