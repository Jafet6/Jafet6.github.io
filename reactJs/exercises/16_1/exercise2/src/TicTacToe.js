import React from 'react';
import GameBoard from './GameBoard';
import './GameBoard.css';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      gameBoard: [991, 992, 993, 994, 995, 996, 997, 998, 999],
      victoryPhrase: '',
    };
    this.selectDiv = this.selectDiv.bind(this);
  }

  victoryControl() {
    const { gameBoard } = this.state;
    if (
      (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2])
      || (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5])
      || (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8])
      ) return this.setState({ victoryPhrase: 'Fim de Jogo' })
      // return alert(`O vencedor foi o jogador: ${prevState.activePlayer}`)
    if (
      (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6])
      || (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7])
      || (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8])
      ) return this.setState({ victoryPhrase: 'Fim de Jogo' })
    if (
      (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8])
      || (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6])
      ) return this.setState({ victoryPhrase: 'Fim de Jogo' })
  }

  selectDiv(id) {
    const { activePlayer, gameBoard } = this.state;
    if (gameBoard[id] === 1 || gameBoard[id] === 2) {
      return alert('Essa casa já foi preenchida');
    }
    const arrCopied = gameBoard;
    arrCopied[id] = activePlayer;
    if (activePlayer === 1) {
      return this.setState({
        activePlayer: 2,
        gameBoard: arrCopied,
      }, () => this.victoryControl());

    }
    return this.setState({
      activePlayer: 1,
      gameBoard: arrCopied,
    }, this.victoryControl());
  }

  // Antes de começar a realizar o exercício,
  // junte os dois outros exercícios na master (ou seja, mergeie as Pull Requests).
  // Atualize essa branch com o git merge master.

  // Adicione nesse arquivo a lógica para identificar
  // quando que o jogo deve acabar. É necessário passar
  // nos teste do arquivo exercise-3.test.js;

  // Analise bem como que os teste são realizados 
  // para criar o que se pede.

  render() {
    const { gameBoard, victoryPhrase } = this.state;
    return (
      <div data-testid="general-container" className="container-tic-tac-toe">
        <GameBoard handleClick={this.selectDiv} gameState={gameBoard} />
      <span>{victoryPhrase}</span>
      </div>
    )
  }
}

export default TicTacToe;
