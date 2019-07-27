import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
