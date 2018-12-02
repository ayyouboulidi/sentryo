import React, { Component } from 'react';
import PeopleComponent from './PeopleComponent';
import PeopleService from '../services/PeopleService';

const peopleService = new PeopleService();

export default class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: {}
        }

        this.getListOfPeope();
    }

    getListOfPeope() {
        peopleService
            .getPeople
            .then(people => this.setState({ people }));
    }
   
  render() {
    return (
        <PeopleComponent people={this.state.people}/>
    );
  }
}
