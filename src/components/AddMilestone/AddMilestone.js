import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AddMilestone.css';
import HeaderMain from '../HeaderMain/HeaderMain';


class AddMilestone extends Component {
   constructor() {
      super();
      this.state = {
         user_id: 1,
         titleInput: '',
         descriptionInput: '',
         dateInput: '',
         locationInput: '',
         imgInput: ''
      }
   }

   async addMilestone() {
      const { user_id, titleInput, descriptionInput, dateInput, locationInput, imgInput } = this.state;
      const response = await axios.post('/api/milestones/add', { user_id: user_id, title: titleInput, description: descriptionInput, date: dateInput, location: locationInput, img: imgInput })
      this.props.history.push('/dashboard');
      console.log(response);
   }


   render() {
      return (
         <div className='add-main' >
            < HeaderMain /> 

            <div className='body' >
               <div className='add-milestone-text'>
                  <h2>Add Milestone</h2>
               </div>

               <div className='input-menu' >
                  <Link to='/dashboard'><button>Back</button></Link>
                  <input 
                     type="text" 
                     className='input-box' 
                     placeholder='Title (max 50 char.)'
                     onChange={(e) => this.setState({titleInput: e.target.value})} />
                  <input 
                     type="text" 
                     className='input-box' 
                     placeholder='Description (max 50 char.)'
                     onChange={(e) => this.setState({descriptionInput: e.target.value})} />
                  <input 
                     type="text" 
                     className='input-box' 
                     placeholder='Date (mm/dd/yyyy)'
                     onChange={(e) => this.setState({dateInput: e.target.value})} />
                  <input 
                     type="text" 
                     className='input-box' 
                     placeholder='Location (max 50 char.)'
                     onChange={(e) => this.setState({locationInput: e.target.value})} />
                  <input 
                     type="text" 
                     className='input-box' 
                     placeholder='Image URL'
                     onChange={(e) => this.setState({imgInput: e.target.value})} />
                  <button onClick={() => this.addMilestone()} >Add</button>
               </div>
            </div>
         </div>
      );
   }
}

export default AddMilestone;