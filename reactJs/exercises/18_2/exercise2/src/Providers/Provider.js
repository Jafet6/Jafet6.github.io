import React, { createContext, useState, useEffect } from 'react';

const TodoListContext = createContext();
TodoListContext.displayName = 'TodoList';

const TodoProvider = ({ children }) => {

  const [disabledBtn, setDisabledBtn] = useState(true);
  const [textTodo, setTextTodo] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const disableBtn = () => {
      if (list.length > 0) {
        return setDisabledBtn(false);
      };
      return setDisabledBtn(true);
    };
    disableBtn()
  }, [list])


  const changeTextTodo = (value) => {
    setTextTodo(value);
  };

  const selectedItemFunc = (value) => {
    setSelectedItem(value);
  };

  const addItem = (textTodo) => {
    const newArr = [...list, textTodo];
    setList(newArr)
    setTextTodo('');
    setDisabledBtn(false);    
  };

  const removeItem = () => {
    const index = list.findIndex((e) => e === selectedItem);
    const arrCopied = [...list];
    arrCopied.splice(index, 1);
    console.log(arrCopied)
    setList(arrCopied)
    console.log(list)
    // disableBtn()
  };

  
  const contextObj = {
    disabledBtn,
    addItem,
    removeItem,
    selectedItemFunc,
    changeTextTodo,
    textTodo,
    list,
    selectedItem,
  }

  return (
    <TodoListContext.Provider value={contextObj}>
      {children}
    </TodoListContext.Provider>
  )
}

export { TodoProvider, TodoListContext };
