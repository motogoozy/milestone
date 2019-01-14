import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';

export default (
   <Switch>
      <Route component={LandingPage} exact path='/' />
      <Route component={Dashboard} path='/dashboard' />
   </Switch>
)