import React from 'react'
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router'

import Main from '../components/Main.js'
import Home from '../components/Home.js'
import Waffles from '../components/Waffles.js'


// onUpdate={() => window.scrollTo(0, 0)}

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='/home' component={Home} />
      <Route path='/waffles' component={Waffles} />
      <IndexRoute component={Home} />
      </Route>
  </Router>
)

export default routes
