import React, { Component } from 'react'
import { getMovies, getMovie } from '../../services/fakeMovieService'
import { getGenres } from '../../services/fakeGenreService'
import MoviesList from './moviesList.jsx'
import MoviesTable from '../common/Table/index.jsx'
import Pagination from '../common/Pagination.jsx'
import { Paginate } from '../../utils/paginate.jsx'
import { Link } from 'react-router-dom'
import _ from 'lodash'

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: { name: 'All Genres', _id: '' },
    itemsPerPage: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' }
  }
  componentWillMount() {
    const movies = getMovies()
    const genres = [{ name: 'All Genres', _id: '' }, ...getGenres()]
    this.setState({ movies, genres })
  }
  likeMovieHandler = movie => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index].liked = !movies[index].liked
    this.setState({ movies })
  }
  deleteMovieHandler = movie => {
    const movies = [...this.state.movies].filter(m => m._id !== movie._id)
    this.setState({ movies })
  }
  selectGenreHandler = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 })
  }
  pageChangeHandler = page => {
    this.setState({ currentPage: page })
  }
  sortColumnHandler = sortColumn => {
    this.setState({ sortColumn })
  }
  getMovieHandler = id => {
    return getMovie(id)
  }

  render() {
    const {
      genres,
      selectedGenre,
      itemsPerPage,
      currentPage,
      sortColumn,
      movies: allMovies
    } = this.state
    const {
      deleteMovieHandler,
      sortColumnHandler,
      selectGenreHandler,
      likeMovieHandler,
      pageChangeHandler
    } = this

    if (this.state.movies.length === 0)
      return <p>There are no movies in the database</p>

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    )

    const paginatedMovies = Paginate(sortedMovies, currentPage, itemsPerPage)

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
          <Link className="btn btn-primary mb-4" to="/movies/new">
            New Movie
          </Link>
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
}

export default Movies
