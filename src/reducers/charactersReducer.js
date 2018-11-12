import {FETCH_CHARACTER_BY_ID, FETCH_CHARACTERS, FETCH_CHARACTERS_BY_COMIC} from "../actions/actionTypes";

const initialState = {
  characters: [],
  totalCharacters: 0,
  limit: 0,
  character: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS:
      const {results, total, limit} = action.payload.data;
      return {
        ...state,
        characters: results,
        totalCharacters: total,
        limit
      }
    case FETCH_CHARACTER_BY_ID:
      const character = action.payload.data.results[0]
      return {
        ...state,
        character
      }
    case FETCH_CHARACTERS_BY_COMIC:
      return {
        ...state,
        characters: action.payload.data.results,
      }
    default:
      return state
  }
}