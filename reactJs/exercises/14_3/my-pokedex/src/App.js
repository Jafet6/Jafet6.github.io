import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import AboutPokedex from './components/AbouPokedex';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about-pokedex">O que é uma pokedex?</Link>
      <Switch>
        <Route path="/pokemons/:pokemon" render={(props) => (<PokemonDetails {...props} />)} />
        <Route path="/about-pokedex" component={AboutPokedex} />
        <Route exact path="/" component={Pokedex} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
