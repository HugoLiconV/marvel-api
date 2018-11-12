import {FETCH_COMICS, FETCH_COMIC_BY_ID} from "../actions/actionTypes";

const initialState = {
  comics: [],
  totalComics: 0,
  limit: 0,
  comic: {},
  params: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_COMICS:
      const { results, total, limit } = action.payload.data;
      return {
        ...state,
        comics: results,
        totalComics: total,
        params: action.params,
        limit,
      }
    case FETCH_COMIC_BY_ID:
      const comic = action.payload.data.results[0]
      return {
        ...state,
        comic
      }
    default:
      return state
  }
}