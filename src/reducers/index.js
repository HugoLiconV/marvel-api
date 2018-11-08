import { combineReducers } from 'redux';
import comicReducer from './comicsReducer'

export default combineReducers({
  comics: comicReducer
})