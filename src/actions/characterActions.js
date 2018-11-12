import { FETCH_CHARACTERS, FETCH_CHARACTERS_BY_COMIC} from "../actions/actionTypes";
import { FETCH_CHARACTER_BY_ID } from "./actionTypes";
import axios from "axios/index";

export const fetchCharacters = (params = {}) => dispatch => {
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
  axios.get(`/characters/${id}`)
    .then(character => {
      dispatch({
        type: FETCH_CHARACTER_BY_ID,
        payload: character.data
      })
    }).catch(error => { console.log(error) })
}


export const fetchCharactersByComic = id => dispatch => {
  axios.get(`/comics/${id}/characters`)
    .then(characters => {
      dispatch({
        type: FETCH_CHARACTERS_BY_COMIC,
        payload: characters.data
      })
    }).catch(error => { console.log(error) })
}
