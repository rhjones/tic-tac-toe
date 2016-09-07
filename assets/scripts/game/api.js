'use strict';

const app = require('../app');

const createGame = () => {
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

const takeTurn = (id) => {
  // should this happen here or in ui.isEmpty?
  app.currentCellId = id;
  let turn = app.xTurn ? 'x' : 'o';
  return $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      "game": {
        "cell": {
          "index": id,
          "value": turn,
        }
      }
    },
  });
};

module.exports = {
  createGame,
  takeTurn,
};