import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import stoneIcon from '../../assets/milestoneIcon2.png';
import './Register.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import TextField from '@material-ui/core/TextField';




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
      if (password.length < 1) {
         await Swal({
            type: 'warning',
            title: 'Oops!',
            text: 'Please enter a password.'
         })
      } else {
         const res = await axios.post(`/auth/register`, { username: username, password: password, profile_pic: profile_pic })
         if (res.data.loggedIn) {
            await Swal(
               `Welcome, ${username}!`,
               'You have successfully created an account.',
               'success'
            )
         this.props.history.push('/dashboard')
         } else {
         await Swal({
            type: 'error',
            title: 'Oops!',
            text: res.data.message
         })
         }
      }
   }

   onKeyPress = (e) => {
      if(e.which === 13) {
         this.register();
      }
   }


   render() {
      return (
         <div className='main'>
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
               <TextField
                  label="Create a Username"
                  value={this.state.username}
                  onChange={ (e) => this.setState({username: e.target.value}) }
                  margin="normal"
                  autoFocus="autoFocus"
                  onKeyPress={this.onKeyPress}
               />
               <TextField
                  id="standard-password-input"
                  label="Create a Password"
                  value={this.state.password}
                  onChange={ (e) => this.setState({password: e.target.value}) }
                  margin="normal"
                  type="password"
                  onKeyPress={this.onKeyPress}
               />
               <TextField
                  label="Profile Picture URL"
                  value={this.state.profile_pic}
                  onChange={ (e) => this.setState({profile_pic: e.target.value}) }
                  margin="normal"
                  onKeyPress={this.onKeyPress}
               />
               <div>
                  <button onClick={() => this.props.history.push('/')} className='register-back-submit-buttons' >Back</button>
                  <button onClick={() => this.register()} className='register-back-submit-buttons' >Submit</button>
               </div>
            </div>
         </div>
      );
   }
}

export default Register;