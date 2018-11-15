import {
  FETCH_COMICS,
  FETCH_COMIC_BY_ID,
  FETCH_COMICS_BY_CHARACTER, FETCH_COMICS_START
} from "../actions/actionTypes";

const initialState = {
  comics: [],
  totalComics: 0,
  limit: 0,
  comic: {},
  params: {},
  fetching: false,
  fetched: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_COMICS_START:
      return {
        ...state,
        fetching: true,
        fetched: false
      }
    case FETCH_COMICS:
      const { results, total, limit } = action.payload.data;
      return {
        ...state,
        comics: results,
        totalComics: total,
        params: action.params,
        fetching: false,
        fetched: true,
        limit,
      }
    case FETCH_COMIC_BY_ID:
      const comic = action.payload.data.results[0]
      return {
        ...state,
        comic
      }
    case FETCH_COMICS_BY_CHARACTER:
      return {
        ...state,
        comics: action.payload.data.results,
        totalComics: action.payload.data.total,
        limit: action.payload.data.limit,
      }
    default:
      return state
  }
}