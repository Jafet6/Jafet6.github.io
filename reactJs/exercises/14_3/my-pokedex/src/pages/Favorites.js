import React from 'react';
import Pokemon from '../components/Pokemon';
import pokemons from '../data';

class Favorites extends React.Component {

  findData(pokemon) {
    return pokemons.find((e) => e.name === pokemon)
  }


  render() {
    const { isFav } = this.props
    return (
      <div>
        {isFav.map((e) => (<Pokemon arrFav={isFav} pokes={this.findData(e)} />))}
      </div>
    )
  };
}

export default Favorites;
