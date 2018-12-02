import React, { Component } from 'react';
import PersonComponent from './PersonViewerComponent';
import PeopleService from '../services/PeopleService';

const peopleService = new PeopleService();

export default class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: {}
        }

        this.getPerson(((this.props.location || {}).state || {}).url);
    }

    getPerson(link) {
        if(link) {
            peopleService
                .getPerson(link)
                .then(person => this.setState({ person }));
        }
    }
   
    render() {
        return (
            <PersonComponent person={this.state.person} />
        );
    }
}
