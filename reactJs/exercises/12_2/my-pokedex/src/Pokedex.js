import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import './Pokemon.css'

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <div>
          <div className='pokedex-cointainer'>
            {pokemons.map(e => <Pokemon key={e.id} pokes={e} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default Pokedex;