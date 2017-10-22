import React, { Component } from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'

import styles from './Process.css'

class Process extends Component {
  render() {
    return (
      <div className="process container">
        <div className="row">
          <div className="col-sm-3 step"></div>
          <div className="col-sm-3 step"></div>
          <div className="col-sm-3 step"></div>
          <div className="col-sm-3 step"></div>
        </div>
      </div>
    )
  }
}

export default Process
