import React from 'react';

const START_TERM = ['*** WELCOME ***',
  'TO',
  '** CLI TAC TOE **',
  ' Need help?',
  " type 'help'."];

const INIT_BOARD = ['0', '1', '2',
  '3', '4', '5',
  '6', '7', '8'];

const HUMAN_PLAYER = 'X';
const CREDITS = ['** CLI Tac Toe **',
                 (<span>coded by&nbsp;
                    <a href="https://github.com/pujolchr/fCC/tree/master/tictactoe">
                      Christian Pujol
                    </a>
                    , 2017
                  </span>),
                 (<span>for&nbsp;
                    <a href="https://http://www.freecodecamp.com/">
                      freeCodeCamp
                    </a>
                 </span>),
                 (<a href="https://github.com/pujolchr/fCC/tree/master/tictactoe">
                 Source code is on github
                  </a>)];

const HELP = ["'gui': toggle the gui",
  "'board': print the board",
  "'play [0-8]': play on [0-8]",
  "'about': info about the game",
  "'help': this help",
  "'player': show player symbol",
  "'set [XO]': set player symbol",
  "'reset' : reset the Game"];


export { HELP, START_TERM, INIT_BOARD, CREDITS, HUMAN_PLAYER };
