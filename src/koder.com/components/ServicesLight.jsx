import React, { Component } from 'react'

import styles from './ServicesLight.css'
import iconsmind from './iconsmind.css'

class ServicesLight extends Component {
  render() {
    return (
      <div className="container">
        <div className="servicesLight row">
          <div className="service">
            <i className="icon-Coins serviceIcon"></i>
            <div className="serviceName">Bounties</div>
            <div className="serviceIntro">pay for results, not hourly fees</div>
          </div>
          <div className="service">
            <i className="icon-Conference serviceIcon"></i>
            <div className="serviceName">Crowdsourcing</div>
            <div className="serviceIntro">the globe's top developers</div>
          </div>
          <div className="service">
            <i className="icon-Brain serviceIcon"></i>
            <div className="serviceName">A.I. Vetting</div>
            <div className="serviceIntro">only the best developers and bounties</div>
          </div>
          <div className="service">
            <i className="icon-Coding serviceIcon"></i>
            <div className="serviceName">Any Code</div>
            <div className="serviceIntro">from small bugs to full apps</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ServicesLight
