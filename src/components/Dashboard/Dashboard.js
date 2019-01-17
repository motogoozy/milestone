import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserData } from '../../ducks/reducer';
import axios from 'axios';
import './Dashboard.css';
import Card from '../Card/Card';
import AddButton from '../Dashboard/AddButton/AddButton';
import HeaderMain from '../HeaderMain/HeaderMain';


class Dashboard extends Component {
   constructor() {
      super();
      this.state = {
         user_id: 1,
         milestones: []
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


const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, {getUserData})(Dashboard);
