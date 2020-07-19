import React, { useContext } from 'react';
import { GreetingContext } from './providers/Provider';
import './App.css';

function App() {
  const { name, handleChange } = useContext(GreetingContext);
  return (
    <div className="App">
      <label htmlFor="name">
        Name:
        <input type="text" id="name" value={name} onChange={(e) => handleChange(e.target.value)} />
      </label>
      <p>{name !== '' ? `Hello ${name}`: 'Please type your name'} </p>
    </div>
  );
}

export default App;
