import {createAction} from 'redux-actions'
import movie from '../lib/api'

const search = createAction('search')
const gotoMovie = createAction('gotoMovie')
const setData = createAction('setData')

const searchMovies = (data) => async (dispatch) => {
    const {page,title} = data
    dispatch(setData(data))
    try {
      const response = await movie.searchMovie(title, page);
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
    getMovie,
}