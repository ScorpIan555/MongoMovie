"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var HTTPAsyncClient = require("../utils").HTTPAsyncClient;


/* * * * * * * * * * * * * * * * * * * * * * * * * * *

* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

module.exports = {

	addMovie: function (movie) {
		return function (dispatch) {
			console.log("addMovie action", movie);
			return dispatch(HTTPAsyncClient.postRequest("/create", movie, constants.MOVIE_CREATED));
		};
	}
};