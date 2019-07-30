import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TableHeader from './tableHeader'
import TableBody from './tableBody'
import Like from '../Like.js'

class moviesTable extends Component {
  render() {
    const {
      data: movies,
      onDeleteMovie,
      onLikeMovie,
      onSort,
      sortColumn
    } = this.props
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
          <button
            className="btn btn-danger"
            onClick={() => onDeleteMovie(movie)}
          >
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
}

moviesTable.propTypes = {
  data: PropTypes.array.isRequired,
  onDeleteMovie: PropTypes.func.isRequired,
  sortColumn: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired,
  onLikeMovie: PropTypes.func.isRequired
}

export default moviesTable
