import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'



import routes from './config/routes.js'

import counter from './reducers/count.js'
import playlists from './reducers/playlists.js'
import auth from './reducers/auth.js'






// Store
const store = createStore(
  combineReducers({
    //reducer,
    auth,
    counter,
    playlists,
    routing: routerReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app'))
