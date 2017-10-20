import React, { Component } from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'

import About from './koder.com/pages/About'
import Bounties from './koder.com/pages/Bounties'
import BrandGuidelines from './koder.com/pages/BrandGuidelines'
import Contact from './koder.com/pages/Contact'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/about" component={About}/>
            <Route exact path="/" component={Bounties}/>
            <Route exact path="/brandguidelines" component={BrandGuidelines}/>
            <Route exact path="/contact" component={Contact}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
