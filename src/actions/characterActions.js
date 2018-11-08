import { FETCH_CHARACTERS } from "../actions/actionTypes";
import axios from "axios";

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
