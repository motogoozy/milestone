import React, { Component } from 'react';
import './Card.css';
import Swal from 'sweetalert2';
import axios from 'axios';



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
      }
   }

   componentDidMount() {
      axios.get(`/api/milestones/getOne/${this.props.milestone_id}`).then(res => {
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
      const {value: edits} = await Swal({
         title: 'Edit Milestone',
         html:
            '<input id="title-input" class="swal2-input" placeholder="Title">' +
            '<input id="description-input" class="swal2-input" placeholder="Description" >' +
            '<input id="date-input" class="swal2-input" placeholder="Date">' +
            '<input id="location-input" class="swal2-input" placeholder="Location" >' +
            '<input id="img-input" class="swal2-input" placeholder="Image URL" >',
            focusConfirm: false,
            
            preConfirm: () => {
            this.setState ({
               title: document.getElementById('title-input').value,
               description: document.getElementById('description-input').value,
               date: document.getElementById('date-input').value,
               location: document.getElementById('location-input').value,
               img: document.getElementById('img-input').value
            })
            let edits =  [
               document.getElementById('title-input').value,
               document.getElementById('description-input').value,
               document.getElementById('date-input').value,
               document.getElementById('location-input').value,
               document.getElementById('img-input').value,
            ]
            let body = { title: edits[0], description: edits[1], date: edits[2], location: edits[3], img: edits[4], milestone_id: this.state.milestone_id }
                  axios.put('/api/milestone/edit', body)
            }
         })
   }

   async handleDelete(milestone_id) {
      const response = await axios.delete(`/api/milestones/delete/${milestone_id}`)
      console.log(response.data.message);
   }


   render () {
      const { title, description, date, location, img, milestone_id } = this.state
      console.log(`Displaying milestone: ${this.props.milestone_id}`)
      const googleMapsURL = `https://www.google.com/maps/place/${location}`;


      return (
         <div className='card'>
            <div className='card-header'>
               <p className='card-title'>{title}</p>
               <p className='card-text'>{date}</p>
               <a href={googleMapsURL} className='card-text' target='_blank' rel="noopener noreferrer" >{location} </a>
            </div>

            <div className='image-container' >
               <img src={img} alt="" className='img'/>
            </div>

            <div className='description-container' >
               <p className='card-text'>{description}</p>
            </div>

            <div className='button-container'>
                  <p className='lower-button' style={{cursor: 'pointer'}}
                     onClick={ () => this.handleEdit()} >
                        Edit
                  </p>
               
                  <p onClick={ () => this.handleDelete(milestone_id) } className='lower-button' style={{cursor: 'pointer'}}>
                        Delete
                  </p>
            </div>

         </div>
      )
   }
      
}

export default Card;