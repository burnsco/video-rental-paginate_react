import React from 'react'

const MovieForm = ({ match, history }) => {
  const saveMovie = () => {
    history.replace('/movies')
  }
  return (
    <div className="container">
      <h2> Movie id: {match.params.id}</h2>
      <button onClick={saveMovie} className="btn btn-primary btn-lg">
        Save
      </button>
    </div>
  )
}

export default MovieForm
