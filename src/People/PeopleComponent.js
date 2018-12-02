import React, { Component } from 'react';
import './People.css';

export default class People extends Component {
    render() {
        console.log(this.props.people)
        return (
            <div>
                <div className="pageTitle">List of people</div>
                <table>
                    

                </table>
            </div>  
        );
  }
}
