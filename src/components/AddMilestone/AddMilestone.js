import React, { Component } from 'react';
import axios from 'axios';
import './AddMilestone.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import TextField from '@material-ui/core/TextField';
import DatePicker from '../AddMilestone/DatePicker/DatePicker';

class AddMilestone extends Component {
   constructor() {
      super();
      this.state = {
         titleInput: '',
         descriptionInput: '',
         dateInput: '',
         locationInput: '',
         imgInput: '',
      }
   }

   async addMilestone() {
      const { titleInput, descriptionInput, dateInput, locationInput, imgInput } = this.state;
      const response = await axios.post('/api/milestones/add', { title: titleInput, description: descriptionInput, date: dateInput, location: locationInput, img: imgInput })
      this.props.history.push('/dashboard');
      console.log(response.data)
   }

   onKeyPress = (e) => {
      if(e.which === 13) {
         this.addMilestone();
      }
   }

   handleDateChange = (date) => {
      this.setState({dateInput: date})
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
                  onChange={ (e) => this.setState({titleInput: e.target.value}) }
                  margin="normal"
                  autoFocus={true}
                  onKeyPress={this.onKeyPress}
                  />
                  <TextField
                  id="description"
                  label="Description"
                  value={this.state.descriptionInput}
                  onChange={ (e) => this.setState({descriptionInput: e.target.value}) }
                  margin="normal"
                  onKeyPress={this.onKeyPress}
                  />
                  <TextField
                  id="location"
                  label="Location"
                  value={this.state.locationInput}
                  onChange={ (e) => this.setState({locationInput: e.target.value}) }
                  margin="normal"
                  onKeyPress={this.onKeyPress}
                  />
                  <DatePicker
                  id="date"
                  value={this.state.dateInput}
                  margin="normal"
                  handleDateChange={this.handleDateChange}
                  />
                  <TextField
                  id="img"
                  label="Image URL"
                  value={this.state.imgInput}
                  onChange={ (e) => this.setState({imgInput: e.target.value}) }
                  margin="normal"
                  onKeyPress={this.onKeyPress}
                  />
                  <div className='add-button-container'>
                     <button onClick={ (e) => this.props.history.push('/dashboard')} className='add-menu-button' >Back</button>
                     <button onClick={() => this.addMilestone()} className='add-menu-button' >Add</button>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default AddMilestone;