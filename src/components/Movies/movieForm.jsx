import React from 'react'
import Form from '../common/form.jsx'
import * as Joi from 'joi-browser'
import { getMovie, saveMovie } from '../../services/fakeMovieService'
import { getGenres } from '../../services/fakeGenreService'

class MovieForm extends Form {
  state = {
    data: {
      title: '',
      genreId: '',
      numberInStock: '',
      dailyRentalRate: ''
    },
    genres: [],
    errors: {}
  }

  componentDidMount() {
    const genres = getGenres()
    this.setState({ genres })

    const movieId = this.props.match.params.id
    if (movieId) {
      const movie = getMovie(movieId)
      if (!movie) return this.props.history.replace('/not_found')

      this.setState({ data: this.mapToViewModel(movie) })
    }
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    }
  }

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label('Title'),
    genreId: Joi.string()
      .required()
      .label('Genre'),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label('Number in Stock'),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label('Daily Rental Rate')
  }

  handleSubmit = e => {
    e.preventDefault()
    let movie = { ...this.state.data }
    saveMovie(movie)
    console.log('submitted')
    this.props.history.push('/movies')
  }

  render() {
    const { handleSubmit } = this
    const { genres } = this.state

    return (
      <div className="container">
        <h1>Movie Form</h1>
        <form onSubmit={handleSubmit}>
          {this.renderInput('title', 'Title', 'text')}
          {this.renderSelect('genreId', 'Genre', genres)}
          {this.renderInput('numberInStock', 'Stock', 'text')}
          {this.renderInput('dailyRentalRate', 'Rate', 'text')}
          {this.renderButton('Submit')}
        </form>
      </div>
    )
  }
}

export default MovieForm
