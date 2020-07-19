import React from 'react';

class FoundAt extends React.Component {
  render() {
    const { location, map } = this.props.locationMap;
    return (
      <div>
        <h3>{location}</h3>
        <img src={map} alt="Map of where the pokemon is found" />
      </div>
    )
  }
}

export default FoundAt; 
