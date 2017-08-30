import React, { Component } from 'react';
import Term from './Term';
import Square from './Square';
import ControlBoard from './ControlBoard';
import { CREDITS, INIT_BOARD, HELP, START_TERM, HUMAN_PLAYER } from './config';
import { computerPlay, toggleGui, togglePlayer, printBoardOnTerm } from './helper';
import { hasPlayerWin, isGameOver } from './win';


class Game extends Component {

  constructor(props) {
    super(props);
    this.state = { board: [...INIT_BOARD],
      term: [...START_TERM],
      player: HUMAN_PLAYER };
    this.handleTerm = this.handleTerm.bind(this);
  }

  componentDidMount() {
    document.getElementById('gui').style.display = 'none';
  }
  handleTerm(value) {
    let board = [...this.state.board];
    let term = [];
    let player = this.state.player;
    const args = value.split(' ').slice(1);
    let square;

    term.push(value);

    switch (args[0]) {

      case 'gui':
        toggleGui();
        break;

      case 'about':
        term = term.concat(CREDITS);
        break;

      case 'reset':
        board = [...INIT_BOARD];
        break;

      case 'help':
        term = term.concat(HELP);
        break;

      case 'player':
        term.push(`player is ${player}`);
        break;

      case 'board':
        term = term.concat(printBoardOnTerm(board));
        break;

      case 'set':
        if (args[1] === 'X' || args[1] === 'O') {
          player = args[1];
          board = [...INIT_BOARD];
        } else term.push(`${value}: command not found`);
        break;

      case 'play':
        square = parseInt(args[1], 10);
        // play(player, board, i)
            //
        if (/^[0-9]$/.test(board[square])) {
          board[square] = player;
          term.push(`${player} play ${square}`);
          term = term.concat(printBoardOnTerm(board));
          if (hasPlayerWin(player, board)) {
            term.push(`${player} win`);
            term.push('new game');
            board = [...INIT_BOARD];
            break;
          }
          if (isGameOver(board)) {
            term.push("It's a draw");
            term.push('new game');
            board = [...INIT_BOARD];
            break;
          }

          // computer play
          const computer = togglePlayer(player);
          square = computerPlay(computer, board);

          board[square] = computer;
          term.push(`${computer} play ${square}`);
          term = term.concat(printBoardOnTerm(board));

          if (hasPlayerWin(computer, board)) {
            term.push(`${computer} win`);
            term.push('new game');
            board = [...INIT_BOARD];
            break;
          }
          if (isGameOver(board)) {
            term.push("It's a draw");
            term.push('new game');
            board = [...INIT_BOARD];
            break;
          }
        }
        break;

      default:
        term.push(`${value}: command not found`);

    }
    document.getElementById('cli').focus();
    this.setState({
      term,
      board,
      player,
    });
  }

  render() {
    return (
      <div className="game">
        <div id="gui" className="gui">
          <table className="board">
            <tbody>
              <tr>
                <Square value={0} text={this.state.board[0]} onClick={this.handleTerm} />
                <Square value={1} text={this.state.board[1]} onClick={this.handleTerm} />
                <Square value={2} text={this.state.board[2]} onClick={this.handleTerm} />
              </tr>
              <tr>
                <Square value={3} text={this.state.board[3]} onClick={this.handleTerm} />
                <Square value={4} text={this.state.board[4]} onClick={this.handleTerm} />
                <Square value={5} text={this.state.board[5]} onClick={this.handleTerm} />
              </tr>
              <tr>
                <Square value={6} text={this.state.board[6]} onClick={this.handleTerm} />
                <Square value={7} text={this.state.board[7]} onClick={this.handleTerm} />
                <Square value={8} text={this.state.board[8]} onClick={this.handleTerm} />
              </tr>
            </tbody>
          </table>
          <ControlBoard onClick={this.handleTerm} />
        </div>
        <Term term={this.state.term} onTerm={this.handleTerm} />
      </div>
    );
  }
}

export default Game;

