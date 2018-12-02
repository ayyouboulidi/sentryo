import Api from './Api';

/**
 * @export
 * @class ActorsService
 */
export default class ActorsService {
    /**
     * get list of actors
     *
     * @readonly
     * @memberof ActorsService
     */
    get getActors () {
        this.getList = Api.get('people/');

        return this.getList
            .then(response => {
                return JSON.parse(response.text);
            })
            .catch(error => {
                console.error(error)
            });
    }
}