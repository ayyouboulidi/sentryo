import React, { Component } from 'react';
import './Home.css';

class App extends Component {
  goTo = (link) => this.props.history.push(link)

  render() {
    return (
      <div className="home">
          Please hit a menu element to view the different pages <br />
          - <span className="link" onClick={() => this.goTo('/')}>Home</span>  <br />
          - <span className="link" onClick={() => this.goTo('/actors')}>Actors</span>  : the list of starwars actors <br />
          - <span className="link" onClick={() => this.goTo('/cars')}>Cars</span>  : the list of starwars cars <br />
          - to view the details, please click on the wanted element <br /><br />
          To launch the project: yarn start <br />
          To launch minimal unit tests : yarn test
      </div>
    );
  }
}

export default App;
