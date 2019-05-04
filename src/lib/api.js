import axios from 'axios';

const api = () => axios.create({
    baseURL: 'http://www.omdbapi.com/',
});

const searchMovie = (data) => api().get(`?s=${data}&apikey=7a9de037`);

const gotoMovie = (data) => api().get(`?i=${data}&plot=full&apikey=7a9de037`);

export default {
    searchMovie,
    gotoMovie
}