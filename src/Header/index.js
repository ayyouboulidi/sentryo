import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
        <header className='App-header'>
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
        </header>  
    );
  }
}
