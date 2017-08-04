import React from 'react'
import {applyRouterMiddleware, Router, Route, IndexRoute, useRouterHistory } from 'react-router'

import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)()

import Main from '../components/Main.js'
import Home from '../components/Home.js'
import Waffles from '../components/Waffles.js'


// onUpdate={() => window.scrollTo(0, 0)}

const routes = (

  <Router history={appHistory}>
    <Route path='/' component={Main}>
      <Route path='/home' component={Home} />
      <IndexRoute component={Home} />
      </Route>
  </Router>
)

export default routes
