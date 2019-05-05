import React from 'react'
import Input from './Input'
import styled from 'styled-components'
import Movie from './Movie'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Page from './Page'

const Div = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
`

const App = ({Movies}) => (
    <Div>
        <Input/>
        {
            Movies ? Movies.map((item, i)=>{
                return <Movie key={i*Math.random()*100} item={item}/>
            }) : "Nothing here"
        }
        {
            Movies ? <Page/> : null
        }
    </Div>
)

App.propTypes = {
    Movies: PropTypes.array
}

export default connect(
    state => ({
        Movies: state.Search
    })
)(App)