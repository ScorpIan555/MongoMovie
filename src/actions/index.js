import constants from '../constants'
import { HTTPAsyncClient } from '../utils'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *

* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

export default {

	addMovie: (movie) => {
		return dispatch => {
			console.log('addMovie action', movie)
			return dispatch(HTTPAsyncClient.postRequest('/create', movie, constants.MOVIE_CREATED))
		}
	}
}
