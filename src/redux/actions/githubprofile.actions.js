import axios from 'axios';

export const GET_DATA_GITHUB_REQUEST = 'GET_DATA_GITHUB_REQUEST';
export const GET_DATA_GITHUB_SUCCESS = 'GET_DATA_GITHUB_SUCCESS';
export const GET_DATA_GITHUB_ERROR = 'GET_DATA_GITHUB_ERROR';

export const getDataGithubRequest = () => {
  return {
    type: GET_DATA_GITHUB_REQUEST
  }
}

export const getDataGithubSuccess = (result) => {
  return {
    type: GET_DATA_GITHUB_SUCCESS,
    result
  }
}

export const getDataGithubError = (error) => {
  return {
    type: GET_DATA_GITHUB_ERROR,
    error
  }
}

export const getGithubProfile = () => {
  return function(dispatch) {
    dispatch(getDataGithubRequest())

    axios
      .get(process.env.REACT_APP_API_GITHUB_PROFILE)
      .then((result) => dispatch(getDataGithubSuccess(result.data)))
      .catch((error) => dispatch(getDataGithubError(error)))
  }
}