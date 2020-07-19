import React from 'react';
import './GameCell.css';
import xImage from './x.png';
import oImage from './o.svg';
import ImageControl from './ImageControl';

// Não mude a propriedade da div data-testid de cada casa
// ele será utilizado para o terceiro exercício!
// Use-o para selecionar uma casa especifica nas horas dos testes.

const GameCell = ({ id, handleClick, playerId }) => {
  let playerImage;
  let alt;
  if (playerId === 1) {
    playerImage = xImage;
    alt = 'X';
  } else {
    playerImage = oImage;
    alt = 'O'
  }
  return (
    <div
      onClick={() => handleClick(id)}
      data-testid={`cell_${id}`}
      className="game-cell"
    >
      <ImageControl gameBoard={playerId} image={playerImage} alt={alt} />
    </div>
  );
}

export default GameCell;
