
function togglePlayer(player) {
  return player === 'X' ? 'O' : 'X';
}

function printBoardOnTerm(board) {
  const printedBoard = [];
  for (let i = 0; i < 3; i += 1) {
    printedBoard[i] = `    [${board.slice(i * 3, (i + 1) * 3).join('][')}]`;
  }
  return printedBoard;
}
function toggleGui() {
  const gui = document.getElementById('gui');
  if (gui.style.display === 'none') {
    gui.style.display = '';
  } else gui.style.display = 'none';
}
function computerPlay(computer, board) {
  let square = Math.floor(Math.random() * 9);
  while (/^[^0-9]$/.test(board[square])) {
    square = Math.floor(Math.random() * 9);
  }
  return square;
}

export { computerPlay, toggleGui, togglePlayer, printBoardOnTerm };
