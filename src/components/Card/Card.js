import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';


function Card (props) {
   const { title, description, date, location, img } = props
   console.log(`Displaying milestone: ${props.id}`)
   const googleMapsURL = `https://www.google.com/maps/place/${location}`;

      return (
         <div className='card'>

               <div className='card-header'>
                  <p className='card-title'>{title}</p>
                  <p className='card-text'>{date}</p>
                  <a href={googleMapsURL} className='card-text'>{location}</a>
               </div>

            <div className='image-container' >
               <img src={img} alt="" className='img'/>
            </div>

            <div className='description-container' >
               <p className='card-text'>{description}</p>
            </div>

            <div className='button-container'>
               <Link to='/edit' style={{textDecoration: 'none'}} className='lower-button'>
                  <p>Edit</p>
               </Link>
               
                  <p className='lower-button' >Delete</p>
            </div>
         </div>
      )
}

export default Card;