import { combineReducers } from 'redux';
import countReducer from './countReducer';
import sumInputReducer from './sumInputReducer';

const rootReducer = combineReducers({ countReducer, sumInputReducer });

export default rootReducer;