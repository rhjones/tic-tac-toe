'use strict';

const app = require('../app');
const game = require('./game');

const gameReset = () => {
  game.currentCellId = null;
  game.currentGame = null;
  game.xTurn = true;
  game.currentGameMoves = 0;
};

const createGame = () => {
  gameReset();
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const takeTurn = (id) => {
  // should this happen here or in ui.isEmpty?
  game.currentCellId = id;
  let turn = game.xTurn ? 'x' : 'o';
  return $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      game: {
        cell: {
          index: id,
          value: turn,
        },
      },
    },
  });
};

module.exports = {
  createGame,
  takeTurn,
};
