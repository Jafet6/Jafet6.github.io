import React, { useContext } from 'react';
import InputTodo from './components/InputTodo';
import Item from './components/Item';
import { TodoListContext } from './Providers/Provider';

const App = () => {
  const {
    disabledBtn,
    removeItem,
    disableBtn,
    list,
  } = useContext(TodoListContext);

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
};

export default App;
