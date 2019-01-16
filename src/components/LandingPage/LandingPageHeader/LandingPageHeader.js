import React, { Component } from 'react';
import LandingNavButtons from './LandingNavButtons/LandingNavButtons';
import './LandingPageHeader.css';



class LandingPageHeader extends Component {

   render() {
      const stoneIcon = 'http://cdn.onlinewebfonts.com/svg/img_498163.png';
      const user = {
         // id:1
      };

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