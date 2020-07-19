import React from 'react';
import CountsContext from '../Contexts/CountsContexts';

class Board extends React.Component {
  render() {
    return (
      <CountsContext.Consumer>
        {(context) => (
        <div>
          <span>{context.clickCount}</span>
        </div>
        )}
      </CountsContext.Consumer>
    )
  }
}

export default Board;
