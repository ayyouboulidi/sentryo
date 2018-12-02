import React, { Component } from 'react';
import VehiclesComponent from './VehiclesComponent';
import VehiclesService from '../services/VehiclesService';

const vehiclesService = new VehiclesService();

export default class Vehicles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vehicles: {}
        }

        this.getListOfVehicles();
    }

    getListOfVehicles() {
        vehiclesService
            .getVehicles
            .then(vehicles => this.setState({ vehicles }));
    }

    goNext = () => {
        const next = this.state.vehicles.next;

        if(next) {
            const page = next.split("?page=")[1];

            vehiclesService
            .getVehiclesOfPage(page)
            .then(vehicles => this.setState({ vehicles }));
        }
    }

    goPrevious = () => {
        const previous = this.state.vehicles.previous;

        if(previous) {
            const page = previous.split("?page=")[1];

            vehiclesService
            .getVehiclesOfPage(page)
            .then(vehicles => this.setState({ vehicles }));
        }
    }
   
    render() {
        return (
            <VehiclesComponent 
                vehicles={this.state.vehicles} 
                goPrevious={this.goPrevious}
                goNext={this.goNext}
            />
        );
    }
}
