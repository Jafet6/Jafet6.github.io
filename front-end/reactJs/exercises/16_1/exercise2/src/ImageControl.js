import React from 'react';

class ImageControl extends React.Component {
  render() {
    const { gameBoard, image, alt } = this.props;
    if (gameBoard === 1 || gameBoard === 2) {
      return <img src={image} alt={alt} />
    }
    return <div></div>
  }
}

export default ImageControl;
