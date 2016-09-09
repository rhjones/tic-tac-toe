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
  game.currentCellId = id;
  let turn = game.xTurn ? 'x' : 'o';
  return $.ajax({
    url: app.host + '/games/' + game.currentGame.id,
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

const endGame = () => {
  let request = $.ajax({
    url: app.host + '/games/' + game.currentGame.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      game: {
        over: true,
      },
    },
  });
  return request;
};

const getFinishedGames = () => {
  let request = $.ajax({
    url: app.host + '/games/?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
  return request;
};


module.exports = {
  createGame,
  takeTurn,
  endGame,
  getFinishedGames,
};
