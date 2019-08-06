import React from 'react'
import Form from '../common/form.jsx'
import * as Joi from 'joi-browser'

class newMovie extends Form {
  state = {
    data: {
      title: '',
      genre: '',
      stock: '',
      rate: ''
    },
    errors: {}
  }

  schema = {
    title: Joi.string()
      .required()
      .label('Title'),
    genre: Joi.string()
      .required()
      .label('Genre'),
    stock: Joi.number()
      .min(1)
      .max(100)
      .required()
      .label('Stock'),
    rate: Joi.number()
      .min(1)
      .max(10)
      .required()
      .label('Rate')
  }

  doSubmit = () => {
    // call the server
    console.log('submitted')
  }

  render() {
    const { handleSubmit } = this
    return (
      <div className="container">
        <h1>New Movie</h1>
        <form onSubmit={handleSubmit}>
          {this.renderInput('title', 'Title', 'text')}
          {this.renderSelect('genre', 'Genre')}
          {this.renderInput('stock', 'Stock', 'text')}
          {this.renderInput('rate', 'Rate', 'text')}
          {this.renderButton('Submit')}
        </form>
      </div>
    )
  }
}

export default newMovie
