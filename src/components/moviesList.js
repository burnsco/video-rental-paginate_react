import React from 'react'

const moviesList = ({ data: genres, genreHandler, selectedGenre }) => {
  return (
    <>
      <ul className="list-group mt-4">
        {genres.map(genre => (
          <li
            onClick={() => genreHandler(genre.name)}
            key={genre._id}
            className={
              selectedGenre === genre.name
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

export default moviesList
