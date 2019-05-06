import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import actions from '../../actions'
import styled from 'styled-components'

const Div = styled.div`
    font-size:36px;
    margin-bottom: 5vh;
    display: ${props => props.pageCount<=1 ? 'none' : 'flex'};
    flex-direction: row;
    justify-content:center;
    align-items:center;
    width:600px;
`

const Button = styled.button`
    background-color: white;
    font-size:36px;
    border-radius:5px;
    border-left:none;
    border-right:none;
    border-top: 1px solid #3ACFD5;
    border-bottom: 1px solid #3a4ed5;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
    -webkit-background-size: 1px 100%;
    -moz-background-size: 1px 100%;
    background-size: 1px 100%;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzYWNmZDUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzNhNGVkNSIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=),url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzYWNmZDUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzNhNGVkNSIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);
    background-image: -webkit-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -webkit-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);
    background-image: -moz-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -moz-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);
    background-image: -o-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -o-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);
    background-image: linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%), linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%);
    &:focus, &:active {
        outline:none;
    }
`

const ButtonContainer = styled.div`
    margin:50px;
    width: 86px;
    height:45px;
`

const Page = ({response, title, page, searchMovies, pageCount, isLoading}) => {
    if(isLoading) return null
    if(response==='False')  return null
    if(!title) return null

    const handleButton = (type) => {
        if(type==='next'&&page<pageCount){
            searchMovies({
                title: title,
                page: page+1
            })
        }
        if(type==='prev'&&page>1){
            searchMovies({
                title: title,
                page: page-1
            })
        }
    }

    return (
        <Div pageCount={pageCount}>
            <ButtonContainer>
                {page===1 ? null : <Button onClick={()=>handleButton('prev')}>Prev</Button>}
            </ButtonContainer>
            <span>{page}</span>
            <ButtonContainer>
                {page===pageCount ? null : <Button onClick={()=>handleButton('next')}>Next</Button>}
            </ButtonContainer>
        </Div>
    )
}

Page.propTypes = {
    title: PropTypes.string,
    pageCount: PropTypes.number,
    searchMovies: PropTypes.func.isRequired,
    page: PropTypes.number
}

export default connect(
    state => ({
        title: state.title,
        page: state.page,
        pageCount: Math.round(state.totalResults/10),
        isLoading: state.isLoading,
        response: state.Response
    }),
    {
        searchMovies: actions.searchMovies
    }
)(Page)
