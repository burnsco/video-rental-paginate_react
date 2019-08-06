import React from 'react'
import Form from '../common/form.jsx'
import * as Joi from 'joi-browser'

class Login extends Form {
  state = {
    data: { username: '', password: '' },
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

  doSubmit = () => {
    // call the server
    console.log('submitted')
  }

  render() {
    const { handleSubmit } = this
    return (
      <div className="container ">
        <div className="row">
          <div className="col align-self-center">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              {this.renderInput('username', 'Username', 'text')}
              {this.renderInput('password', 'Password', 'password')}
              {this.renderButton('Submit')}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
