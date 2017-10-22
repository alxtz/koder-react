import React, { Component } from 'react';

import NavStaticLight from '../components/NavStaticLight'
import BountiesMain from '../components/BountiesMain'
import ServicesLight from '../components/ServicesLight'
import Partners from '../components/Partners'
import Uses from '../components/Uses'
import Process from '../components/Process'

class Bounties extends Component {
  render() {
    return (
      <div>
        <NavStaticLight />
        <BountiesMain />
        <ServicesLight />
        {/* <Partners /> */}
        <Uses />
        <Process />
      </div>
    );
  }
}

export default Bounties
