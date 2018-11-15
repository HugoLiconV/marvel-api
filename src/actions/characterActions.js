import axios from "axios/index";
import {
  FETCH_CHARACTER_BY_ID,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_BY_COMIC,
  FETCH_CHARACTERS_START,
} from "./actionTypes";

export const fetchCharacters = (params = {}) => dispatch => {
  dispatch({type: FETCH_CHARACTERS_START})
  axios.get('/characters', {
    params: {
      ...params
    }
  })
    .then(characters => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: characters.data,
        params
      })
    })
    .catch(error => console.log(error))
}

export const fetchCharacterById = id => dispatch => {
  dispatch({type: FETCH_CHARACTERS_START})
  axios.get(`/characters/${id}`)
    .then(character => {
      dispatch({
        type: FETCH_CHARACTER_BY_ID,
        payload: character.data
      })
    }).catch(error => {
    console.log(error)
  })
}


export const fetchCharactersByComic = (id, params = {}) => dispatch => {
  dispatch({type: FETCH_CHARACTERS_START})
  axios.get(`/comics/${id}/characters`, {
    params: {
      ...params
    }
  })
    .then(characters => {
      dispatch({
        type: FETCH_CHARACTERS_BY_COMIC,
        payload: characters.data
      })
    }).catch(error => {
    console.log(error)
  })
}
