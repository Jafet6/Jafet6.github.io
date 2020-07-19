import React from 'react';
import TodoListContext from '../Contexts/TodoListContext';

const InputTodo = () => {
  return (
  <TodoListContext.Consumer>
    {({ textTodo, changeTextTodo, addItem }) => (
      <div className="InputTodo">
        <label htmlFor="inputTodo">Tarefa:</label>
        <input
          id="inputTodo"
          type="text"
          value={textTodo}
          onChange={(e) => changeTextTodo(e.target.value)}
        />
        <input
          id="btnAdd"
          type="button"
          value="Adicionar"
          onClick={() => addItem(textTodo)}
        />
      </div>
    )}
  </TodoListContext.Consumer>
  ) 
}

export default InputTodo;
