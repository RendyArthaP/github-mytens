import { combineReducers } from 'redux';
import handleGetGithubProfile from './githubprofile.reducers'
import handleGetGithubRepository from './githubrepository.reducers';

const rootReducers = combineReducers({
  handleGetGithubProfile,
  handleGetGithubRepository
})

export default rootReducers