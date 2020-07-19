import React from 'react';
import CountsContext from '../Contexts/CountsContexts';

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      input1: 0,
      input2: 0,
      input3: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState((state) => ({ clickCount: state.clickCount + 1 }));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: Number(value) });
  }

  render() {
    const contextObj = {
      ...this.state,
      handleClick: this.handleClick,
      handleChange: this.handleChange,
    };
    return (
      <CountsContext.Provider value={contextObj}>
        {this.props.children}
      </CountsContext.Provider>
    )
  }
}

export default Provider;
