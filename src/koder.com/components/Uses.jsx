import React, { Component } from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'

import styles from './Uses.css'

import feature1 from '../assets/images/feature1.png'
import feature2 from '../assets/images/feature2.png'
import feature3 from '../assets/images/feature3.png'

class Uses extends Component {
  render() {
    return (
      <div className="uses container">
        <div className="row">
          <div className="feature col-md-4">
            <img src={feature1} alt="feature1" className="featureImg"/>
            <div className="featureName">Startups</div>
            <div className="featureIntro">Accelerate your startup with a crowdsourced engineering team. Leverage Koder as your new technical co-founder.</div>
          </div>
          <div className="feature col-md-4">
            <img src={feature2} alt="feature2" className="featureImg"/>
            <div className="featureName">Enterprise</div>
            <div className="featureIntro">Innovate to stay ahead by leveraging our highly-vetted crowd marketplace and difficult to find software development expertise.</div>
          </div>
          <div className="feature col-md-4">
            <img src={feature3} alt="feature3" className="featureImg"/>
            <div className="featureName">Government</div>
            <div className="featureIntro">Embrace new ways of working, build for change and put citizens at the core with top talent from Silicon Valley and around the globe.</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Uses
