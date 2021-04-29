import React from 'react'

const ListRepository = ({repository}) => {
  const handlePrivateRepository = () => {
    if(repository.private === false) {
      return 'Public'
    } else {
      return 'Private'
    }
  }
  console.log(repository)
  return (
    <div className="border border-gray-700 my-4 px-4 py-2 rounded-md">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div>
          <h1 className="font-bold">
            {repository.name.charAt(0).toUpperCase() + repository.name.slice(1)}
          </h1>
          <div className="flex flex-row">
            <h1 className="font-medium">Created At:</h1>
            <span className="ml-1">
              {repository.created_at.slice(0, 10)}
            </span>
          </div>
          <div className="flex flex-row">
            <h1 className="font-medium">Languanges:</h1>
            <span className="ml-1">
              {repository.language}
            </span>
          </div>
        </div>
        <div className="flex flex-row">
          <h1 className="font-medium">Status:</h1>
          <span className="ml-1">
            {handlePrivateRepository(repository.private)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ListRepository
