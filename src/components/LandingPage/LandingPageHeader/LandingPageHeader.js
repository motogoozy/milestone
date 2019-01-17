import React, { Component } from 'react';
import LandingNavButtons from './LandingNavButtons/LandingNavButtons';
import './LandingPageHeader.css';
import stoneIcon from '../../../assets/milestoneIcon2.png'



class LandingPageHeader extends Component {

   render() {

      return (
         <div className='navbar'>
            <div className='brand-container'>
               <img src={stoneIcon} alt="" className='icon'/>
               <p className='brand' >Milestone</p>
            </div>
            
            <div>
               < LandingNavButtons />
            </div>
         </div>
      );
   }
}

export default LandingPageHeader;