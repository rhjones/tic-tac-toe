'use strict';

const game = require('./game');

const failure = (error) => {
  // currently covers:
  // - api.createGame.fail
  // - api.endGame.fail
  // - api.takeTurn.fail
  console.error(error);
};

const clearCells = () => {
  for (let i = 0; i < 9; i++) {
    let cell = $('.game-board').find("[data-id='" + i + "']");
    cell.html('');
  }
};

const endGame = () => {
  console.log('winner is', game.winner);
};

const invalidMove = () => {
  console.log('bad move');
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
  clearCells,
  endGame,
  invalidMove,
  markCell,
};
