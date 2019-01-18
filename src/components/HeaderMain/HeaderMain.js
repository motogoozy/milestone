import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './HeaderMain.css';
import stoneIcon from '../../assets/milestoneIcon2.png';
import axios from 'axios';

class HeaderMain extends Component {

   async logout() {
      const res = await axios.get('/auth/logout')
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