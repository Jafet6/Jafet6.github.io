import { ITEM_SELECTED } from '../actions/selectItemAction';

const INITIAL_STATE = {
  itemSelected: '',
}

const selectItemReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ITEM_SELECTED:
      return {
        ...state,
        itemSelected: action.item,
      };
    default:
      return state;
  };
};

export default selectItemReducer;
