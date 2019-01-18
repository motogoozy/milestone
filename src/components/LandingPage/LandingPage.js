import React, { Component } from 'react';
import LandingPageHeader from './LandingPageHeader/LandingPageHeader';
import './LandingPage.css';


class LandingPage extends Component {
   render() {
      return (
         <div className='background' >
         < LandingPageHeader />
            <p>A simple way to remember life's special moments.</p>
         </div>
      );
   }
}

export default LandingPage;