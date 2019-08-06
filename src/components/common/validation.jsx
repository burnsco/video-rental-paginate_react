import React, { Component } from 'react'
import Input from '../common/input.jsx'
import * as Joi from 'joi-browser'

class Login extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {}
  }

  schema = {
    username: Joi.string()
      .required()
      .label('Username'),
    password: Joi.string()
      .required()
      .label('Password')
  }

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    })
    if (!result.error) return null
    const errors = {}
    for (let item of result.error.details) errors[item.path[0]] = item.message
    return errors
  }

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }
    const schema = { [name]: this.schema[name] }
    const { error } = Joi.validate(obj, schema)
    return error ? error.details[0].message : null
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
