import React from 'react';
import { connect } from 'react-redux';


class Board extends React.Component {
  render() {
    return (
      <div>
        <span data-testid="board">{this.props.count}</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('O estado da minha aplicação é:', state);
  return {
    count: state.countReducer,
  }
}


export default connect(mapStateToProps)(Board);