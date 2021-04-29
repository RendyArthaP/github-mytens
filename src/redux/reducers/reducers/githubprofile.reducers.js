import {
  GET_DATA_GITHUB_REQUEST,
  GET_DATA_GITHUB_SUCCESS,
  GET_DATA_GITHUB_ERROR
} from '../actions/githubprofile.actions.js'

const initialState = {
  data: {},
  error: null
}

const handleGetGithubProfile = (state = initialState, action) => {
  switch(action.type) {
    case GET_DATA_GITHUB_REQUEST:
      return {
        ...state
      }
    case GET_DATA_GITHUB_SUCCESS:
      return {
        ...state,
        data: action.result
      }
    case GET_DATA_GITHUB_ERROR:
      return {
        error: action.error
      }
    default:
      return state
  }
}

export default handleGetGithubProfile