import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserData } from '../../ducks/reducer';
import axios from 'axios';
import './Dashboard.css';
import Card from '../Card/Card';
import AddButton from '../Dashboard/AddButton/AddButton';
import HeaderMain from '../HeaderMain/HeaderMain';
import Swal from 'sweetalert2';


class Dashboard extends Component {
   constructor() {
      super();
      this.state = {
         milestones: []
      }
   }

   async componentDidMount() {
      try {
         const response = await axios.get('/api/userData')
         if(response.data) {
            this.getMilestones()
         } 
      } catch(error) {
         console.log(error)
         await Swal({
            type: 'error',
            title: 'Error',
            text: 'You are not logged in. Please login or sign up to begin.',
         })
         this.props.history.push('/')
      }
   }
   
   async getMilestones() {
      const response = await axios.get(`/api/milestones`)
      this.setState({milestones: response.data})
   }
   
   // componentDidUpdate(prevProps) {
   //    if(prevProps.match.params.id !== this.props.match.params.id) {
   //       axios.get(`/api/milestones/${this.state.user_id}`)
   //       this.setState({milestones: response.data})
   //    }
   // }


   async handleDeleteClick(milestone_id) {
      const response = await axios.delete(`/api/milestones/delete/${milestone_id}`)
      console.log(response.data.message);
   }


   render() {
      const displayCards = this.state.milestones.map(milestone => {
         return(
               <div key={milestone.id}>
                  < Card 
                     milestone_id={milestone.id}
                     title={milestone.title}
                     description={milestone.description}
                     date={milestone.date}
                     location={milestone.location}
                     img={milestone.img}
                     handleDeleteClick={this.handleDeleteClick}
                  /> 
               </div>
         )
      })

      const { milestones } = this.state;


      return (
         <div className='dashboard'>
            
            < HeaderMain />

            <div className='body' >

               <div className='add-input-container'>
                  <div className='add-button'>
                     <Link to='/add' >
                        < AddButton />
                     </Link>
                  </div>
               </div>

               <div className='card-container' >
                  <div className='my-milestones'>
                     <h2>My Milestones</h2>
                  </div>
                  
                  {
                     !milestones.length < 1 ? (
                        displayCards
                     ) : <p className='no-milestones-text'>You have no Milestones to display. Click the add button to log a new Milestone.</p>

                     
                  }

               </div>

            </div>

         </div>
      );
   }
}




const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, {getUserData})(Dashboard);
