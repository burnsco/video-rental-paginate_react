import React from 'react'
import Like from '../common/Like'

const moviesTable = ({ data: movies, onDeleteMovie, onLikeMovie }) => {
  const tableHead = (
    <thead>
      <tr>
        <th>Title</th>
        <th>Genre</th>
        <th>Stock</th>
        <th>Rate</th>
        <th> </th>
        <th> </th>
      </tr>
    </thead>
  )
  const tableBody = (
    <tbody>
      {movies.map(movie => (
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <Like onLikeMovie={() => onLikeMovie(movie)} liked={movie.liked} />
          </td>
          <td>
            <button
              onClick={() => onDeleteMovie(movie)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  )

  return (
    <>
      <p className="ml-5">Showing {movies.length} movies in the database.</p>
      <table className="table">
        {tableHead}
        {tableBody}
      </table>
    </>
  )
}

export default moviesTable
