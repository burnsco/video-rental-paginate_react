import React from 'react'

const not_found = props => {
  return (
    <div>
      <h3>
        Page not Found, click{' '}
        <button onClick={() => props.history.replace('/')}>Here</button> to go
        back{' '}
      </h3>
    </div>
  )
}

export default not_found
