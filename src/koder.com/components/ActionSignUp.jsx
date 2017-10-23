import React, { Component } from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'

import styles from './ActionSignUp.css'

class ActionSignUp extends Component {
  render() {
    return (
      <div className="container">
        <div className="actionSignUp row">
          <div className="col-md-4 accessDevelopers">
            Get access to top developers
          </div>
          <div className="col-md-4 joinBeta">
            Join the private beta today
          </div>
          <div className="col-md-4 signUp">
            <Link to="/blog">Sign up free</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ActionSignUp
