import React, { useState } from 'react'
import ListRepository from '../ListRepository';
import ReactPaginate from 'react-paginate'
import './GithubRepository.css'

const GithubRepository = ({dataGithubRepository, dataGithubProfile}) => {
  const [pageNumber, setPageNumber] = useState(0)
  const repoPerPage = 5;
  const pagePerVisited = pageNumber * repoPerPage;
  const pageCount = Math.ceil(dataGithubRepository.length / repoPerPage)
  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <div className="wrapper w-full lg:mx-auto lg:max-w-lg">
      <div className="p-4">
        <div className="flex flex-row border-b border-gray-700 w-32">
          <h1 className="font-bold px-0.5">
            Repository
          </h1>
          <span className="ml-1">
            ({dataGithubProfile.public_repos})
          </span>
        </div>
        {dataGithubRepository.slice(pagePerVisited, pagePerVisited + repoPerPage).map(repo => (
          <ListRepository 
            repository = {repo}
            key={repo.id} 
          />
        ))}
      </div>
      <ReactPaginate 
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
}

export default GithubRepository
