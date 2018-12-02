import Api from './Api';

/**
 * @export
 * @class VehiclesService
 */
export default class VehiclesService {
    /**
     * get list of Vehicles
     *
     * @readonly
     * @memberof VehiclesService
     */
    get getVehicles () {
        this.getList = Api.get('vehicles/');

        return this.getList
            .then(response => {
                return JSON.parse(response.text);
            })
            .catch(error => {
                console.error(error)
            });
    }

    getVehiclesOfPage (page) {
        this.getList = Api.get(`vehicles/?page=${page}`);

        return this.getList
            .then(response => {
                return JSON.parse(response.text);
            })
            .catch(error => {
                console.error(error)
            });
    }

    getVehicle (linkToVehicle) {
        this.vehicle = Api.getWithCustomUrl(linkToVehicle);

        return this.vehicle
            .then(response => {
                return JSON.parse(response.text);
            })
            .catch(error => {
                console.error(error)
            });
    }
}