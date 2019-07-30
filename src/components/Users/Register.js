import React, { Component } from 'react'

class Register extends Component {
  state = {
    account: { username: '', password: '' }
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account }
    account[input.name] = input.value
    this.setState({ account })
  }

  render() {
    const { username, password } = this.state.account
    const { handleSubmit, handleChange } = this
    return (
      <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-lg-6">
              <label htmlFor="username">Username</label>
              <input
                autoFocus
                onChange={handleChange}
                value={username}
                name="username"
                id="username"
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-lg-6">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                value={password}
                onChange={handleChange}
                id="password"
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <button className="btn btn-primary btn-lg">Submit</button>
        </form>
      </>
    )
  }
}

export default Register
