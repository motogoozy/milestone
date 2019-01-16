import React from 'react';
import './Card.css';


function Card (props) {
   const { title, description, date, location, img } = props
   console.log(`Displaying milestone: ${props.id}`)
      return (
         <div className='card'>

               <div className='card-header' >
                  <p>{title}</p>
                  <p>{location}</p>
                  <p>{date}</p>
               </div>

            <div className='image-container' >
               <img src={img} alt="" className='img'/>
            </div>

            <div className='description-container' >
               <p>{description}</p>
            </div>

            <div>
               <button>Edit</button>
               <button>Delete</button>
            </div>
         </div>
      )
}

export default Card;