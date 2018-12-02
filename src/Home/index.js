import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  goTo = (link) => this.props.history.push(link)

  render() {
    return (
      <div className="home">
          Please hit a menu element to view the different pages <br />
          - <span className="link" onClick={() => this.goTo('/')}>Home</span>  <br />
          - <span className="link" onClick={() => this.goTo('/people')}>People</span>  : the list of starwars people <br />
          - <span className="link" onClick={() => this.goTo('/vehicles')}>Vehicles</span>  : the list of starwars Vehicles <br />
          - to view the details, please click on the details link <br />
          - to view the details of the pilots of a vehicle, please click on the details links <br />
          - to view the details of the vehicles of a pilot, please click on the details links <br /><br />
          To launch the project: yarn start <br />
          To launch minimal unit tests : yarn test
      </div>
    );
  }
}
