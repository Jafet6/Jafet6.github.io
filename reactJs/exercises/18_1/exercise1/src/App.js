import React from 'react';
import Provider from './Providers/Provider';
import Board from './components/Board';
import Inputs from './components/Inputs';
import MyButton from './components/MyButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <Board />
        <MyButton />
        <Inputs />
      </Provider>
    </div>
  );
}

export default App;
