import React, { Component } from 'react';

import NavStaticLight from '../components/NavStaticLight'
import BountiesMain from '../components/BountiesMain'

class Bounties extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <NavStaticLight />
        </div>
        <BountiesMain />
      </div>
    );
  }
}

export default Bounties
