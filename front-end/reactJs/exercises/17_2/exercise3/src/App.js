import React, { Component } from 'react';
import InputTodo from './components/InputTodo';
import Item from './components/Item';
import { connect } from 'react-redux';
import { removeInputAction } from './actions/removeInputAction';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabledBtn: true,
    };
    this.removeItem = this.removeItem.bind(this);
    this.disableBtn = this.disableBtn.bind(this);
  }

  disableBtn() {
    const { listTodo } = this.props;
    console.log(listTodo.length)
    if (listTodo.length > 0) {
      return this.setState({ disabledBtn: false });
    };
    return this.setState({ disabledBtn:true });
  };

  async removeItem() {
    const { selectedItem, listTodo, removeInput } = this.props;
    const index = listTodo.findIndex((e) => e === selectedItem);
    const arrCopied = [...listTodo];
    arrCopied.splice(index, 1);
    await removeInput(arrCopied);
    this.disableBtn();
  };

  render() {
    const { disabledBtn } = this.state;
    const { listTodo } = this.props;
    return (
      <div className="App">
        <InputTodo disableButton={this.disableBtn} />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
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
          onClick={this.removeItem}
          value="Remover"
          disabled={disabledBtn}
        >
          Remover
        </button>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  listTodo: state.addInputReducer.list,
  listLength: state.addInputReducer.listLength,
  selectedItem: state.selectItemReducer.itemSelected,
});

const mapDispatchToProps = (dispatch) => ({
  removeInput: (newArr) => dispatch(removeInputAction(newArr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
