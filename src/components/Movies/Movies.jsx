import React, { Component } from 'react'
import MoviesList from './moviesList.jsx'
import MoviesTable from '../common/Table/index.jsx'
import Pagination from '../common/Pagination.jsx'
import { Paginate } from '../../utils/paginate.jsx'
import { getGenres, getMovies, deleteMovie } from '../../services/movieService'
import MoviesHeader from './moviesHeader.jsx'
import _ from 'lodash'

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: { name: 'All Genres', _id: '' },
    itemsPerPage: 4,
    currentPage: 1,
    search: '',
    sortColumn: { path: 'title', order: 'asc' }
  }
  async componentDidMount() {
    const { data: movieslist } = await getMovies()
    const { data: genreslist } = await getGenres()
    const genres = [{ _id: '', name: 'All Genres' }, ...genreslist]
    const movies = [...movieslist]
    this.setState({ genres, movies })
  }
  likeMovieHandler = movie => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index].liked = !movies[index].liked
    this.setState({ movies })
  }
  deleteMovieHandler = async movie => {
    const originalMovies = this.state.movies
    const movies = originalMovies.filter(m => m._id !== movie._id)
    this.setState({ movies })

    await deleteMovie(movie._id)
  }
  selectGenreHandler = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1, search: '' })
  }
  pageChangeHandler = page => {
    this.setState({ currentPage: page })
  }
  sortColumnHandler = sortColumn => {
    this.setState({ sortColumn })
  }
  searchHandler = ({ currentTarget: input }) => {
    this.setState({
      search: input.value,
      selectedGenre: { name: 'All Genres', _id: '' },
      currentPage: 1
    })
  }

  render() {
    const {
      genres,
      selectedGenre,
      itemsPerPage,
      search,
      currentPage,
      sortColumn,
      movies: allMovies
    } = this.state

    const {
      deleteMovieHandler,
      sortColumnHandler,
      saveMovieHandler,
      selectGenreHandler,
      likeMovieHandler,
      searchHandler,
      pageChangeHandler
    } = this

    if (this.state.movies.length === 0)
      return <p>There are no movies in the database</p>

    let filteredMovies
    if (search.length < 1) {
      filteredMovies =
        selectedGenre && selectedGenre._id
          ? allMovies.filter(m => m.genre._id === selectedGenre._id)
          : allMovies
    } else {
      filteredMovies = allMovies.filter(movie => {
        return (
          movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1
        )
      })
    }

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
          <MoviesHeader
            paginatedMovies={paginatedMovies}
            searchHandler={searchHandler}
            search={search}
          />

          <MoviesTable
            sortColumn={sortColumn}
            onSort={sortColumnHandler}
            data={paginatedMovies}
            onLikeMovie={likeMovieHandler}
            onSaveMovie={saveMovieHandler}
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
