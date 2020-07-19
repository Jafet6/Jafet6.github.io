import React from 'react';

const ImageControl = ({gameBoard, image, alt}) => {
  if (gameBoard === 1 || gameBoard === 2) {
    return <img src={image} alt={alt} />
  }
  return <div></div>
}

export default ImageControl;
