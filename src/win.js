
const WINNING_COMBINAISON = [[0, 1, 2],
                             [3, 4, 5],
                             [6, 7, 8],
                             [0, 3, 6],
                             [1, 4, 7],
                             [2, 5, 8],
                             [0, 4, 8],
                             [2, 4, 6]];

function hasPlayerWin(player, board) {
  for (let i = 0; i < WINNING_COMBINAISON.length; i += 1) {
    if (
      (board[WINNING_COMBINAISON[i][0]] === player) &&
      (board[WINNING_COMBINAISON[i][1]] === player) &&
      (board[WINNING_COMBINAISON[i][2]] === player)) {
      return true;
    }
  }
  return false;
}

function isGameOver(board) {
  let go = true;

  for (let i = 0; i < board.length; i += 1) {
    if (/^[0-9]$/.test(board[i])) {
      go = false;
      break;
    }
  }
  return go;
}

export { hasPlayerWin, isGameOver };
