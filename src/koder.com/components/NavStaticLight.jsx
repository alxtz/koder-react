import React, { Component } from 'react'

import styles from './NavStaticLight.css'

import logoDark from '../assets/images/logo-dark.png'

class NavStaticLight extends Component {
  render() {
    return (
      <nav className="row navStaticLight">
        <div className="col-md-4 left-nav">
          <ul className="linkList">
            <li class="navListItem">
              <a href="http://www.koder.com/bounties">Home</a>
            </li>
            <li class="navListItem">
              <a href="http://www.koder.com/bounties">Blog</a>
            </li>
            <li class="navListItem">
              <a href="http://www.koder.com/bounties">Contact</a>
            </li>
            <li class="navListItem">
              <a href="http://www.koder.com/bounties">Login</a>
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
    )
  }
}

export default NavStaticLight
