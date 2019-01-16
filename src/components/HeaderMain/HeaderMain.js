import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderMain.css';

class HeaderMain extends Component {
   render() {
      const stoneIcon = 'http://cdn.onlinewebfonts.com/svg/img_498163.png';

      return (
         <div className='header-nav'>
            <div className='navbar'>
               <div className='brand-container'>
                  <img src={stoneIcon} alt="" className='icon'/>
                  <p className='brand' >Milestone</p>
               </div>
                  <div className='logout-button-container'>
                     <Link to='/' className='logout-button' >
                        Logout
                     </Link>
                  </div>
            </div>
         </div>
      );
   }
}

export default HeaderMain;