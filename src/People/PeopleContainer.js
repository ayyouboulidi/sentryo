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

        this.getListOfPeople();
    }

    getListOfPeople() {
        peopleService
            .getPeople
            .then(people => this.setState({ people }));
    }

    goNext = () => {
        const next = this.state.people.next;

        if(next) {
            const page = next.split("?page=")[1];

            peopleService
            .getPeopleOfPage(page)
            .then(people => this.setState({ people }));
        }
    }

    goPrevious = () => {
        const previous = this.state.people.previous;

        if(previous) {
            const page = previous.split("?page=")[1];

            peopleService
            .getPeopleOfPage(page)
            .then(people => this.setState({ people }));
        }
    }
   
    render() {
        return (
            <PeopleComponent 
                {...this.props}
                people={this.state.people} 
                goPrevious={this.goPrevious}
                goNext={this.goNext}
            />
        );
    }
}
