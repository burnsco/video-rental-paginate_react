import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from '../Table/tableHeader'
import TableBody from '../Table/tableBody'
import Like from '../../common/Like.js'

const moviesTable = ({
  data: movies,
  onDeleteMovie,
  onLikeMovie,
  onSort,
  sortColumn
}) => {
  const columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: movie => (
        <Like liked={movie.liked} onLikeMovie={() => onLikeMovie(movie)} />
      )
    },
    {
      key: 'delete',
      content: movie => (
        <button className="btn btn-danger" onClick={() => onDeleteMovie(movie)}>
          Delete
        </button>
      )
    }
  ]
  return (
    <>
      <table className="table">
        <TableHeader
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <TableBody
          data={movies}
          columns={columns}
          onDeleteMovie={onDeleteMovie}
          onLikeMovie={onLikeMovie}
        />
      </table>
    </>
  )
}

moviesTable.propTypes = {
  data: PropTypes.array.isRequired,
  onDeleteMovie: PropTypes.func.isRequired,
  sortColumn: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired,
  onLikeMovie: PropTypes.func.isRequired
}

export default moviesTable
