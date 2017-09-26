import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PeopleBox from './PeopleBox'

class RightCol extends Component{

  constructor (props) {
    super(props)
  }

  render(){

    return(


        <div className="rightCol col-xs-1" >

          <div className="rightColTitle">
            People
          </div>

          <PeopleBox />
          <PeopleBox />
          <PeopleBox />
          <PeopleBox />
          <PeopleBox />
          <PeopleBox />
          <PeopleBox />
          <PeopleBox />
          <PeopleBox />

        </div>

    )

  }

}


  export default connect()(RightCol)
