import React from 'react';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import People from './People/PeopleContainer';
import Vehicles from './Vehicles/VehiclesContainer';
import PersonViewer from './PersonViewer/PersonViewerContainer';
import VehicleViewer from './VehicleViewer/VehicleViewerContainer';

export default function RouterApp() {
  return (
    <Router>
        <div>
            <Header/>
            <div className="body">
                <Route exact path='/' component={Home} />
                <Route path='/people' component={People} />
                <Route path='/personDetails' component={PersonViewer} />
                <Route path='/vehicles' component={Vehicles} />
                <Route path='/vehicleDetails' component={VehicleViewer} />
                <Route path='/vehicule-person' component={Home} />
            </div> 
        </div>
    </Router>
  );
}

const Header = () => (
    <header>
        <Menu>
            <Menu.Item
                name='Home'
                link
                as={() => <HeaderItem to="/" label="Home"/>}
            />
            <Menu.Item
                name='People'
                link
                as={() => <HeaderItem to="/people" label="People"/>}
            />
            <Menu.Item
                name='Vehicles'
                link
                as={() => <HeaderItem to="/vehicles" label="Vehicles"/>}
            />
        </Menu>
    </header>  
);

const HeaderItem = ({ to, label }) => (
    <div className="link item">
        <Link to={to}>{label}</Link>
    </div>
);