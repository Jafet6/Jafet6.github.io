import React from 'react';
import TodoListContext from '../Contexts/TodoListContext';

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledBtn: true,
      textTodo: '',
      selectedItem: '',
      list: [],
    };
    this.removeItem = this.removeItem.bind(this);
    this.changeTextTodo = this.changeTextTodo.bind(this);
    this.selectedItem = this.selectedItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  disableBtn() {
    const { list } = this.state;
    if (list.length > 0) {
      return this.setState({ disabledBtn: false });
    };
    console.log(this.state.disabledBtn)
    return this.setState({ disabledBtn:true });
  };

  changeTextTodo(value) {
    this.setState({ textTodo: value });
  };

  selectedItem(value) {
    this.setState({ selectedItem: value });
  };

  addItem() {
    const { list, textTodo } = this.state;
    const newArr = [...list, textTodo];
    console.log(newArr)
    this.setState({
      list: newArr,
      textTodo: '',
      disabledBtn: false,
    });    
  };

  async removeItem() {
    const { selectedItem, list } = this.state;
    const index = list.findIndex((e) => e === selectedItem);
    const arrCopied = [...list];
    arrCopied.splice(index, 1);
    this.setState({ list: arrCopied },
      () => this.disableBtn()
    );
  };

  render() {
    const contextObj = {
      ...this.state,
      addItem: this.addItem,
      removeItem: this.removeItem,
      selectedItem: this.selectedItem,
      changeTextTodo: this.changeTextTodo,
    }
    return (
      <TodoListContext.Provider value={contextObj}>
        {this.props.children}
      </TodoListContext.Provider>
    )
  }
}

Provider.contextType = TodoListContext;

export default Provider;
