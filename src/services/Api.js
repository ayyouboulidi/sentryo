import request from 'superagent';

const prefix = 'https://swapi.co/api/';

/**
 * @export
 * @class Api
 */
export default class Api {
    /**
     * Prefix the url by the API prefix
     *
     * @static
     * @param {string} url
     * @returns {string}
     * @memberof Api
     */
    static prefix (url) {
        return prefix + url;
    }

    /**
     * set the header of all requests with the access token
     *
     * @static
     * @param {object} [headers={}]
     * @returns {object}
     * @memberof Api
     */
    static headers (headers = {}) {
        return Object.assign({}, headers);
    }

    /**
     * Send HEAD http request
     *
     * @static
     * @param {string} url
     * @param {Object} [headers={}]
     * @returns {Promise}
     *
     * @memberOf Api
     */
    static head (url, headers = {}) {
        return request
            .head(url)
            .set(Api.headers(headers));
    }

    /**
     * Send GET http request
     *
     * @static
     * @param {string} url
     * @param {Object} [headers={}]
     * @returns {Promise}
     *
     * @memberOf Api
     */
    static get (url, headers = {}) {
        return request
            .get(Api.prefix(url))
            .set(Api.headers(headers));
    }

    /**
     * Send GET http request
     *
     * @static
     * @param {string} url
     * @param {Object} [headers={}]
     * @returns {Promise}
     *
     * @memberOf Api
     */
    static getWithCustomUrl (url, headers = {}) {
        return request
            .get(url)
            .set(Api.headers(headers));
    }

    /**
     * Send POST http request
     *
     * @static
     * @param {string} url
     * @param {Object} params
     * @param {Object} [headers={}]
     * @returns {Promise}
     *
     * @memberOf Api
     */
    static post (url, params, headers = {}) {
        return request
            .post(Api.prefix(url))
            .set(Api.headers(headers))
            .send(params);
    }

    /**
     * Send PUT http request
     *
     * @static
     * @param {string} url
     * @param {Object} [headers={}]
     * @returns {Promise}
     *
     * @memberOf Api
     */
    static put (url, params = {}, headers = {}) {
        return request
            .put(Api.prefix(url))
            .set(Api.headers(headers))
            .send(params);
    }

    /**
     * Send PATCH http request
     *
     * @static
     * @param {string} url
     * @param {Object} [headers={}]
     * @returns {Promise}
     *
     * @memberOf Api
     */
    static patch (url, headers = {}) {
        return request
            .put(Api.prefix(url))
            .set(Api.headers(headers));
    }

    /**
     * Send DELETE http request
     *
     * @static
     * @param {string} url
     * @param {Object} [headers={}]
     * @returns {Promise}
     *
     * @memberOf Api
     */
    static delete (url, headers = {}) {
        return request
            .delete(Api.prefix(url))
            .set(Api.headers(headers));
    }
}
