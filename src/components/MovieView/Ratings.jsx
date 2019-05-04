import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const Rate = styled.p`
    font-size:14px;
    margin:0px;
`
const Rating = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:10px;
` 
const Span = styled.span`
    font-size: 14px;
`

const Ratings = ({ratings}) => (
    ratings ? ratings.map((item, i) => (
        <Rating key={i*Math.random()}>
            <Span>{item.Source}</Span>
            <Rate>{item.Value}</Rate>
        </Rating>
)) : "loading"
)

Ratings.propTypes = {
    ratings: PropTypes.array
}

export default connect(
    state => ({
        ratings: state.Ratings
    })
)(Ratings)