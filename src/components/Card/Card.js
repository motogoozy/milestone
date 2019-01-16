import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import EditButton from '../Dashboard/EditButton/EditButton';


function Card (props) {
   const { title, description, date, location, img } = props
   console.log(`Displaying milestone: ${props.id}`)
      return (
         <div className='card'>

               <div className='card-header'>
                  <p className='card-title'>{title}</p>
                  <p className='card-text'>{date}</p>
                  <p className='card-text'>{location}</p>
               </div>

            <div className='image-container' >
               <img src={img} alt="" className='img'/>
            </div>

            <div className='description-container' >
               <p className='card-text'>{description}</p>
            </div>

            <div className='button-container'>
               <Link to='' style={{textDecoration: 'none'}} className='lower-button'>
                  <p>Edit</p>
               </Link>
               <Link to='' style={{textDecoration: 'none'}} className='lower-button'>
                  <p>Delete</p>
               </Link>
            </div>
         </div>
      )
}

export default Card;