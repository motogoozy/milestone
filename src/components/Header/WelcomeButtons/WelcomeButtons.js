import React, { Component } from 'react';
import RegisterButton from '../RegisterButton/RegisterButton';
import './WelcomeButtons.css';

class WelcomeButtons extends Component {
   render() {
      return (
         <div className='nav-buttons'>
               <div className='login-button-container'>
                  <p className='login-button' >Login</p>
               </div>
               < RegisterButton />
         </div>
      );
   }
}

export default WelcomeButtons;