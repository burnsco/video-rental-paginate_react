import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const navbar = ({ items, brand }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <nav className="navbar-nav">
        <Link className="navbar-brand" to="/">
          {brand}
        </Link>
        {items.map(item => (
          <NavLink
            key={item.label}
            className="nav-item nav-link"
            to={item.path}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </nav>
  )
}

export default navbar
