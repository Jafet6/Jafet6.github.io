import React from 'react';
import "./Pokemon.css"

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokes;
    return(
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
    )
  }
}

export default Pokemon;