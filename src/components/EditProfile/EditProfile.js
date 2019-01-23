import React, { Component } from 'react';
import axios from 'axios';
import HeaderMain from '../HeaderMain/HeaderMain';
import TextField from '@material-ui/core/TextField';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserData } from '../../ducks/reducer';

class EditProfile extends Component {
   constructor(props) { //Must pass props into constructor.
      super(props);
      this.state = {
         username: props.user.username, //when referencing props in the constructor we don't need to say 'this'. 
         profile_pic: props.user.profile_pic,
      }
   }

   async handleProfileChange() {
      const { username, profile_pic } = this.state;
      const { user_id } = this.props.user;
      if(this.state.username.length < 1) {
         alert('Please enter a username')
      } else {
         const response = await axios.put('/api/userData/edit', { username, profile_pic, user_id })
         console.log(response.data)
      }
      this.props.history.push('/dashboard')
   }

   render() {
      return (
         <div className='add-main' >
            < HeaderMain /> 

            <div className='body-main' >
               <div className='add-milestone-text'>
                  <h2>Edit Profile</h2>
               </div>

               <div className='input-box' >
                  <TextField
                  id="standard-name"
                  label="Change Username"
                  value={this.state.username}
                  onChange={ (e) => this.setState({username: e.target.value}) }
                  margin="normal"
                  autoFocus={true}
                  onKeyPress={this.onKeyPress}
                  />
                  <TextField
                  id="standard-name"
                  label="Change Profile Picture"
                  value={this.state.profile_pic}
                  onChange={ (e) => this.setState({profile_pic: e.target.value}) }
                  margin="normal"
                  onKeyPress={this.onKeyPress}
                  />
                  <div className='add-button-container'>
                     <button onClick={ (e) => this.props.history.push('/dashboard')} className='input-box-button' >Back</button>
                     <button onClick={() => this.handleProfileChange()} className='input-box-button' >Submit</button>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (reduxState) => reduxState;


export default withRouter(connect(mapStateToProps, {getUserData})(EditProfile))