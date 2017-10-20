import React, { Component } from 'react'

import NavStaticLight from '../components/NavStaticLight'

class About extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <NavStaticLight />
        </div>
        <h1>This is the about page.</h1>
      </div>
    );
  }
}

export default About
