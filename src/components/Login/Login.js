import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../assets/background.png';
import stoneIcon from '../../assets/milestoneIcon2.png';
import './Login.css';



var selectionStyle = {
   backgroundImage: `url(${BackgroundImage})`,
   backgroundSize: 'contain',
   height: '1400px',
   width: '100vw',
   backgroundRepeat: 'no-repeat',
   position: 'fixed'
}

class Login extends Component {
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


            <div className='login-menu'>
               <h2 className='login-text' >Login</h2>
               <input type="text" placeholder='Username' className='input' />
               <input type="text" placeholder='Password' className='input' />
               <button className='input' >Submit</button>
            </div>
         </div>
      );
   }
}

export default Login;