import React from 'react';
import PropTypes from 'prop-types';
import TodoListContext from '../Contexts/TodoListContext';

function Item(props) {
  const { content } = props;
  return (
    <TodoListContext.Consumer>
      {({ selectedItem }) => (
      <div onClick={() => selectedItem(content)} className="Item">
        {content}
      </div>
      )}
    </TodoListContext.Consumer>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
};
