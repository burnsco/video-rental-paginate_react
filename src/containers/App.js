import React, { Component } from 'react'
import Navbar from '../components/Navigation/navbar.jsx'
import Movies from '../components/Movies/Movies.jsx'
import Customers from '../components/Customers/Customers.jsx'
import Rentals from '../components/Rentals/Rentals.jsx'
import NotFound from '../components/Navigation/not_found.jsx'
import Login from '../components/Users/Login.jsx'
import Register from '../components/Users/Register.jsx'
import MovieForm from '../components/Movies/MovieForm.jsx'
import { Route, Switch, Redirect } from 'react-router-dom'
import NewMovie from '../components/Movies/newMovie.jsx'

class App extends Component {
  render() {
    const navItems = [
      { label: 'Movies', path: '/movies' },
      { label: 'Rentals', path: '/rentals' },
      { label: 'Customers', path: '/customers' },
      { label: 'Login', path: '/login' },
      { label: 'Register', path: '/register' }
    ]
    return (
      <>
        <Navbar items={navItems} brand="Vidly" />
        <main className="container-fluid mt-2">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/movies/new" component={NewMovie} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/" exact component={Movies} />
            <Route path="/not_found" component={NotFound} />
            <Redirect to="/not_found" />
          </Switch>
        </main>
      </>
    )
  }
}

export default App
