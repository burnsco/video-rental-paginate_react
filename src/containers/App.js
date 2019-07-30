import React, { Component } from 'react'
import Navbar from '../components/Navigation/navbar'
import Movies from '../components/Movies/Movies'
import Customers from '../components/Customers/Customers'
import Rentals from '../components/Rentals/Rentals'
import NotFound from '../components/Navigation/not_found'
import Login from '../components/Users/Login'
import Register from '../components/Users/Register'
import MovieForm from '../components/Movies/MovieForm'
import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    const navItems = [
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
