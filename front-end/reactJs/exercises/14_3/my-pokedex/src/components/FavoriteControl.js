import React from 'react';

class FavoriteControl  extends React.Component {


  render() {
    if (this.props.isFavorite) {
      return (
        <span>É Favorito</span>
      )
    }
    return (
      <div>
        <span></span>
      </div>
    )
  };
}

export default FavoriteControl;
