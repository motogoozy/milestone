import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { getUserData } from '../../ducks/reducer';
import axios from 'axios';
import './HeaderMain.css';
import stoneIcon from '../../assets/milestoneIcon2.png';
import Swal from 'sweetalert2';

class HeaderMain extends Component {

   async componentDidMount() {
      const res = await axios.get('/api/userData')
      this.props.getUserData(res.data)
   }

   async logout() {
      await axios.get('/auth/logout')
      const toast = Swal.mixin({
         toast: true,
         position: 'center',
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
      const { username, profile_pic } = this.props.user;
      console.log(username)

      return (
         <div className='header-nav'>
            <div className='navbar'>
               <Link to='/' style={{textDecoration: 'none'}} >
                  <div className='brand-container'>
                     <img src={stoneIcon} alt="" className='icon'/>
                     <p className='brand' >Milestone</p>
                  </div>
               </Link>
         
               <div className='profile-container' >
                  <div className='logout-button-container'>
                     <p onClick={() => this.logout()} className='logout-button'>Logout</p>
                  </div>
                  <div className='user-info'>
                     {
                        profile_pic ? (
                           <img src={profile_pic} alt="" className='profile-pic' ></img>
                        ) : <img src='https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg' alt="" className='profile-pic' ></img>
                     }
                  </div>
               </div>
               
            </div>
         </div>
      );
   }
}


const mapStateToProps = (reduxState) => reduxState;


export default connect(mapStateToProps, {getUserData})(withRouter(HeaderMain));