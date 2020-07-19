import React from 'react';
import Board from './components/Board';
import Inputs from './components/Inputs';
import MyButton from './components/MyButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Board />
      <MyButton />
      <Inputs />
    </div>
  );
}

export default App;
