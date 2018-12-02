import Api from './Api';

/**
 * @export
 * @class PeopleService
 */
export default class PeopleService {
    /**
     * get list of People
     *
     * @readonly
     * @memberof PeopleService
     */
    get getPeople () {
        this.getList = Api.get('people/');

        return this.getList
            .then(response => {
                return JSON.parse(response.text);
            })
            .catch(error => {
                console.error(error)
            });
    }

    getPeopleOfPage (page) {
        this.getList = Api.get(`people/?page=${page}`);

        return this.getList
            .then(response => {
                return JSON.parse(response.text);
            })
            .catch(error => {
                console.error(error)
            });
    }

    getPerson (linkToPerson) {
        this.person = Api.getWithCustomUrl(linkToPerson);

        return this.person
            .then(response => {
                return JSON.parse(response.text);
            })
            .catch(error => {
                console.error(error)
            });
    }
}