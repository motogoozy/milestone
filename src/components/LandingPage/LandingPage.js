import React, { Component } from 'react';
import BackgroundImage from '../../assets/background.png';
import LandingPageHeader from './LandingPageHeader/LandingPageHeader';
import './LandingPage.css';

var selectionStyle = {
   backgroundImage: `url(${BackgroundImage})`,
   backgroundSize: 'contain',
   height: '1400px',
   width: '100vw',
   backgroundRepeat: 'no-repeat',
   position: 'fixed'
}

class LandingPage extends Component {
   render() {
      return (
         <div className='background' style={selectionStyle} >
         < LandingPageHeader />
            <p>A simple way to remember life's special moments.</p>
         </div>
      );
   }
}

export default LandingPage;