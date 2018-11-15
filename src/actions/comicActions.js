import axios from "axios";
import {
  FETCH_COMICS,
  FETCH_COMIC_BY_ID,
  FETCH_COMICS_BY_CHARACTER, FETCH_COMICS_START,
} from "./actionTypes";

export const fetchComics = (params = {}) => dispatch => {
  dispatch({type: FETCH_COMICS_START})
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
  dispatch({type: FETCH_COMICS_START})
  axios.get(`/comics/${id}`)
    .then(comic => {
      dispatch({
        type: FETCH_COMIC_BY_ID,
        payload: comic.data
      })
    }).catch(error => {
    console.log(error)
  })
}

export const fetchComicsByCharacter = (id, params = {}) => dispatch => {
  dispatch({type: FETCH_COMICS_START})
  axios.get(`/characters/${id}/comics`, {
    params: {
      ...params
    }
  })
    .then(comics => {
      dispatch({
        type: FETCH_COMICS_BY_CHARACTER,
        payload: comics.data
      })
    }).catch(error => {
    console.log(error)
  })
}
