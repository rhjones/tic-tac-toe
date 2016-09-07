'use strict';

const game = require('./game');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const clearCells = () => {
  for (let i = 0; i < 9; i++) {
    let cell = $('.game-board').find("[data-id='" + i + "']");
    cell.html('');
  }
};

const markCell = (id) => {
  console.log('turn success!');
  let cell = $('.game-board').find("[data-id='" + id + "']");
  if (game.xTurn) {
    cell.html('x');
  } else if (!game.xTurn) {
    cell.html('o');
  }
};



module.exports = {
  failure,
  success,
  markCell,
  clearCells
};
