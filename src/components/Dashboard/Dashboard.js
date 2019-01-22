import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserData } from '../../ducks/reducer';
import axios from 'axios';
import './Dashboard.scss';
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
   
   // componentDidUpdate(prevProps) {
   //       if(prevProps.match.params.id !== this.props.match.params.id) {
   //             const response = axios.get(`/api/milestones`)
   //             this.setState({milestones: response.data})
   //          }
   //       }

         
   async getMilestones() {
      const response = await axios.get(`/api/milestones`)
      this.setState({milestones: response.data})
      console.log(response.data)
   }
         

   render() {
      const displayCards = this.state.milestones.map(milestone => {
         return(
               <div key={milestone.id}>
                  < Card 
                     milestone_id={milestone.id}
                  /> 
               </div>
         )
      })

      const {username} = this.props.user


      return (
         <div className='dashboard'>
            
            < HeaderMain />

            <div className='body-main' >

               <div className='add-input-container'>
                  <div className='add-button'>
                     <Link to='/add' >
                        < AddButton />
                     </Link>
                  </div>
               </div>

                  <div className='my-milestones'>
                     <h2>{username}'s Milestones</h2>
                  </div>
               <div className='card-container' >
                  
                  {
                     !this.state.milestones.length < 1 ? (
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