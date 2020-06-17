import apiRequest from '../service/apiRequest';

export const API_REQUEST = 'API_REQUEST';
export const API_RECEIVE_SUCCESS = 'API_RECEIVE_SUCCESS';
export const API_RECEIVE_FAILURE = 'API_RECEIVE_FAILURE';

const apiRequestInfo = () => ({
  type:API_REQUEST,
});

const receiveApiPostsSuccess = ({ data }) => ({
  type: API_RECEIVE_SUCCESS,
  allData: data.children,
});

const receiveApiPostsFailure = (error) => ({
  type: API_RECEIVE_FAILURE,
  errorMessage: error,
})

export function getApiDataPosts(posts) {
  return (dispatch) => {
    dispatch(apiRequestInfo())
    
    console.log(posts);
    return apiRequest(posts)
      .then(
        (dataPosts) => dispatch(receiveApiPostsSuccess(dataPosts), console.log(dataPosts)),
        (error) => dispatch (receiveApiPostsFailure(error.message)),
      )

  }
}