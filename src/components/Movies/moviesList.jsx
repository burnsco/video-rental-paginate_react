import React from 'react'
import PropTypes from 'prop-types'

const moviesList = ({ data: genres, genreHandler, selectedGenre }) => {
  return (
    <>
      <ul className="list-group ">
        {genres.map(genre => (
          <li
            onClick={() => genreHandler(genre)}
            key={genre._id}
            className={
              selectedGenre._id === genre._id
                ? 'list-group-item active'
                : 'list-group-item'
            }
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </>
  )
}

moviesList.propTypes = {
  data: PropTypes.array.isRequired,
  genreHandler: PropTypes.func.isRequired
}

export default moviesList
