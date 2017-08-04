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

    this.props.dispatch(reduxAuth.authenticating())

    this.props.dispatch(reduxAuth.getUser())







/*
    authHelper.fireAuth("jake@paul.com","notcool").then((user)=>{
      console.log("handleAuth",user);
      this.props.dispatch(reduxAuth.authenticationSuccess(true,user.email,user.uid))
    })

    */


  }


  // if you click on main when footer is expanded, then make footer not expanded
  toggleFooter=()=>{
    console.log("running toggleFooter");
    if(this.props.footerExpanded){
      this.props.dispatch( playlistControls.expandedFooter(true) )
    }
  }



  render(){

    return(
      <div id="OutsideWrapper">
        <Favicon url={require('../imgs/favicons/favicon-96x96.png')}/>

        <div id="InsideWrapper">

          <Header activeTab={this.props.location.pathname} toggleFooter={this.toggleFooter} />

          <div className="main"
            onClick={this.toggleFooter}
            >
            {React.cloneElement(this.props.children, {
                                                        key:this.props.location.pathname,
                                                        toggleFooter : this.toggleFooter
                                                      }
                                )}
          </div>

          <Footer />

        </div>
      </div>
    )
  }
}

export default connect(
    ({auth,playlists})=>({
      footerExpanded : playlists.footerExpanded
    })
)(Main)
