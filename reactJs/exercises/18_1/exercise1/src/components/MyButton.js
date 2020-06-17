import React from "react";
import CountsContext from '../Contexts/CountsContexts';

class MyButton extends React.Component {
  render() {
    return (
      <CountsContext.Consumer>
        {(context) => (
        <div>
          <button onClick={context.handleClick} type="button">
            Click Redux
          </button>
        </div>
        )}
      </CountsContext.Consumer>
    )
  }
}

export default MyButton;
