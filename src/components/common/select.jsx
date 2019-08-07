import React from 'react'

const select = ({ name, label, error, options, handler, ...rest }) => {
  return (
    <div className="form-row align-items-center">
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select {...rest} className="form-control" name={name} id={name}>
          <option value="" />
          {options.map(genre => (
            <option key={genre._id} value={genre._id}>
              {genre.name}
            </option>
          ))}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  )
}

export default select
