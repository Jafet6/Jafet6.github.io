import { combineReducers } from 'redux';
import addInputReducer from './addInputReducer';
import selectItemReducer from '../reducers/selectItemReducer';

const rootReducer = combineReducers({ addInputReducer, selectItemReducer });

export default rootReducer;
