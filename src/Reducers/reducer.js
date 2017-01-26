import toDos from './toDos';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';

let reducer = combineReducers({ toDos, visibilityFilter });

export default reducer;