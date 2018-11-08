import { FETCH_CHARACTERS } from "../actions/actionTypes";

const initialState = {
  characters: [],
  totalCharacters: 0,
  limit: 0,
  character: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS:
      const { results, total, limit } = action.payload.data;
      return {
        ...state,
        characters: results,
        totalCharacters: total,
        limit
      }
    default:
      return state
  }
}