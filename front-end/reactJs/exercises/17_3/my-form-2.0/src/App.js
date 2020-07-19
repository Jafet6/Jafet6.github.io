import React from 'react';
import './App.css';
import Form from './Form'
import store from './store/index';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Form />
      </Provider>
    </div>
  );
}

export default App;
