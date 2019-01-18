import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../assets/background.png';
import stoneIcon from '../../assets/milestoneIcon2.png';
import './Register.css';
import axios from 'axios';
import Swal from 'sweetalert2';


var selectionStyle = {
   backgroundImage: `url(${BackgroundImage})`,
   backgroundSize: 'contain',
   height: '1400px',
   width: '100vw',
   backgroundRepeat: 'no-repeat',
   position: 'fixed'
}

class Register extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         password: '',
         profile_pic: ''
      }
   }

   async register() {
      const { username, password, profile_pic } = this.state;
      const res = await axios.post(`/auth/register`, { username: username, password: password, profile_pic: profile_pic })
      if (res.data.loggedIn) {
         this.props.history.push('/dashboard')
      }
   }


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
               <input onChange={ (e) => this.setState({username: e.target.value}) } type="text" placeholder='Create a Username' className='register-input' />
               <input onChange={ (e) => this.setState({password: e.target.value}) } type="text" placeholder='Create a Password' className='register-input' />
               <input onChange={ (e) => this.setState({profile_pic: e.target.value}) } type="text" placeholder='Upload a Profile Picture' className='register-input' />
               <div>
                  <button onClick={() => this.props.history.push('/')} >Back</button>
                  <button onClick={() => this.register()} className='register-input' >Submit</button>
               </div>
            </div>
         </div>
      );
   }
}

export default Register;