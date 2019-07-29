import React from 'react'
import MoviesList from './moviesList'
import MoviesTable from './Table'
import Pagination from '../common/Pagination'

const Table = ({
  genres,
  sortColumnHandler,
  selectedGenre,
  selectGenreHandler,
  paginatedMovies,
  sortColumn,
  likeMovieHandler,
  deleteMovieHandler,
  currentPage,
  filteredMovies,
  itemsPerPage,
  pageChangeHandler
}) => {
  return (
    <div className="row">
      <div className="col-lg-3">
        <MoviesList
          data={genres}
          onSort={sortColumnHandler}
          selectedGenre={selectedGenre}
          genreHandler={selectGenreHandler}
        />
      </div>
      <div className="col-lg-9">
        <p>Showing {paginatedMovies.length} movies in the database</p>
        <MoviesTable
          sortColumn={sortColumn}
          onSort={sortColumnHandler}
          data={paginatedMovies}
          onLikeMovie={likeMovieHandler}
          onDeleteMovie={deleteMovieHandler}
        />
        <Pagination
          currentPage={currentPage}
          itemsTotal={filteredMovies.length}
          itemsPerPage={itemsPerPage}
          onPageChange={pageChangeHandler}
        />
      </div>
    </div>
  )
}

export default Table
