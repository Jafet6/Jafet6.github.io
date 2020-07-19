// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import Users from './Users';
import StrictAccess from './StrictAccess';

const user = {
  username: 'joao',
  password: '1234',
};

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strict-access">Strict Access</Link>
        <Switch>
          <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage={'Good Morning'} />} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route path="/strict-access">
            {user.username === 'joao' && user.password === '1234' ? <StrictAccess user={'Joao123'} /> : <Redirect to="/" /> }
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
