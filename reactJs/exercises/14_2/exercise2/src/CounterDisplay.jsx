import React from 'react';

class CounterDisplay extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value % 3 !== 0
      || nextProps.value === 12
      || nextProps.value === 15) return false;
    return true;
  }

  render() {
    return <div> counter: {this.props.value}</div>;
  }
}

export default CounterDisplay;
