import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { HashRouter, Route } from "react-router-dom"
import SearchView from './SearchView'
import MovieView from './MovieView/'

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter basename='/movie-searcher'>
      <Route exact path="/" component={SearchView} />
      <Route path="/movie/:id" component={MovieView} />
    </HashRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root