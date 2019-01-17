import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../assets/background.png';
import stoneIcon from '../../assets/milestoneIcon2.png';
import './Register.css';




var selectionStyle = {
   backgroundImage: `url(${BackgroundImage})`,
   backgroundSize: 'contain',
   height: '1400px',
   width: '100vw',
   backgroundRepeat: 'no-repeat',
   position: 'fixed'
}

class Register extends Component {
   render() {
      return (
         <div className='main' style={selectionStyle}>
            <div className='navbar'>
               <Link to='/' style={{textDecoration: 'none'}}>
                  <div className='brand-container'>
                  <img src={stoneIcon} alt="" className='stone-icon'/>
                  <p className='brand' >Milestone</p>
                  </div>
               </Link>
            
            </div>


            <div className='register-menu'>
               <h2 className='register-text'>Sign Up</h2>
               <input type="text" placeholder='Create a Username' className='register-input' />
               <input type="text" placeholder='Create a Password' className='register-input' />
               <input type="text" placeholder='Upload a Profile Picture' className='register-input' />
               <button className='register-input' >Submit</button>
            </div>
         </div>
      );
   }
}

export default Register;