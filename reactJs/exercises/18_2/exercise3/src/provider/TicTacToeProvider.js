import React, { useState, createContext, useEffect } from 'react'

const TicTacToeContext = createContext();

const TicTacToeProvider = ({ children }) => {

  const [activePlayer, setActivePlayer] = useState(1);
  const [gameBoard, setGameBoard] = useState([991, 992, 993, 994, 995, 996, 997, 998, 999]);
  const [victoryPhrase, setVictoryPhrase] = useState('');

  useEffect(() => {
    const victoryControl = () => {
      // console.log(gameBoard)
      if (
        (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2])
        || (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5])
        || (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8])
        ) return setVictoryPhrase('Fim de Jogo')
        // return alert(`O vencedor foi o jogador: ${prevState.activePlayer}`)
      if (
        (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6])
        || (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7])
        || (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8])
        ) return setVictoryPhrase('Fim de Jogo')
      if (
        (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8])
        || (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6])
        ) return setVictoryPhrase('Fim de Jogo')
    }
    victoryControl();
  }, [gameBoard])


  const selectDiv = (id) => {
    if (gameBoard[id] === 1 || gameBoard[id] === 2) {
      return alert('Essa casa já foi preenchida');
    }
    const arrCopied = [...gameBoard];
    arrCopied[id] = activePlayer;
    if (activePlayer === 1) {
      setActivePlayer(2);
      setGameBoard(arrCopied)
      
    } else {
      setActivePlayer(1);
      setGameBoard(arrCopied)
    }
  }

  const contextObj = {
    activePlayer,
    gameBoard,
    victoryPhrase,
    selectDiv,
  }
  return (
    <TicTacToeContext.Provider value={contextObj}>
      {children}
    </TicTacToeContext.Provider>
  )
}

export { TicTacToeContext, TicTacToeProvider }
