import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SearchView from './SearchView'
import MovieView from './MovieView/'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={SearchView} />
      <Route path="/movie/:id" component={MovieView} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root