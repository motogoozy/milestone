import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './HeaderMain.css';
import stoneIcon from '../../assets/milestoneIcon2.png';
import axios from 'axios';
import Swal from 'sweetalert2';

class HeaderMain extends Component {

   async logout() {
      await axios.get('/auth/logout')
      const toast = Swal.mixin({
         toast: true,
         position: 'top-end',
         showConfirmButton: false,
         timer: 3000
      });
      
      toast({
         type: 'success',
         title: 'Logged out successfully'
      })
      this.props.history.push('/')
   }

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
                  <p onClick={() => this.logout()} className='logout-button'>Logout</p>  
               </div>
            </div>
         </div>
      );
   }
}

export default withRouter(HeaderMain);