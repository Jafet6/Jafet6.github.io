import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      selectedItem: '',
      disabledBtn: true,
    };
    this.removeItem = this.removeItem.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.selectedItem = this.selectedItem.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({
      listTodo: [...state.listTodo, todo],
    }), () => {
      this.disableBtn();
    });
  }

  disableBtn() {
    const { listTodo } = this.state;
    if (listTodo.length) {
      return this.setState({ disabledBtn: false })
    }
    return this.setState({ disabledBtn:true });
  }

  selectedItem(item) {
    this.setState({ selectedItem: item })
  }

  removeItem() {
    const { selectedItem, listTodo } = this.state;
    const index = listTodo.findIndex((e) => e === selectedItem);
    const arrCopied = listTodo;
    arrCopied.splice(index, 1)
    this.setState({
      listTodo: arrCopied
    }, () => {
      this.disableBtn();
    });
    
  }

  render() {
    const { listTodo, disabledBtn } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item onClick={this.selectedItem} content={todo} />
                </li>
              ))
            }
          </ul>
        }
        <button
          data-testid="id-remove"
          type="button"
          onClick={this.removeItem}
          value="Remover"
          disabled={disabledBtn}
        >
          Remover
        </button>
      </div>
    );
  }
}
export default App;
