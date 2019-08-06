import React from 'react'
import ReactDOM from 'react-dom'

// Main Container
import App from './containers/App'

// ROUTER
import { BrowserRouter as Router } from 'react-router-dom'

// CSS
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

// import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
// serviceWorker.unregister()
