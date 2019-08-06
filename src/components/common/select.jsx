import React from 'react'

const select = ({ name, label, error, options, value, handler }) => {
  const makeUpperCase = input => {
    return input.charAt(0).toUpperCase() + input.slice(1)
  }
  return (
    <div className="form-row align-items-center">
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select
          value={value}
          onChange={handler}
          className="form-control"
          name={name}
          id={name}
        >
          {options.map(genre => (
            <option key={genre} value={genre}>
              {makeUpperCase(genre)}
            </option>
          ))}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  )
}

export default select
