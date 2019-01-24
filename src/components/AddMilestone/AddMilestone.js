import React, { Component } from 'react';
import './AddMilestone.scss';
import HeaderMain from '../HeaderMain/HeaderMain';
import TextField from '@material-ui/core/TextField';
import DatePicker from '../AddMilestone/DatePicker/DatePicker';
import FileUpload from '../FileUpload/FileUpload';

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
                  label="Title"
                  value={this.state.titleInput}
                  onChange={ (e) => this.setState({title: e.target.value}) }
                  margin="normal"
                  autoFocus={true}
                  onKeyPress={this.onKeyPress}
                  />
                  <TextField
                  id="description"
                  label="Description"
                  value={this.state.descriptionInput}
                  onChange={ (e) => this.setState({description: e.target.value}) }
                  margin="normal"
                  onKeyPress={this.onKeyPress}
                  />
                  <TextField
                  id="location"
                  label="Location"
                  value={this.state.locationInput}
                  onChange={ (e) => this.setState({location: e.target.value}) }
                  margin="normal"
                  onKeyPress={this.onKeyPress}
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