import React, { Component } from 'react';
import WelcomeButtons from '../Header/WelcomeButtons/WelcomeButtons';
import './Header.css';



class Header extends Component {

   render() {
      const stoneIcon = 'http://cdn.onlinewebfonts.com/svg/img_498163.png'
      const user = {
         // id:1
      };
      return (
         <div className='navbar'>
            <div className='brand-container'>
               <img src={stoneIcon} alt="" className='icon'/>
               <p className='brand' >Milestone</p>
            </div>
            
            {
               !user.id ? (
                  <div>
                     < WelcomeButtons />
                  </div>
               ) :
               <div className='logout-button-container'>
                  <p className='logout-button' >Logout</p>
               </div>
            }
            
         </div>
      );
   }
}

export default Header;