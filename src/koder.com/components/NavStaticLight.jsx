import React, { Component } from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'

import styles from './NavStaticLight.css'

import logoDark from '../assets/images/logo-dark.png'

class NavStaticLight extends Component {
  render() {
    return (
      <Router>
        <nav className="row navStaticLight">
          <div className="col-md-4 left-nav">
            <ul className="linkList">
              <li class="navListItem">
                <Link to="/">Home</Link>
              </li>
              <li class="navListItem">
                <Link to="/blog">Blog</Link>
              </li>
              <li class="navListItem">
                <Link to="/contact">Contact</Link>
              </li>
              <li class="navListItem">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mid-nav">
            <img src={logoDark} />
          </div>
          <div className="col-md-4 right-nav">
            <a className="subButton" href="http://www.koder.com/bounties">subscriptions</a>
          </div>
        </nav>
      </Router>
    )
  }
}

export default NavStaticLight
