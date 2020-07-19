import React from 'react';
import './App.css';
import Pokedex from './pages/Pokedex';
import PokemonDetails from './pages/PokemonDetails';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import AboutPokedex from './pages/AbouPokedex';
import NotFound from './pages/NotFound';
import Favorites from './pages/Favorites'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFav: [],
    }
    this.favPokeSlector = this.favPokeSlector.bind(this);
  }

  favPokeSlector(pokemon) {
    const { isFav } = this.state;
    const copiedArr = isFav
    this.setState({ isFav: [...copiedArr, pokemon] })
  }

  render() {
    const { isFav } = this.state;
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about-pokedex">O que é uma pokedex?</Link>
        <Link to="/favorites">Pokemons Favoritos</Link>
        <Switch>
          <Route path="/pokemons/:pokemon" render={(props) => (<PokemonDetails {...props} onClick={this.favPokeSlector} />)} />
          <Route path="/about-pokedex" component={AboutPokedex} />
          <Route path="/favorites" render={(props) => (<Favorites {...props} isFav={isFav} />)} />
          <Route exact path="/" render={(props) => (<Pokedex {...props} isFav={isFav} />)} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
