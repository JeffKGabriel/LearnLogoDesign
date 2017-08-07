require("babel-polyfill");
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Cookies from 'universal-cookie'

import * as playlistControls from '../reducers/playlists'
import * as authHelper from '../helpers/fireAuth'
import * as reduxAuth from '../reducers/auth'

import Header from './Header.js'
import Footer from './Footer.js'
import Favicon from 'react-favicon'


//import CSSTransitionGroup from 'react-transition-group'
var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup') // ES5 with npm


require('../styles/index.css');

class Main extends Component{

  constructor (props) {
    super(props)
  }


  componentDidMount(){

    //this.props.dispatch(reduxAuth.authenticating())
    //this.props.dispatch(reduxAuth.getUser())

  }

  render(){

    return(
      <div id="OutsideWrapper">
        <Favicon url={require('../imgs/favicons/favicon-96x96.png')}/>

        <div id="InsideWrapper">

          <Header activeTab={this.props.location.pathname} />

          <div className="main">
            {React.cloneElement(this.props.children, { key:this.props.location.pathname, })}
          </div>

          <Footer />

        </div>
      </div>
    )
  }
}

export default connect()(Main)
