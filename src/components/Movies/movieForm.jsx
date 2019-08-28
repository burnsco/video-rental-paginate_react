import React from 'react'
import Form from '../common/form.jsx'
import * as Joi from 'joi-browser'
import { getGenres, getMovie, saveMovie } from '../../services/movieService'

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

  async populateGenres() {
    const { data: genres } = await getGenres()
    this.setState({ genres })
  }

  async populateMovie() {
    try {
      const movieId = this.props.match.params.id
      if (movieId === 'new') return

      const { data: movie } = await getMovie(movieId)
      this.setState({ data: this.mapToViewModel(movie) })
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace('/not-found')
    }
  }

  async componentDidMount() {
    await this.populateGenres()
    await this.populateMovie()
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

  handleSubmit = async e => {
    e.preventDefault()
    await saveMovie(this.state.data)

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
          {this.renderInput('numberInStock', 'Stock', 'number')}
          {this.renderInput('dailyRentalRate', 'Rate', 'number')}
          {this.renderButton('Submit')}
        </form>
      </div>
    )
  }
}

export default MovieForm
