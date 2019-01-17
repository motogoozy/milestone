import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderMain.css';
import stoneIcon from '../../assets/milestoneIcon2.png';

class HeaderMain extends Component {
   render() {

      return (
         <div className='header-nav'>
            <div className='navbar'>
               <Link to='/' style={{textDecoration: 'none'}} >
                  <div className='brand-container'>
                     <img src={stoneIcon} alt="" className='icon'/>
                     <p className='brand' >Milestone</p>
                  </div>
               </Link>
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