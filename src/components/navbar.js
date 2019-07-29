import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <nav className="navbar-nav">
        <h3 className="navbar-brand">Vidly</h3>
        <NavLink className="nav-item nav-link" to="/movies">
          Movies
        </NavLink>
        <NavLink className="nav-item nav-link" to="/customers">
          Customers
        </NavLink>
        <NavLink className="nav-item nav-link" to="/rentals">
          Rentals
        </NavLink>
      </nav>
    </nav>
  )
}

export default navbar
