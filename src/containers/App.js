import React, { Component } from 'react'
import MoviesTable from '../components/moviesTable'
import { getMovies } from '../services/fakeMovieService'
import MoviesList from '../components/moviesList'
import { getGenres } from '../services/fakeGenreService'
import Pagination from '../common/Pagination.js'

class App extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: 'All Genres',
    itemsPerPage: 4,
    currentPage: 1
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
  selectGenreHandler = selectedGenre => {
    this.setState({ selectedGenre })
  }
  pageChangeHandler = page => {
    this.setState({ currentPage: page })
  }

  render() {
    let { genres, selectedGenre, itemsPerPage, currentPage } = this.state
    let movies = [...this.state.movies]
    const {
      deleteMovieHandler,
      selectGenreHandler,
      likeMovieHandler,
      pageChangeHandler
    } = this
    if (selectedGenre !== 'All Genres') {
      movies = movies.filter(m => m.genre.name === selectedGenre)
    }

    // filter by genre (and 'all genres')
    // filter by table headings ('title', 'genre' , 'stock', 'rate')

    return (
      <main className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-3">
            {movies.length > 0 && (
              <MoviesList
                data={genres}
                selectedGenre={selectedGenre}
                genreHandler={selectGenreHandler}
              />
            )}
          </div>
          <div className="col-lg-9">
            <>
              <MoviesTable
                data={movies}
                onLikeMovie={likeMovieHandler}
                onDeleteMovie={deleteMovieHandler}
              />
              <Pagination
                currentPage={currentPage}
                itemsTotal={movies.length}
                itemsPerPage={itemsPerPage}
                onPageChange={pageChangeHandler}
              />
            </>
          </div>
        </div>
      </main>
    )
  }
}

export default App
