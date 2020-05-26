import React from 'react';
import "./Pokemon.css"
import { Link } from 'react-router-dom';
import FavoriteControl from './FavoriteControl';

class Pokemon extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pokemon: this.props.pokes,
  //   }
  // }

  favoriteControl() {
    const { arrFav } = this.props;
    const { name } = this.props.pokes;
    const isFavorite = arrFav.find((e) => e === name)
    if (isFavorite) return true
    return false;
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
            <FavoriteControl isFavorite={this.favoriteControl()} />
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