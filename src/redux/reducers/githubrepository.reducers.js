import {
  GET_GITHUB_REPOSITORY_REQUEST,
  GET_GITHUB_REPOSITORY_SUCCESS,
  GET_GITHUB_REPOSITORY_ERROR
} from '../actions/githubrepository.actions.js'

const initialState = {
  data: [],
  error: null
}

const handleGetGithubRepository = (state = initialState, action) => {
  switch(action.type) {
    case GET_GITHUB_REPOSITORY_REQUEST:
      return {
        ...state
      }
    case GET_GITHUB_REPOSITORY_SUCCESS:
      return {
        ...state,
        data: action.result
      }
    case GET_GITHUB_REPOSITORY_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default handleGetGithubRepository;