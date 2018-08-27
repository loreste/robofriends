import { CHANGE_SEARCH_FIELD } from './constants.js'
import { combineReducers } from 'redux';

const searchRobots = (state = '', action={}) => {
  switch(action.type){
    case CHANGE_SEARCH_FIELD:
    return Object.assign({}, state, { searchField: action.payload });
    default:
    return state;
  }
}

const appState = combineReducers({
  searchField: searchRobots
});

export default appState;
