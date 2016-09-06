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

const markCell = (cell) => {
  if (app.x_turn) {
    cell.html('x');
  } else if (!app.x_turn) {
    cell.html('o');
  }
  app.x_turn = !app.x_turn;
};

const isEmpty = (id) => {
  return (!app.game.cells[id]);
};

module.exports = {
  failure,
  success,
  createGameSuccess,
  isEmpty,
  markCell,
};