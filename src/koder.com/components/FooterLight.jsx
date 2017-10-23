import React, { Component } from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'

import styles from './FooterLight.css'
import iconsmind from './socicon.css'

import logoDark from '../assets/images/logo-dark.png'

class FooterLight extends Component {
  render() {
    return (
      <div className="container">
        <div className="row footerLight">
          <div className="col-sm-6 footerLeft">
            <img className="logo" src={logoDark} alt="logoDark"/>
            <ul className="footerList">
              <li>Apply as a Developer</li>
              <li>Our Blog</li>
              <li>About Koder</li>
              <li>support@koder.com</li>
            </ul>
          </div>
          <div className="col-sm-6">
            <ul className="socialList">
              <li>
                <Link to="/">
                  <i className="socicon socicon-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterLight
