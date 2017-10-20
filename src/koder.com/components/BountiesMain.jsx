import React, { Component } from 'react'

import styles from './BountiesMain.css'

class BountiesMain extends Component {
  render() {
    return (
      <div className="bountiesMain">
        <h1 className="koderCall">
          Say hello to the future of <span className="highlightPurple"> software development </span>
        </h1>
        <h2 className="koderIntro">
          Koder is a marketplace where top developers compete for bounties, awarded in cash or cryptocurrency.
        </h2>
        <a href="#" className="signUpButton">
          Sign up for free  
        </a>
      </div>
    )
  }
}

export default BountiesMain
