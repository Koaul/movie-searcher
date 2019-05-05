import {createAction} from 'redux-actions'
import movie from '../lib/api'

const search = createAction('search')
const gotoMovie = createAction('gotoMovie')
const searchTitle = createAction('searchTitle')

const searchMovies = (data, page) => async (dispatch) => {
    try {
      const response = await movie.searchMovie(data, page);
      dispatch(searchTitle(data))
      dispatch(search(response.data, page))
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