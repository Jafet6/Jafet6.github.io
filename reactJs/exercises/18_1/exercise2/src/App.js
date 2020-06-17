import React, { Component } from 'react';
import InputTodo from './components/InputTodo';
import Item from './components/Item';
import TodoListContext from './Contexts/TodoListContext';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabledBtn: true,
    };
  }

  render() {
    const { list, removeItem, disableBtn, disabledBtn } = this.context;
    return (
      <div className="App">
        <InputTodo disableButton={disableBtn} />
        {list &&
          <ul>
            {
              list.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo} />
                </li>
              ))
            }
          </ul>
        }
        <button
          data-testid="id-remove"
          type="button"
          onClick={removeItem}
          value="Remover"
          disabled={disabledBtn}
        >
          Remover
        </button>
      </div>
    );
  }
};

App.contextType = TodoListContext;

export default App;
