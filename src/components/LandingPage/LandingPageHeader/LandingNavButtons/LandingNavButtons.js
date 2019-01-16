import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterButton from '../LandingNavButtons/RegisterButton/RegisterButton';
import './LandingNavButtons.css';


class LandingNavButtons extends Component {
   render() {
      return (
         <div className='nav-buttons'>
               <div className='login-button-container'>
                  <Link to='/' style={{textDecoration: 'none'}} className='login-button'>
                     <p >Login</p>
                  </Link>
               </div>
               < RegisterButton />
         </div>
      );
   }
}

export default LandingNavButtons;