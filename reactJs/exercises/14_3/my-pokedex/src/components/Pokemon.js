import React from 'react';
import "./Pokemon.css"
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: this.props.pokes,
    }
  }
  render() {
    const { name, type, averageWeight, image } = this.props.pokes;
    return (
      <div>
        <Link to={`/pokemons/${name}`}>Detalhes</Link>
        <div className='pokemons-container'>
          <div className='pokemons-data-container'>
            <div>
              {name}
            </div>
            <div>
              {type}
            </div>
            <div>
              Average Weight: {averageWeight.value} {averageWeight.measurementUnit}
            </div>
          </div>
          <img src={image} alt={name} ></img>
        </div>
      </div>
    )
  }
}

export default Pokemon;