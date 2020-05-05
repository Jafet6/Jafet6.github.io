import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import './Pokedex.css'
import MyButton from './MyButton';


class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: pokemons.length,
      index: 0,
      pokemon: '',
      type: '',
    }
  }

  
  setPsychicPokemon = () => {
    const arrLength = pokemons.filter(e => e.type === 'Psychic').length;
    this.setState({
      index: 0,
      length: arrLength,
      type: 'Psychic',
    })
  }
  
  setFirePokemon = () => {
    const arrLength = pokemons.filter(e => e.type === 'Fire').length;
    this.setState({
      index: 0,
      length: arrLength,
      type: 'Fire',
    })
  }
  
  setNextPokemon = () => {
    if(this.state.index >= this.state.length - 1) {
      return this.setState({index: 0});
    }
    return this.setState((state) => ({
      index: state.index + 1,
    }))
  }

  setAllPokemons = () => {
    this.setState({
      index: 0,
      type: '',
      length: pokemons.length,
    })
  }
  
  render() {
    const arrSelected = () => {
      if (this.state.type !== '') {
        const selectedPokemon = pokemons.filter(e => e.type === this.state.type);
        return selectedPokemon;
      }
      return pokemons;
    }
    return (
      <div>
        <h1>Pokedex</h1>
        <div>
          <div className='pokedex-cointainer'>
            <Pokemon pokes={arrSelected()[this.state.index]} />
          </div>

          <MyButton label={'Próximo Pokemon'} handleClick={this.setNextPokemon}/>
          {pokemons.map((e) => <MyButton label={e.type} handleClick={this.setPsychicPokemon} />)}
          <MyButton label={'Psychic'} handleClick={this.setPsychicPokemon} />
          <MyButton label={'Fire'} handleClick={this.setFirePokemon} />
          <MyButton label={'All'} handleClick={this.setAllPokemons} />
        </div>
      </div>
    )
  }
}

export default Pokedex;