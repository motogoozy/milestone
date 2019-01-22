import React, { Component } from 'react';
import './Card.scss';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import DatePicker from '../AddMilestone/DatePicker/DatePicker';



class Card extends Component {
   constructor(props) {
      super(props);
      this.state = {
         title: '',
         description: '',
         date: '',
         location: '',
         img: '',
         milestone_id: props.milestone_id,
         toggleEdit: false,
      }
   }

   componentDidMount() {
      const { milestone_id } = this.state;
      axios.get(`/api/milestones/getOne/${milestone_id}`).then(res => {
         const data = res.data[0]
         this.setState({
            title: data.title,
            description: data.description,
            date: data.date,
            location: data.location,
            img: data.img,
         })
      })
   }

   async handleEdit() {
      const { milestone_id } = this.state;
      const { title, description, date, location, img } = this.state;
      const response = await axios.put('/api/milestone/edit', {milestone_id, title, description, date, location, img })
      this.setState({toggleEdit: false})
      console.log(response.data.message)
   }

   async handleDelete(milestone_id) {
      const response = await axios.delete(`/api/milestones/delete/${milestone_id}`)
      console.log(response.data.message);
   }

   handleDateChange = (date) => {
      this.setState({date: date})
   }


   render () {
      const { title, description, date, location, img, milestone_id } = this.state
      console.log(`Displaying milestone: ${this.props.milestone_id}`)
      const googleMapsURL = `https://www.google.com/maps/place/${location}`;


      return (
         <div className='card'>
            <div className='card-header'>
               <p className='card-title'>{title}</p>
               <a href={googleMapsURL} className='card-text' target='_blank' rel="noopener noreferrer" >{location} </a>
               <p className='card-text'>{date}</p>
            </div>

            <div className='image-container' >
               <img src={img} alt="" className='img'/>
            </div>

            <div className='description-container' >
               <p className='card-text'>{description}</p>
            </div>

            <div className='lower-button-container'>
                  <p className='lower-button' style={{cursor: 'pointer'}}
                     onClick={ () => this.setState({toggleEdit: true})} >
                        Edit
                  </p>
               
                  <p onClick={ () => this.handleDelete(milestone_id) } className='lower-button' style={{cursor: 'pointer'}}>
                        Delete
                  </p>
            </div>

            
            {
               this.state.toggleEdit === true ? 
               <div className='modal-wrapper' >
                  <div className='modal'>
                     <div className='edit-input-box' >
                        <TextField
                        id="title"
                        label="Title"
                        value={this.state.title}
                        onChange={ (e) => this.setState({title: e.target.value}) }
                        margin="normal"
                        autoFocus={true}
                        onKeyPress={this.onKeyPress}
                        />
                        <TextField
                        id="description"
                        label="Description"
                        value={this.state.description}
                        onChange={ (e) => this.setState({description: e.target.value}) }
                        margin="normal"
                        onKeyPress={this.onKeyPress}
                        />
                        <TextField
                        id="location"
                        label='Location'
                        value={this.state.location}
                        onChange={ (e) => this.setState({location: e.target.value}) }
                        margin="normal"
                        onKeyPress={this.onKeyPress}
                        />
                        <DatePicker
                        id="date"
                        value={this.state.date}
                        margin="normal"
                        handleDateChange={this.handleDateChange}
                        />
                        <TextField
                        id="img"
                        label="Image URL"
                        value={this.state.img}
                        onChange={ (e) => this.setState({img: e.target.value}) }
                        margin="normal"
                        onKeyPress={this.onKeyPress}
                        />
                        <div className='button-container'>
                           <button onClick={ (e) => this.setState({ toggleEdit: false }) } className='edit-menu-button' >Cancel</button>
                           <button onClick={() => this.handleEdit()} className='edit-menu-button' >Submit</button>
                        </div>
                     </div>
                  </div>
               </div>

               : null
            }
            
            

         </div>
      )
   }
      
}

export default Card;