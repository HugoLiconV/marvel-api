import {FETCH_COMICS, FETCH_COMIC_BY_ID} from "../actions/actionTypes";
import axios from "axios";

export const fetchComics = (params = {}) => dispatch => {
  console.log(params)
  axios.get('/comics', {
    params: {
      ...params
    }
  })
    .then(comics => {
      dispatch({
        type: FETCH_COMICS,
        payload: comics.data
      })
    })
    .catch(error => console.log(error))
}
