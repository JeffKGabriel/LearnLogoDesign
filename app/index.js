import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

import routes from './config/routes.js'

import counter from './reducers/count.js'



// Store
const store = createStore(
  combineReducers({
    //reducer,
    counter,
    routing: routerReducer
  }),
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app'))
