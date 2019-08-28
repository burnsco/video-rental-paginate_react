import http from './httpService'

export function getGenres() {
  return http.get('http://localhost:3900/api/genres')
}

export function getMovies() {
  return http.get('http://localhost:3900/api/movies')
}

export function getMovie(movieId) {
  return http.get('http://localhost:3900/api/movies.' + movieId)
}

export function saveMovie(movie) {
  if (movie._id) {
    http.put('http://localhost:3900/api/movies/' + movie._id)
  }
}

export function deleteMovie(movieId) {
  return http.delete('http://localhost:3900/api/movies/' + movieId)
}
