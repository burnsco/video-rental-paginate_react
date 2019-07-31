import React, { Component } from 'react'
import Input from '../common/input.jsx'

class Login extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {}
  }

  validate = () => {
    const errors = {}
    const { account } = this.state

    if (account.username.trim() === '') errors.username = 'Username is required'
    if (account.password.trim() === '') errors.password = 'Password is required'

    return Object.keys(errors).length === 0 ? null : errors
  }

  validateProperty = ({ name, value }) => {
    if (name === 'username') {
      if (value.trim() === '') return 'Username is required.'
    }
    if (name === 'password') {
      if (value.trim() === '') return 'Password is required.'
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const errors = this.validate()
    this.setState({ errors: errors || {} })
    if (errors) return
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors }
    const errorMessage = this.validateProperty(input)
    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]

    const account = { ...this.state.account }
    account[input.name] = input.value
    this.setState({ account, errors })
  }

  render() {
    const { username, password } = this.state.account
    const { errors } = this.state
    const { handleSubmit, handleChange } = this

    return (
      <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Input
            name="username"
            error={errors.username}
            value={username}
            label="Username"
            onChange={handleChange}
          />

          <Input
            error={errors.password}
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

export default Login
