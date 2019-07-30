import React from 'react'

const input = ({ name, value, label, onChange, error }) => {
  return (
    <div className="form-row">
      <div className="form-group col-lg-6">
        <label htmlFor={name}>{label}</label>
        <input
          onChange={onChange}
          value={value}
          name={name}
          id={name}
          type="text"
          className="form-control"
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  )
}

export default input
