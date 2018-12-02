import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import People from './People/PeopleContainer';
import Cars from './Cars';
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
                        <Link to='/people'>People</Link>
                    </li>
                    <li>
                        <Link to='/cars'>Cars</Link>
                    </li>
                </ul>
            </Header>   
            <Route exact path='/' component={Home} />
            <Route path='/people' component={People} />
            <Route path='/person/:id' component={Home} />
            <Route path='/cars' component={Cars} />
            <Route path='/cars/:id' component={Home} />
            <Route path='/car-person' component={Home} />
        </div>
    </Router>
  );
}