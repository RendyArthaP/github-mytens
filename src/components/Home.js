import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGithubProfile } from '../redux/actions/githubprofile.actions';
import { getGithubRepository } from '../redux/actions/githubrepository.actions';
import GithubProfile from './GithubProfile';
import GithubRepository from './GithubRepository';
import NavbarMenu from './NavbarMenu';

const Home = () => {
  const dispatch = useDispatch()
  const dataGithubProfile = useSelector((state) => state.handleGetGithubProfile.data)
  const dataGithubRepository = useSelector((state) => state.handleGetGithubRepository.data)

  useEffect(() => {
    dispatch(getGithubProfile())
    dispatch(getGithubRepository())
  }, [dispatch])

  return (
    <div>
      <NavbarMenu />
      <div className="flex flex-col">
        <GithubProfile dataGithubProfile = {dataGithubProfile} />
        <GithubRepository 
          dataGithubRepository = {dataGithubRepository} 
          dataGithubProfile = {dataGithubProfile}
        />
      </div>
    </div>
  )
}

export default Home
