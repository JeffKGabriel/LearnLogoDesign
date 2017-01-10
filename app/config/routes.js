import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Main from '../components/Main.js'
import Home from '../components/Home.js'

const routes = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory} >
    <Route path='/' component={Main}>
      <Route path='/home' component={Home} />
      <IndexRoute component={Home} />
      </Route>
  </Router>
)

export default routes
