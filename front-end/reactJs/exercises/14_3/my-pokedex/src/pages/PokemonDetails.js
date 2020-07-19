import React from 'react';
import FoundAt from '../components/FoundAt';
import pokemons from '../data';
import './PokemonDetails.css';

class PokemonDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favPokes: [],
    }
  }

  findPokemon = () => {
    const poke = pokemons.find((e) => e.name === this.props.match.params.pokemon)
    return poke;
  }

  handleClick(name) {
    const { favPokes } = this.state;
    const { onClick } = this.props;
    onClick(name);
    const copiedArr = [...favPokes, name];
    this.setState({ favPokes: copiedArr }, () => {
      localStorage.setItem('favPokes', JSON.stringify(favPokes));
    })
  }

  render() {
    const { type, name, averageWeight, summary, foundAt } = this.findPokemon();
    const { pokemon } = this.props.match.params;
    console.log(this.props);
    return (
      <div>
        <h1>{name}</h1>
        <span>{type}</span>
        <button type="button" onClick={() => this.handleClick(pokemon)}>Favoritar</button>
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
