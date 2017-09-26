import React, { Component } from 'react'
import { connect } from 'react-redux'

import firebase from 'firebase'
import {ref, firebaseAuth} from '../config/constants'
import fireAuth from '../helpers/fireAuth'

import RightCol from './RightCol'


class Home extends Component{

  constructor (props) {
    super(props)
  }



  componentWillMount(){
    console.log("home");
  }



  componentWillReceiveProps(nextProps){

    console.log("nextProps",nextProps);

  }



  render(){

    console.log("activeTab",this.props.activeTab);


    //Container for the channel List
    return(

        <div className="col-xs-12 home nopadding">

          <div className="col-xs-12 mainBoxes">


            <div className="col-xs-2">
              <div className="world box">
              </div>

            </div>

            <div className="col-xs-5">
              <div className="world box" ></div>
            </div>

            <div className="col-xs-2">
                <div className="world box" ></div>
            </div>

            <div className="col-xs-3">
                <div className="world box" > </div>
            </div>

            <div className="col-xs-4">
                <div className="world box" > </div>
            </div>

            <div className="col-xs-4 ">
                <div className="world box" > </div>
            </div>

            <div className="col-xs-4 ">
                <div className="world box" > </div>
            </div>


            <div className="col-xs-3">
              <div className="world box" > </div>
            </div>

            <div className="col-xs-2">
              <div className="world box" > </div>
            </div>

            <div className="col-xs-5">
                <div className="world box" > </div>
            </div>

            <div className="col-xs-2">
                <div className="world box" > </div>
            </div>


            <div className="col-xs-4">
                <div className="world box" > </div>
            </div>

            <div className="col-xs-4 ">
                <div className="world box" > </div>
            </div>

            <div className="col-xs-4 ">
                <div className="world box" > </div>
            </div>



          </div>

            <div className="col-xs-10" style={{height:20}} ></div>


        </div>

    )
  }


}



export default connect()(Home)
