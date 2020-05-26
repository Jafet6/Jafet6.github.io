import { createStore, combineReducers } from 'redux';
import listReducer from '../reducer/index';

const rootReducers = combineReducers({ listReducer })

const store = createStore(rootReducers);

export default store;
