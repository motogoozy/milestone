import React, { Component } from 'react';
import LandingNavButtons from './LandingNavButtons/LandingNavButtons';
import './LandingPageHeader.scss';
import stoneIcon from '../../../assets/milestoneIcon2.png';
import hamburgerMenuIcon from '../../../assets/hamburger-menu-icon.png';
import { Link } from 'react-router-dom';


class LandingPageHeader extends Component {
   constructor() {
      super();
      this.state = {
         showMenu: false,
      }
   }

   render() {

      return (
         <div className='navbar'>
            <div className='brand-container'>
               <img src={stoneIcon} alt="" className='icon'/>
               <p className='brand' >Milestone</p>
            </div>
            
            <div className='login-register-buttons'>
               < LandingNavButtons />
            </div>
            
            <div className='menu-icon-container'>
               <img src={hamburgerMenuIcon} alt="" className='menu-icon' onClick={ (e) => this.setState({showMenu: !this.state.showMenu })} />
            </div>

            <div className={ this.state.showMenu ? 'side-menu slide' : 'side-menu'}>
               <Link to='/register' style={{textDecoration: 'none'}}>
                  <p className='side-menu-button'>Sign Up</p>
               </Link>
               <Link to='/login' style={{textDecoration: 'none'}}>
                  <p className='side-menu-button'>Login</p>
               </Link>
            </div>
         </div>
      );
   }
}

export default LandingPageHeader;