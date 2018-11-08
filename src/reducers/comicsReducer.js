import {FETCH_COMICS, FETCH_COMIC_BY_ID} from "../actions/actionTypes";

const initialState = {
  comics: [],
  totalComics: 0,
  limit: 0,
  comic: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_COMICS:
      const { results, total, limit } = action.payload.data;
      return {
        ...state,
        comics: results,
        totalComics: total,
        limit
      }
    default:
      return state
  }
}