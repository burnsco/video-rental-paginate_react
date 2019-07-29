import React from 'react'
import Like from '../../common/Like.js'

const TableBody = ({ onLikeMovie, onDeleteMovie, data: movies }) => {
  return (
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
}

export default TableBody
