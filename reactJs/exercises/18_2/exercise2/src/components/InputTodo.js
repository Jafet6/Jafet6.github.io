import React, { useContext } from 'react';
import { TodoListContext } from '../Providers/Provider';

const InputTodo = () => {
  const {
    changeTextTodo, addItem, textTodo
  } = useContext(TodoListContext)
  return (
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
  ) 
}

export default InputTodo;
