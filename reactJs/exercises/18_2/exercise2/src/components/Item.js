import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TodoListContext } from '../Providers/Provider';

function Item(props) {
  const { content } = props;
  const {
    selectedItemFunc,
  } = useContext(TodoListContext);
  return (
    <div onClick={() => selectedItemFunc(content)} className="Item">
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
};
