import { NUMBER1, NUMBER2, NUMBER3 } from '../actions/sumInputAction';

const INITIAL_STATE_SUM = 0;

const sumInputReducer = (state = INITIAL_STATE_SUM, action) => {
  // console.log(state);
  switch (action.type) {
    case NUMBER1:
      return state + Number(action.value);
    case NUMBER2:
      return state + Number(action.value);
    case NUMBER3:
      return state + Number(action.value);
    default:
      return state;
  }
}

export default sumInputReducer;