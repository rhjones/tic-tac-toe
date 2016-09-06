'use strict';

const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const takeTurn = (cell) => {
  if (app.x_turn) {
    cell.html('x');
  } else if (!app.x_turn) {
    cell.html('o');
  }
  app.x_turn = !app.x_turn;
};

const isEmpty = (cell) => {
  return (cell.html() === '');
};

module.exports = {
  failure,
  success,
  isEmpty,
  takeTurn,
};