import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './EditMilestone.css';
import HeaderMain from '../HeaderMain/HeaderMain';


class EditMilestone extends Component {
   constructor() {
      super();
      this.state = {
         user_id: 0,
         titleInput: '',
         descriptionInput: '',
         dateInput: '',
         locationInput: '',
         imgInput: ''
      }
   }


   render() {
      return (
         <div className='edit-main' >
            < HeaderMain /> 

            <div className='body' >
               <div className='edit-milestone-text'>
                  <h2>Edit Milestone</h2>
               </div>

               <div className='input-menu' >
                  <Link to='/dashboard'><button>Back</button></Link>
                  <input type="text" className='input-box' placeholder='Title (max 50 char.)' />
                  <input type="text" className='input-box' placeholder='Description (max 50 char.)' />
                  <input type="text" className='input-box' placeholder='Date (mm/dd/yyyy)' />
                  <input type="text" className='input-box' placeholder='Location (max 50 char.)' />
                  <input type="text" className='input-box' placeholder='Image URL' />
                  <button>Submit</button>
               </div>
            </div>
         </div>
      );
   }
}

export default EditMilestone;