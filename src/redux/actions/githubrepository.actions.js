import axios from 'axios';

export const GET_GITHUB_REPOSITORY_REQUEST = 'GET_GITHUB_REPOSITORY_REQUEST';
export const GET_GITHUB_REPOSITORY_SUCCESS = 'GET_GITHUB_REPOSITORY_SUCCESS';
export const GET_GITHUB_REPOSITORY_ERROR = 'GET_GITHUB_REPOSITORY_ERROR';

export const getRepositoryRequest = () => {
  return {
    type: GET_GITHUB_REPOSITORY_REQUEST
  }
}

export const getRepositorySuccess = (result) => {
  return {
    type: GET_GITHUB_REPOSITORY_SUCCESS,
    result
  }
}

export const getRepositoryError = (error) => {
  return {
    type: GET_GITHUB_REPOSITORY_ERROR,
    error
  }
}

export const getGithubRepository = () => {
  return function(dispatch) {
    dispatch(getRepositoryRequest())

    axios
      .get(process.env.REACT_APP_API_GITHUB_REPOSITORY)
      .then((result) => dispatch(getRepositorySuccess(result.data)))
      .catch((error) => dispatch(getRepositoryError(error)))
  }
}