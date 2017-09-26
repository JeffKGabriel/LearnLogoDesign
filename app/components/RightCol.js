import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


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

          <div className="peopleBox box">

          </div>

          <div className="peopleBox box">

          </div>

          <div className="peopleBox box">

          </div>

          <div className="peopleBox box">

          </div>

          <div className="peopleBox box">

          </div>

          <div className="peopleBox box">

          </div>

          <div className="peopleBox box">

          </div>

          <div className="peopleBox box">

          </div>

          <div className="peopleBox box">

          </div>

          <div className="peopleBox box">

          </div>

        </div>

    )

  }

}


  export default connect()(RightCol)
