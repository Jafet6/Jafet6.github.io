import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, onClick } = props
  return (
    <div onClick={() => onClick(content)} className="Item">
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
