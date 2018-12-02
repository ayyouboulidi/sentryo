import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';

export default function RouterApp() {
  return (
    <Router>
        <div>
            <Header />   
            <Route exact path='/' component={Home} />
            <Route path='/actors' component={Home} />
            <Route path='/actor/:id' component={Home} />
            <Route path='/cars' component={Home} />
            <Route path='/cars/:id' component={Home} />
            <Route path='/car-actor' component={Home} />
        </div>
    </Router>
  );
}