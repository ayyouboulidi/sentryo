import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Header from './Header';

export default function RouterApp() {
  return (
    <Router>
        <div>
            <Header>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/actors'>Actors</Link>
                    </li>
                    <li>
                        <Link to='/cars'>Cars</Link>
                    </li>
                </ul>
            </Header>   
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