import React from 'react'

const GithubProfile = ({dataGithubProfile}) => {
  
  return (
    <div className="flex flex-col justify-center mx-auto items-center text-center">
      <div className="py-4">
        <img 
          src={dataGithubProfile.avatar_url} 
          alt="avatar"
          className="rounded-full w-40 h-40 mx-auto"
        />
        <h1 className="font-bold text-xl my-2">
          {dataGithubProfile.name}
        </h1>
        <div className="flex flex-row justify-center">
          <h1 className="font-bold">Location: </h1>
          <span className="ml-1">
            {dataGithubProfile.location}
          </span>
        </div>
        <div className="flex flex-col mx-auto items-center">
          <div className="flex flex-row">
            <h1 className="font-bold">Followers:</h1>
            <span className="ml-1">
              {dataGithubProfile.followers}
            </span>
          </div>
          <div className="flex flex-row">
            <h1 className="font-bold">Following:</h1>
            <span className="ml-1">
              {dataGithubProfile.following}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GithubProfile
