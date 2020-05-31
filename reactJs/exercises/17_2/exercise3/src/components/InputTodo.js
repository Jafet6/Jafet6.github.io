import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { addInputAction } from '../actions/addInputAction';

class InputTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textTodo: '',
    };
    this.changeTextTodo = this.changeTextTodo.bind(this);
  };

  changeTextTodo(value) {
    this.setState({ textTodo: value });
  };

  async addItem(value, callback) {
    const { disableButton } = this.props;
    this.setState({ textTodo: '' });
    await callback(value)
    disableButton();
    
  };

  render() {
    const { addItemDispatch } = this.props;
    const { textTodo } = this.state;
    return (
      <div className="InputTodo">
        <label htmlFor="inputTodo">Tarefa:</label>
        <input
          id="inputTodo"
          type="text"
          value={textTodo}
          onChange={(e) => this.changeTextTodo(e.target.value)}
        />
        <input
          id="btnAdd"
          type="button"
          value="Adicionar"
          onClick={() => this.addItem(textTodo, addItemDispatch)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItemDispatch: (text) => dispatch(addInputAction(text)),
})

export default connect(null, mapDispatchToProps)(InputTodo);
