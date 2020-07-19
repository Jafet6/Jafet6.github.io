import React from 'react';
import GameCell from './GameCell';
import './GameBoard.css';

const GameBoard = ({ gameState, handleClick }) => {
  return (
    <div className="game-board">
      {gameState.map((playerId, i) => (
        <GameCell playerId={playerId} handleClick={handleClick} id={i} key={i}/>
      ))}
    </div>
  );
}

export default GameBoard;
