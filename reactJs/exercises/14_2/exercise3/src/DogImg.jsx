import React from 'react';

class DogImg extends React.Component {
  render() {
    const { isLoading, dogURL, loading } = this.props
    if (isLoading || dogURL.includes('terrier')) {
      return (
        <div>
          <span>{loading}</span>
        </div>
      )
    }
    return (
      <div>
        <img src={dogURL} alt="Random Dog" width="200px"/>
      </div>
    )
  }
}

export default DogImg;
