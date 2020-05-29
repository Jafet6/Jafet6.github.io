import charAPI from '../services/charAPI';

export const REQUEST_GOT_API = 'REQUEST_GOT_API'
export const RECEIVE_GOT_API_SUCCESS = 'RECEIVE_GOT_API_SUCCESS'
export const RECEIVE_GOT_API_FAILURE = 'RECEIVE_GOT_API_FAILURE'

const requestGotApi = () => ({
  type: REQUEST_GOT_API,
})

const receiveGotApiSuccess = ({ name, gender, aliases, books }) => {
  // console.log(char);
  return {
  type: RECEIVE_GOT_API_SUCCESS,
  name,
  gender,
  aliases,
  books,
}}

const receiveGotApiFailure = (errorMessage) => ({
  type: RECEIVE_GOT_API_FAILURE,
  errorMessage,
})


export function fetchGotApi(textTyped) {
  console.log(textTyped);
  return (dispatch) => {
    dispatch(requestGotApi())

    return charAPI(textTyped)
      .then(
        (charData) => dispatch(receiveGotApiSuccess(charData[0]), console.log(charData)),
        (error) => dispatch(receiveGotApiFailure(error.message)),

      )

  }
}
