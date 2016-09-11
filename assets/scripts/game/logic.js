'use strict';

const game = require('./game');
const ui = require('../ui');
const app = require('../app');

const createGameSuccess = (data) => {
  ui.hideGameOver();
  ui.hideGameMessages();
  ui.clearCells();
  game.currentGame = data.game;
  ui.setPlayerX();
};

const isValidMove = (id) => {
  let valid = !(game.currentGame.cells[id] && !game.currentGame.over);
  return valid;
};

const checkRows = (cells, id) => {
  if ([0, 1, 2].indexOf(id) > -1) {
    return ((cells[0] === cells[1]) && (cells[1] === cells[2]));
  } else if ([3, 4, 5].indexOf(id) > -1) {
    return ((cells[3] === cells[4]) && (cells[4] === cells[5]));
  } else if ([6, 7, 8].indexOf(id) > -1) {
    return ((cells[6] === cells[7]) && (cells[7] === cells[8]));
  }
};

const checkCols = (cells, id) => {
  if ([0, 3, 6].indexOf(id) > -1) {
    return ((cells[0] === cells[3]) && (cells[3] === cells[6]));
  } else if ([1, 4, 7].indexOf(id) > -1) {
    return ((cells[1] === cells[4]) && (cells[4] === cells[7]));
  } else if ([2, 5, 8].indexOf(id) > -1) {
    return ((cells[2] === cells[5]) && (cells[5] === cells[8]));
  }
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

const checkWin = (cells, id) => {
  if (checkRows(cells, id)) {
    return true;
  } else if (checkCols(cells, id)) {
    return true;
  } else if ([0, 2, 4, 6, 8].indexOf(id) > -1) {
    if (checkDiagonals(cells, id)) {
      return true;
    }
  } else {
    return false;
  }
};

const isOver = (id) => {
  if (game.currentGameMoves >= 5 && checkWin(game.currentGame.cells, id)) {
    game.winner = game.xTurn ? 'x' : 'o';
    return true;
  } else if (game.currentGameMoves === 9 && !checkWin(game.currentGame.cells, id)) {
    game.winner = 'tie';
    return true;
  } else {
    game.xTurn = !game.xTurn;
    return false;
  }
};

const takeTurnSuccess = (data) => {
  game.currentGame = data.game;
  game.currentGameMoves++;
  let id = game.currentCellId;
  ui.markCell(id);

  return isOver(id);
};

const updateGame = (data) => {
  game.currentGame = data.game;
};

const findWinner = (game) => {
  let possibleWinners = [0, 1, 2, 3, 6];
  let won = false;
  for (let i = 0, max = possibleWinners.length; i < max; i++) {
    if (checkWin(game.cells, i)) {
      if (game.cells[i] === 'x') {
        won = game.player_x.id;
      } else if (game.cells[i] === 'o') {
        won = game.player_o ? game.player_o.id : 'o';
      }

      break;
    }
  }

  return won;
};

const calculateGameStats = (data) => {
  let stats = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  let games = data.games; // games is an array
  for (let i = 0, max = games.length; i < max; i++) {
    if (findWinner(games[i]) === app.user.id) {
      stats.wins++;
    } else if (findWinner(games[i])) {
      stats.losses++;
    } else {
      stats.ties++;
    }
  }

  return stats;
};

module.exports = {
  createGameSuccess,
  isValidMove,
  takeTurnSuccess,
  updateGame,
  calculateGameStats,
};
