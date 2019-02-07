import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserData } from '../../ducks/reducer';
import axios from 'axios';
import './Dashboard.scss';
import Card from '../Card/Card';
import HeaderMain from '../HeaderMain/HeaderMain';
import AddButton from '../Dashboard/AddButton/AddButton';
import SearchBar from '../Dashboard/SearchBar/SearchBar';
import SortToggle from '../Dashboard/SortToggle/SortToggle';
import Swal from 'sweetalert2';


class Dashboard extends Component {
   constructor() {
      super();
      this.state = {
         milestones: [],
         search: '',
         sortAsc: false,
      }
   }

   async componentDidMount() {
      try {
         const response = await axios.get('/api/userData')
         if (response.data) {
            this.getMilestones()
         }
      } catch (error) {
         console.log(error)
         await Swal({
            type: 'error',
            title: 'Error',
            text: 'You are not logged in. Please login to begin.',
         })
         this.props.history.push('/login')
      }
   }


   async getMilestones() {
      if(this.state.sortAsc === false) {
         const response = await axios.get(`/api/milestones`)
         this.setState({ milestones: response.data })
         console.log(response.data)
      } else {
         const response = await axios.get(`/api/milestones-asc`)
         this.setState({ milestones: response.data })
         console.log(response.data)
      }
   }

   handleSearch = (searchString) => {
      this.setState({ search: searchString })
   }

   handleSortToggle = () => {
      this.setState({ sortAsc: !this.state.sortAsc }, () => this.getMilestones()) //setState can take a callback function as a second parameter.
   }
   // THIS ALSO WORKS:
   // handleSortToggle = async () => {
   //    const res = await this.setState({sortAsc: !this.state.sortAsc})
   //    this.getMilestones()
   // }

   
   handleDelete = (milestone_id) => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         type: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.value) {
            axios.delete(`/api/milestones/delete/${milestone_id}`)
            .then(
               Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
               )
            )
            .then(
               this.getMilestones()
            )
         }
      })
   }


   render() {
      let filteredArr = this.state.milestones; //setting initial value to our original array of milestones
      if (this.state.search) { //if user has typed anything on the search bar
         filteredArr = this.state.milestones.filter((object, index) => { //filtering through the existing array of milestones. Filter makes a new copy of the array. The .filter method uses a returned boolean to determine what is kept in the new array. If it's true, it's kept. If false, it's kicked out.
            let passed = false; //setting initial passed test to false. Each object that returns false (meaning the object doesn't contain what was searched) will not be included in the new array.
            for (let property in object) { //for each property value in the object
               if (typeof (object[property]) === 'string') { //if what's coming in is a string
                  if (object[property].toLowerCase().includes(this.state.search.toLowerCase())) { //if the property on an object contains what was searched
                     passed = true; //set passed to true
                  }
               }
            }
            if (passed === true) {
               return true; //this object (milestone) will be included in the filteredArr. (this is part of the .filter method)
            } else {
               return false; //this object will be kicked out of the array. 
            }
         }
         )
      }

      const displayCards = filteredArr.map(milestone => {
         return (
            <div key={milestone.id}>
               < Card
                  milestone_id={milestone.id}
                  handleDelete={this.handleDelete}
               />
            </div>
         )
      });

      const { username } = this.props.user

      return (
         <div className='dashboard'>
            < HeaderMain />

            <div className='dash-body' >

               <div className='sub-container'>
                  <div className='toggle-container'>
                     < SortToggle 
                        handleSortToggle={this.handleSortToggle}
                        sortAsc={this.state.sortAsc} />
                  </div>
                  <div className='username-display'>
                     <h2>{username}'s Milestones</h2>
                  </div>
                  <div className='component-container' >
                     <div className='search-bar'>
                        < SearchBar
                        handleSearch={this.handleSearch}/>
                        </div>
                        <div className='add-button'>
                        <Link to='/add' >
                        < AddButton />
                        </Link>
                     </div>
                  </div>
               </div>

               <div className='card-container'>
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

export default connect(mapStateToProps, { getUserData })(Dashboard);