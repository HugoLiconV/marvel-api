import { FETCH_CHARACTERS } from "../actions/actionTypes";
import axios from "axios";
import {FETCH_CHARACTER_BY_ID, FETCH_COMIC_BY_ID} from "./actionTypes";

export const fetchCharacters = (params = {}) => dispatch => {
  axios.get('/characters', {
    params: {
      ...params
    }
  })
    .then(characters => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: characters.data
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