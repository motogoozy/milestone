import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import stoneIcon from '../../assets/milestoneIcon2.png';
import './Login.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import TextField from '@material-ui/core/TextField';



class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         password: ''
      }
   }

   async login() {
      const { username, password } = this.state;
      const res = await axios.post(`/auth/login`, { username: username, password: password })
      console.log(res.data)
      if (res.data.loggedIn) {
         const toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 3000
         });

         toast({
            type: 'success',
            title: `Welcome back, ${username}!`
         })
         this.props.history.push('/dashboard')
      } else {
         await Swal({
            type: 'error',
            title: 'Oops!',
            text: res.data.message
         })
      }
   }

   onKeyPress = (e) => {
      if(e.which === 13) {
         this.login();
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


            <div className='login-menu'>
               <h2 className='login-text' >Login</h2>
               <TextField
                  id="standard-name"
                  label="Username"
                  value={this.state.username}
                  onChange={ (e) => this.setState({username: e.target.value}) }
                  margin="normal"
                  autoFocus="autoFocus"
                  onKeyPress={this.onKeyPress}
               />
               <TextField
                  id="standard-password-input"
                  label="Password"
                  value={this.state.password}
                  onChange={ (e) => this.setState({password: e.target.value}) }
                  margin="normal"
                  type="password"
                  onKeyPress={this.onKeyPress}
               />
               <div>
                  <button onClick={ () => this.props.history.push('/')} className='login-back-submit-buttons'>Back</button>
                  <button onClick={ () => this.login() } className='login-back-submit-buttons' >Submit</button>
               </div>
            </div>
         </div>
      );
   }
}

export default Login;