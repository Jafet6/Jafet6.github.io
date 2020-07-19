import React from 'react';
import GameCell from './GameCell';
import PropTypes from 'prop-types';
import './GameBoard.css';

class GameBoard extends React.Component {
  render() {
    const { gameState, handleClick } = this.props;
    return (
      <div className="game-board">
        {gameState.map((playerId, i) => (
          <GameCell playerId={playerId} handleClick={handleClick} id={i} key={i}/>
        ))}
      </div>
    );
  }
}

export default GameBoard;
