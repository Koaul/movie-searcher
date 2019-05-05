import React from 'react';
import Loader from 'react-loader-spinner'
import Movie from './Movie'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NotFound = styled.div`
    font-size: 36px;
    color: red;
`

const List = ({movies, isLoading, response}) => {
    if(movies===undefined) return null;
    if(isLoading) return <Loader type="Triangle" color="#42bff4" height="200" width="200"/>
    if(response==='False')  return <NotFound>Not Found</NotFound>
    return movies.map((item)=>{
        return <Movie key={item.imdbID} item={item}/>
    })
}

List.propTypes = {
    movies: PropTypes.array,
    isLoading: PropTypes.bool,
    response: PropTypes.string
}

export default connect(
    state => ({
        movies: state.Search,
        isLoading: state.isLoading,
        response: state.Response
    })
)(List)