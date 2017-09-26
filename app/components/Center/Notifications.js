import React, { Component } from 'react'
import { connect } from 'react-redux'

import firebase from 'firebase'
import {ref, firebaseAuth} from '../../config/constants'
import fireAuth from '../../helpers/fireAuth'

import RightCol from '../Right/RightCol'

import CenterBox from './CenterBox'

class Notifications extends Component{

  constructor (props) {
    super(props)
  }

  componentWillMount(){
    //console.log("home");
  }

  componentWillReceiveProps(nextProps){
    console.log("nextProps",nextProps);
  }

  render(){

    //console.log("activeTab",this.props.activeTab);

    //Container for the channel List
    return(

        <div className="col-xs-12 home nopadding">

          <div className="col-xs-12 mainBoxes">

            <CenterBox bs="col-xs-5" classes="world" />
            <CenterBox bs="col-xs-2" classes="funds" />
            <CenterBox bs="col-xs-3" classes="world" />
            <CenterBox bs="col-xs-2" classes="world" />
            <CenterBox bs="col-xs-4" classes="funds" />
            <CenterBox bs="col-xs-4" classes="world" />
            <CenterBox bs="col-xs-4" classes="funds" />
            <CenterBox bs="col-xs-3" classes="funds" />
            <CenterBox bs="col-xs-2" classes="world" />
            <CenterBox bs="col-xs-5" classes="funds" />
            <CenterBox bs="col-xs-2" classes="funds" />
            <CenterBox bs="col-xs-4" classes="world" />
            <CenterBox bs="col-xs-4" classes="funds" />
            <CenterBox bs="col-xs-4" classes="world" />

          </div>

            <div className="col-xs-10" style={{height:20}} ></div>


        </div>

    )
  }


}



export default connect()(Notifications)
