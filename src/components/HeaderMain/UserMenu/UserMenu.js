import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserData } from '../../../ducks/reducer';
import axios from 'axios';
import Swal from 'sweetalert2';

class UserMenu extends React.Component {
   state = {
      anchorEl: null,
   };

   handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
   };

   handleClose = () => {
      this.setState({ anchorEl: null });
   };

   handleEditClick = () => {
      this.props.history.push('/edit-profile')
   }

   logout = async () => {
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
      });
      this.props.history.push('/')
   }

   render() {
      const { anchorEl } = this.state;
      const { profile_pic } = this.props.user

      return (
         <div>
            <Button
               aria-owns={anchorEl ? 'simple-menu' : undefined}
               aria-haspopup="true"
               onClick={this.handleClick}
            >
               {/* {this.props.user.username} */}
               <div className='user-info'>
                        {
                           profile_pic ? (
                              <img src={profile_pic} alt="" className='profile-pic' ></img>
                              
                           ) : <img src='https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg' alt="" className='profile-pic' ></img>
                        }
                  </div>

            </Button>
            <Menu
               id="simple-menu"
               anchorEl={anchorEl}
               open={Boolean(anchorEl)}
               onClose={this.handleClose}
            > 
               <MenuItem onClick={this.handleEditClick}>Edit Profile</MenuItem>
               <Link to='/' style={{textDecoration: 'none'}}>
                  <MenuItem onClick={this.logout}>Logout</MenuItem>
               </Link>
            </Menu>
         </div>
      );
   }
   }

   
const mapStateToProps = (reduxState) => reduxState;

export default withRouter(connect(mapStateToProps, {getUserData})(UserMenu));