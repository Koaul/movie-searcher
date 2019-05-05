import React from 'react'
import {connect} from 'react-redux'
import actions from '../../actions'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Ratings from './Ratings'

const Div = styled.div`
    width:100%;
    height: 100%;
    border-radius: 5px;
    margin-top:50px;
    margin-bottom: 50px;
    padding: 20px;
    display:flex;
    flex-direction: row;
    justify-content:center;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
`
const TextDiv = styled.div`
    width:40%;
    height:100%;
    display: flex;
    flex-direction: column;
    padding:10px;
`
const Poster = styled.img`
    width:170px;
    height:250px;
    border-radius: 10px;
`
const Info = styled.p`
    font-size: 18px;
    color: grey;
    margin: 5px;
`
const Title = styled.span`
    font-size:36px;
    text-decoration:none;
    color:black;
`
const Description = styled.p`
    font-size:20px;
    width: 100%;
`
const MovieView = ({movieInfo, getMovie, match}) => {
    if(!movieInfo.Title) getMovie(match.params.id)
    
    return (
        <Div>
            {movieInfo.Poster!=="N/A" ? <Poster src={movieInfo.Poster}/> : null}
            <TextDiv>
                <Title>{movieInfo.Title}</Title>
                <Info>{movieInfo.Year}, {movieInfo.Runtime}, Rate: {movieInfo.Rated}</Info>
                <Info>{movieInfo.Genre}</Info>
                <Info>Writer: {movieInfo.Writer}</Info>
                <Info>Actors: {movieInfo.Actors}</Info>
                <Info>Awards: {movieInfo.Awards}</Info>
                <Ratings/>
                <Description>{movieInfo.Plot}</Description>
            </TextDiv>
        </Div>
    )
}

MovieView.propTypes = {
    movieInfo: PropTypes.object,
    getMovie: PropTypes.func.isRequired
}

export default connect(
    state => ({
        movieInfo: state
    }),
    {
        getMovie: actions.getMovie
    }
)(MovieView)