import React from 'react'
import ListRepository from './ListRepository';

const GithubRepository = ({dataGithubRepository, dataGithubProfile}) => {
  return (
    <div>
      <div className="p-4">
        <div className="flex flex-row border-b border-gray-700 w-32">
          <h1 className="font-bold px-0.5">
            Repository
          </h1>
          <span className="ml-1">
            ({dataGithubProfile.public_repos})
          </span>
        </div>
        <div>
          {dataGithubRepository.slice(0, 5).map(repo => (
            <ListRepository 
              repository = {repo}
              key={repo.id} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GithubRepository
