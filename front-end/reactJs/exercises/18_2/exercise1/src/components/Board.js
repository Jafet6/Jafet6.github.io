import React, { useContext } from 'react';
import { CountsContext } from '../Providers/Provider';

const Board = () => {
  const { clickCount } = useContext(CountsContext)
  return (
    <div>
      <span>{clickCount}</span>
    </div>
  )
}

export default Board;
