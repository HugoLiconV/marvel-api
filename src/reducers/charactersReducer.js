import {
  FETCH_CHARACTER_BY_ID,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_BY_COMIC, FETCH_CHARACTERS_START
} from "../actions/actionTypes";

const initialState = {
  characters: [],
  totalCharacters: 0,
  limit: 0,
  character: {},
  params: {},
  fetching: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        fetching: true,
        character: {},
        characters: []
      }
    case FETCH_CHARACTERS:
      const {results, total, limit} = action.payload.data;
      return {
        ...state,
        characters: results,
        totalCharacters: total,
        params: action.params,
        fetching: false,
        limit
      }
    case FETCH_CHARACTER_BY_ID:
      const character = action.payload.data.results[0]
      return {
        ...state,
        fetching: false,
        character
      }
    case FETCH_CHARACTERS_BY_COMIC:
      return {
        ...state,
        characters: action.payload.data.results,
        totalCharacters: action.payload.data.total,
        limit: action.payload.data.limit,
        fetching: false,
      }
    default:
      return state
  }
}