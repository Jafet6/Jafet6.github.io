import React, { Component } from 'react';

class PicturesList extends Component {
  render() {
    const children = this.props.children;
    return (
      <div>
        {children.map(e => <li>{e}</li>)}
      </div>
    )
  }
}

export default PicturesList;
