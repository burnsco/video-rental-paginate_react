import React, { Component } from 'react'
import Input from '../common/input.jsx'

class Register extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {}
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
          <Input
            name="username"
            value={username}
            label="Username"
            onChange={handleChange}
          />

          <Input
            name="password"
            value={password}
            label="Password"
            onChange={handleChange}
          />

          <button className="btn btn-primary btn-lg">Submit</button>
        </form>
      </>
    )
  }
}

export default Register
