import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import './App.css';
import InputsList from './InputsList'
import List from './List';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <InputsList />
        <List />
      </Provider>
    </div>
  );
}

export default App;
