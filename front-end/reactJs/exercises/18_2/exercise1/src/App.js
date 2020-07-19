import React from 'react';
import { CountsProvider } from './Providers/Provider'
import Board from './components/Board';
import Inputs from './components/Inputs';
import MyButton from './components/MyButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <CountsProvider>
        <Board />
        <MyButton />
        <Inputs />
      </CountsProvider>
    </div>
  );
}

export default App;
