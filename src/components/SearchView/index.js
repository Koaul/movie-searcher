import React from 'react'
import Input from './Input'
import styled from 'styled-components'
import MovieList from './MovieList'
import Page from './Page'
import {connect} from 'react-redux'

const Div = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
`

const App = ({isLoading, pageCount}) => {
    return (
        <Div>
            <Input/>
            <MovieList/>
            <Page/>
        </Div>
    )
}


export default connect(
    state => ({
        isLoading: state.isLoading,
        pageCount: Math.round(state.totalResults/10)
    })
)(App)