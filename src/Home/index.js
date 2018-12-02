import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class App extends Component {
  render() {
    return (
      <div className="home">
          Please hit a menu element to view the different pages <br />
          - <Link to='/'>Home</Link>  <br />
          - <Link to='/actors'>Actors</Link>  : the list of starwars actors <br />
          - <Link to='/cars'>Cars</Link>  : the list of starwars cars <br />
          - to view the details, please click on the wanted element <br />
      </div>
    );
  }
}

export default App;
