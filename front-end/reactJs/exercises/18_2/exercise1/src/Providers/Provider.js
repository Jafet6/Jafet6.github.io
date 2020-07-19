import React, { useState, createContext } from 'react';

const CountsContext = createContext();

const CountsProvider = ({ children }) => {
  
  const [clickCount, setClickCount] = useState(0);
  const [inputs, setInputs] = useState({input1: 0, input2: 0, input3: 0});
  
  const handleClick = () => {
    setClickCount((currentValue) => currentValue + 1);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({...inputs, [name]: Number(value)})
  }

  const contextObj = {
    clickCount,
    inputs,
    handleChange,
    handleClick,
  };

  return (
    <CountsContext.Provider value={contextObj}>
      {children}
    </CountsContext.Provider>
  );
};

export { CountsProvider, CountsContext };
