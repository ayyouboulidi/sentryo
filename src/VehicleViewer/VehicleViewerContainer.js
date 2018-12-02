import React, { Component } from 'react';
import VehicleComponent from './VehicleViewerComponent';
import VehiclesService from '../services/VehiclesService';

const vehiclesService = new VehiclesService();

export default class Vehicle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vehicle: {}
        }

        this.getVehicle(((this.props.location || {}).state || {}).url);
    }

    getVehicle(link) {
        if(link) {
            vehiclesService
                .getVehicle(link)
                .then(vehicle => this.setState({ vehicle }));
        }
    }
   
    render() {
        return (
            <VehicleComponent vehicle={this.state.vehicle} />
        );
    }
}
