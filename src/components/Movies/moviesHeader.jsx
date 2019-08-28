import React from 'react'
import { Link } from 'react-router-dom'

const moviesHeader = ({ paginatedMovies, searchHandler, search }) => {
  return (
    <>
      <Link className="btn btn-primary mb-4" to="/movies/new">
        New Movie
      </Link>

      <p>Showing {paginatedMovies.length} movies in the database</p>

      <input
        type="text"
        onChange={searchHandler}
        className="form-control mb-1"
        value={search}
      />
    </>
  )
}

export default moviesHeader
