import React from 'react'

const input = ({ name, value, label, onChange }) => {
  return (
    <div className="form-row">
      <div className="form-group col-lg-6">
        <label htmlFor={name}>{label}</label>
        <input
          autoFocus
          onChange={onChange}
          value={value}
          name={name}
          id={name}
          type="text"
          className="form-control"
        />
      </div>
    </div>
  )
}

export default input
