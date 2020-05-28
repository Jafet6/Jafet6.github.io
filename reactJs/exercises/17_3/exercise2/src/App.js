import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/RegisterPage';
import RegisteredClients from './components/RegisteredClients';

import store from './store/index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Route  path='/registered-clients' component={RegisteredClients}/>
          <Route  path='/register' component={Register} />
          <Route  path='/login' component={Login} />
          <Route exact path='/' component={Home} />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
