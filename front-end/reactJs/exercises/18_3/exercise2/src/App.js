import React from 'react';
import './App.css';
import Provider from './providers/Provider';
import HomePage from './components/HomePage';

function App() {
  return (
    <Provider>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
