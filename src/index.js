import React from 'react'
import ReactDOM from 'react-dom'

// Logging
import * as Sentry from '@sentry/browser'

// Main Container
import App from './containers/App'

// ROUTER
import { BrowserRouter as Router } from 'react-router-dom'

// CSS
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

// import * as serviceWorker from './serviceWorker'

Sentry.init({
  dsn: 'https://fe7c3bfccf48469890b3e1253d42d26b@sentry.io/1525724'
})

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
// serviceWorker.unregister()
