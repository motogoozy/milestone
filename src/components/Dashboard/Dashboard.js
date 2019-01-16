import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
import Card from '../Card/Card';
import AddButton from '../AddButton/AddButton';


class Dashboard extends Component {
   constructor() {
      super();
      this.state = {
         user_id: 0,
         milestones: [],
      }
   }

   async componentDidMount() {
      try {
         const response = await axios.get(`/api/milestones/${this.state.user_id}`)
         this.setState({milestones: response.data})
         console.log(this.state.milestones)
      } catch(error) {
         console.log(error)
      }
   }



   render() {
      const displayCards = this.state.milestones.map(milestone => {
         return(
               <div key={milestone.id}>
                  < Card 
                     id={milestone.id}
                     title={milestone.title}
                     description={milestone.description}
                     date={milestone.date}
                     location={milestone.location}
                     img={milestone.img}
                  /> 
               </div>
         )
      })

      const stoneIcon = 'http://cdn.onlinewebfonts.com/svg/img_498163.png'

      return (
         <div className='dashboard'>
            <div className='header-nav'>
                  <div className='navbar'>
                     <div className='brand-container'>
                        <img src={stoneIcon} alt="" className='icon'/>
                        <p className='brand' >Milestone</p>
                     </div>
                        <div className='logout-button-container'>
                           <Link to='/' className='logout-button' >
                              Logout
                           </Link>
                        </div>
                  </div>
            </div>

            <div className='body' >
            
               <div className='add-input-container'>
                  <div className='add-button'>
                     < AddButton />
                  </div>
               </div>

               

               <div className='card-container' >
                  <div className='my-milestones'>
                     <h2>My Milestones</h2>
                  </div>

                  { displayCards }
                  { displayCards }
                  { displayCards }
                  { displayCards }
                  { displayCards }
               </div>

            </div>

         </div>
      );
   }
}

export default Dashboard;
