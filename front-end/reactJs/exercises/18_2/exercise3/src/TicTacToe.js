import React, { useContext } from 'react';
import { TicTacToeContext } from './provider/TicTacToeProvider';
import GameBoard from './GameBoard';
import './GameBoard.css';

const TicTacToe = () => {

  const { gameBoard, victoryPhrase, selectDiv } = useContext(TicTacToeContext);
  return (
    <div data-testid="general-container" className="container-tic-tac-toe">
      <GameBoard handleClick={selectDiv} gameState={gameBoard} />
    <span>{victoryPhrase}</span>
    </div>
  )
  
}

export default TicTacToe;
