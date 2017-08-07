import React, { Component } from 'react'
import { connect } from 'react-redux'

import firebase from 'firebase'
import {ref, firebaseAuth} from '../config/constants'
import fireAuth from '../helpers/fireAuth'


class Home extends Component{

  constructor (props) {
    super(props)
  }



  componentWillMount(){

  }



  componentWillReceiveProps(nextProps){

    console.log("nextProps",nextProps);

  }



  render(){


    //Container for the channel List
    return(
      <div>

        hi

      </div>
    )
  }


}





export default connect()(Home)
