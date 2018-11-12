import {FETCH_COMICS, FETCH_COMIC_BY_ID } from "../actions/actionTypes";
import axios from "axios";

export const fetchComics = (params = {}) => dispatch => {
  axios.get('/comics', {
    params: {
      ...params
    }
  })
    .then(comics => {
      dispatch({
        type: FETCH_COMICS,
        payload: comics.data,
        params
      })
    })
    .catch(error => console.log(error))
}

export const fetchComicById = id => dispatch => {
  axios.get(`/comics/${id}`)
    .then(comic => {
      dispatch({
        type: FETCH_COMIC_BY_ID,
        payload: comic.data
      })
    }).catch(error => { console.log(error) })
}

