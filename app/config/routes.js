import React from 'react'
import {applyRouterMiddleware, Router, Route, IndexRoute, useRouterHistory } from 'react-router'

import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)()

import Main from '../components/Main.js'
import Maps from '../components/Center/Maps.js'
import Notifications from '../components/Center/Notifications'
import Bookmarks from '../components/Center/Bookmarks'
import Messages from '../components/Center/Messages'


// onUpdate={() => window.scrollTo(0, 0)}

const routes = (
  <Router history={appHistory}>
    <Route path='/' component={Main}>
      <Route path='/maps' component={Maps} />
      <Route path='/bookmarks' component={Bookmarks} />
      <Route path='/messages' component={Messages} />
      <Route path='/notifications' component={Notifications} />
      <IndexRoute component={Maps} />
      </Route>
  </Router>
)

export default routes
