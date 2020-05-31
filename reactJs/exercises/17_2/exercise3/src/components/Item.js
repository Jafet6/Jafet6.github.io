import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectItemAction } from '../actions/selectItemAction';

function Item(props) {
  const { content, selectedItem } = props;
  return (
    <div onClick={() => selectedItem(content)} className="Item">
      {content}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  selectedItem: (item) => dispatch(selectItemAction(item)),
})

export default connect(null, mapDispatchToProps)(Item);

Item.propTypes = {
  content: PropTypes.string.isRequired,
};
