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
          - to view the details, please click on the wanted element <br /><br />
          To launch the project: yarn start <br />
          To launch minimal unit tests : yarn test
      </div>
    );
  }
}
