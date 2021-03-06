import React, { Component } from 'react';
import './AddMilestone.scss';
import HeaderMain from '../HeaderMain/HeaderMain';
import TextField from '@material-ui/core/TextField';
import DatePicker from '../AddMilestone/DatePicker/DatePicker';
import FileUpload from '../FileUpload/FileUpload';
import Swal from 'sweetalert2';
import axios from 'axios';

class AddMilestone extends Component {
   constructor() {
      super();
      this.state = {
         title: '',
         description: '',
         date: '',
         location: '',
         img: '',
      }
   }

   async componentDidMount() {
      try {
         const response = await axios.get('/api/userData')
         if (response.data) {
            console.log(response.data)
         }
      } catch (error) {
         console.log(error)
         await Swal({
            type: 'error',
            title: 'Error',
            text: 'You are not logged in. Please login to begin.',
         })
         this.props.history.push('/login')
      }
   }

   onKeyPress = (e) => {
      if(e.which === 13) {
         this.addMilestone();
      }
   }

   handleDateChange = (date) => {
      this.setState({date: date})
   }

   render() {
      return (
         <div className='add-main' >
            < HeaderMain /> 

            <div className='body-main' >
               <div className='add-milestone-text'>
                  <h2>Add Milestone</h2>
               </div>

               <div className='input-box' >
                  <TextField
                  id="title"
                  label="Title (max 50 char.)"
                  value={this.state.titleInput}
                  onChange={ (e) => this.setState({title: e.target.value}) }
                  margin="normal"
                  autoFocus={true}
                  onKeyPress={this.onKeyPress}
                  className='input-field'
                  />
                  <TextField
                  id="description"
                  label="Description (max 50 char.)"
                  value={this.state.descriptionInput}
                  onChange={ (e) => this.setState({description: e.target.value}) }
                  margin="normal"
                  onKeyPress={this.onKeyPress}
                  className='input-field'
                  />
                  <TextField
                  id="location"
                  label="Location"
                  value={this.state.locationInput}
                  onChange={ (e) => this.setState({location: e.target.value}) }
                  margin="normal"
                  onKeyPress={this.onKeyPress}
                  className='input-field'
                  />
                  <DatePicker
                  id="date"
                  value={this.state.dateInput}
                  margin="normal"
                  handleDateChange={this.handleDateChange}
                  />
                  <div>
                     < FileUpload
                     state={this.state}
                     />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default AddMilestone;