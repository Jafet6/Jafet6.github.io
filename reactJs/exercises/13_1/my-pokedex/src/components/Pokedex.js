import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';
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

  setNewTypePokemon = (type) => {
    const arrLength = pokemons.filter(e => e.type === type).length;
    this.setState({
      index: 0,
      length: arrLength,
      type: type,
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
  
  arrSelected = () => {
    if (this.state.type !== '') {
      const selectedPokemon = pokemons.filter(e => e.type === this.state.type);
      return selectedPokemon;
    }
    return pokemons;
  }

  labelButtons = () => {
    return pokemons.reduce((acc, e) => {
      if (acc.includes(e.type)) {
        return acc;
      } else {
        acc.push(e.type);
        return acc;
      }
    }, [])
  }

  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <div>
          <div className='pokedex-cointainer'>
            <Pokemon pokes={this.arrSelected()[this.state.index]} />
          </div>

          <MyButton label={'Próximo Pokemon'} handleClick={this.setNextPokemon}/>
          {this.labelButtons().map((e) => <MyButton key={e} label={e} handleClick={this.setNewTypePokemon} />)}
          
          <MyButton label={'All'} handleClick={this.setAllPokemons} />
        </div>
      </div>
    )
  }
}

export default Pokedex;