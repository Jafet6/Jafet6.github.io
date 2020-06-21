import React, { createContext, useState, useEffect } from 'react';
import useLocalStorage from '../effects/useLocalStorage';

const GreetingContext = createContext();

const GreetingProvider = ({ children }) => {

  const [name, setName] = useState('');

  useLocalStorage('name', name)

  const handleChange = (typedName) => {
    setName(typedName)
  }

  const contextObj = {
    name,
    handleChange,
  }

  return (
    <GreetingContext.Provider value={contextObj}>
      {children}
    </GreetingContext.Provider>
  )
}

export { GreetingContext, GreetingProvider };
