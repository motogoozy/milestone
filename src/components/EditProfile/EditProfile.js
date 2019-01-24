import React, { Component } from 'react';
import axios from 'axios';
import HeaderMain from '../HeaderMain/HeaderMain';
import TextField from '@material-ui/core/TextField';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserData } from '../../ducks/reducer';
import './EditProfile.scss'

class EditProfile extends Component {
   constructor(props) { //Must pass props into constructor.
      super(props);
      this.state = {
         username: props.user.username, //when referencing props in the constructor we don't need to say 'this'. 
         profile_pic: props.user.profile_pic,
         img: '',
      }
   }

   handleProfileChange = async (event) => {
      if (this.state.profile_pic !== this.props.user.profile_pic) {
         event.preventDefault();
         const formData = new FormData();
         formData.append('file', this.state.profile_pic[0]);
         axios.post(`/upload`, formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
         }).then(response => {
            this.setState({img: response.data.Location});
            const { username, img } = this.state;
            const { user_id } = this.props.user;
            if(this.state.username.length < 1) {
               alert('Username cannot Please enter a username')
            } else {
               const res = axios.put('/api/userData/edit', { username, profile_pic: img, user_id })
               console.log(res);
            }
            this.props.history.push('/dashboard')
         }).catch(error => {
            console.log(error)
         });
      } else {
         const { username, profile_pic } = this.state;
         const { user_id } = this.props.user;
         if(this.state.username.length < 1) {
            alert('Username cannot Please enter a username')
         } else {
            const res = await axios.put('/api/userData/edit', { username, profile_pic, user_id })
            console.log(res);
         }
         this.props.history.push('/dashboard')
      }


   }

   handleFileUpload = (event) => {
      this.setState({profile_pic: event.target.files});
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
                  onKeyPress={this.onKeyPress}
                  />
                  
                  <form onSubmit={this.handleProfileChange} className='form'>
                  <h4 className='change-text'>Change Profile Picture:</h4>
                     <input label='upload file' type='file' onChange={this.handleFileUpload} className='file-input' />
                     <div className='add-container'>
                        <button onClick={ (e) => this.props.history.push('/dashboard')} className='input-box-button' >Back</button>
                        <button type='submit' className='input-box-button'>Submit</button>
                     </div>
                  </form>
                  <div className='add-button-container'>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (reduxState) => reduxState;


export default withRouter(connect(mapStateToProps, {getUserData})(EditProfile))