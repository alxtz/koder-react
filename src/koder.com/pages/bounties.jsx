import React, { Component } from 'react';

import NavStaticLight from '../components/NavStaticLight'
import BountiesMain from '../components/BountiesMain'
import ServicesLight from '../components/ServicesLight'
import Partners from '../components/Partners'
import Uses from '../components/Uses'
import Process from '../components/Process'
import ActionSignUp from '../components/ActionSignUp'
import FooterLight from '../components/FooterLight'

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
        <ActionSignUp />
        <FooterLight />
      </div>
    );
  }
}

export default Bounties
