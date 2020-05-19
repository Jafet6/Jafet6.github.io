import React from 'react';
import FoundAt from './FoundAt';
import pokemons from '../data';
import './PokemonDetails.css';

class PokemonDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starColor: '',
    }
  }

  findPokemon = () => {
    const poke = pokemons.find((e) => e.name === this.props.match.params.pokemon)
    return poke;
  }

  render() {
    const { type, name, averageWeight, summary, foundAt } = this.findPokemon();
    return (
      <div>
        <h1>{name}</h1>
        <span>{type}</span>
        <span>{averageWeight.value} {averageWeight.measurementUnit}</span>
        <p>{summary}</p>
        {foundAt.map((e) => <FoundAt key={e.location} locationMap={e} /> )}
      </div>
    )
  }
}

export default PokemonDetails;

PokemonDetails.defaultProps = {
  location: {
    pokes : {}
  }
}
