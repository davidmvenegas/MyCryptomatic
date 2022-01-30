import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from "react-router-dom"
import './index.css'
import App from './App'
import HttpsRedirect from 'react-https-redirect'

ReactDOM.render(
  <React.StrictMode>
    <HttpsRedirect>
      <HashRouter basename="/">
        <App />
      </HashRouter>
    </HttpsRedirect>
  </React.StrictMode>,
  document.getElementById('root')
)