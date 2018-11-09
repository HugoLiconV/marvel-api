import { combineReducers } from 'redux';
import comicReducer from './comicsReducer'
import characterReducer from './charactersReducer';

export default combineReducers({
  comics: comicReducer,
  characters: characterReducer
})