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
  if (cell.html() === '') {
    takeTurn(cell);
  } else {
    console.log('taken!');
  }
};

module.exports = {
  failure,
  success,
  isEmpty,
};