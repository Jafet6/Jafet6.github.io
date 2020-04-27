import React from 'react';
import './App.css';

class MyButton extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.handleClick(this.props.label)}>{this.props.label}</button>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label:'',
    }
  }

  setLabel = (label) => {
    this.setState({label: label})
  }

  render() {
    return (
      <div className="App">
        <p>Cliquei no: {this.state.label}</p>
        <MyButton label={'Botão 1'} handleClick={this.setLabel} />
        <MyButton label={'Botão 2'} handleClick={this.setLabel} />
        <MyButton label={'Botão 3'} handleClick={this.setLabel} />
      </div>
    )
  }
}

export default App;
