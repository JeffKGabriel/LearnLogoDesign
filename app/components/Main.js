import React, { Component } from 'react'
import { connect } from 'react-redux'

import Favicon from 'react-favicon'

import * as playlistControls from '../reducers/playlists'
import * as authHelper from '../helpers/fireAuth'
import * as reduxAuth from '../reducers/auth'

import Header from './Header.js'
import Footer from './Footer.js'
import LeftCol from './Left/LeftCol'
import RightCol from './Right/RightCol'

require('../styles/index.css')

class Main extends Component{

  constructor (props) {
    super(props)
  }


  render(){

    return(
      <div id="OutsideWrapper">
        <Favicon url={require('../imgs/favicons/favicon-96x96.png')}/>

        <div id="InsideWrapper">

          <LeftCol tab={this.props.location.pathname} />

          <div className="container nopadding" style={{width:'100%'}}>

            <div className="col-xs-12 nopadding">

              <Header activeTab={this.props.location.pathname} />

                <div className="main col-xs-11">
                  {React.cloneElement(this.props.children, { key:this.props.location.pathname, activeTab:this.props.location.pathname })}
                </div>

              <RightCol />

            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default connect()(Main)
