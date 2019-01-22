import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router-dom';
import axios from 'axios';
import './HeaderMain.scss';
import stoneIcon from '../../assets/milestoneIcon2.png';
import UserMenu from '../HeaderMain/UserMenu/UserMenu';


class HeaderMain extends Component {
   constructor() {
      super();
      this.state = {
         showMenu: false
      }
   }


   async componentDidMount() {
      const res = await axios.get('/api/userData')
      this.props.getUserData(res.data)
      console.log(`user: ${res.data.username}`)
   }



   render() {
      const { username } = this.props.user;

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
                  <div className='username-container'>
                     { username }
                  </div>
                  
                  <div className='menu-button-container'>
                     < UserMenu />
                  </div>
                  
               </div>
               
            </div>
         </div>
      );
   }
}


const mapStateToProps = (reduxState) => reduxState;


export default withRouter(connect(mapStateToProps, {getUserData})(HeaderMain))