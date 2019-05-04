import {createAction} from 'redux-actions'
import movie from '../lib/api'

const search = createAction('search')
const gotoMovie = createAction('gotoMovie')

const searchMovies = data => async (dispatch) => {
    try {
      const response = await movie.searchMovie(data);
      dispatch(search(response.data))
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
}

const getMovie = data => async (dispatch) => {
    try {
      const response = await movie.gotoMovie(data);
      dispatch(gotoMovie(response.data))
    } catch (error) {
      console.error(error);
    }
}

export default {
    searchMovies,
    getMovie
}