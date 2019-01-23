import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddMilestone from './components/AddMilestone/AddMilestone';



export default (
   <Switch>
      <Route component={LandingPage} exact path='/' />
      <Route component={Dashboard} path='/dashboard' />
      <Route component={Login} path='/login' />
      <Route component={Register} path='/register' />
      <Route component={AddMilestone} path='/add' />
   </Switch>
)