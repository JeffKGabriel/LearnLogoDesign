import React, { Component } from 'react'
import { connect } from 'react-redux'

import CenterBox from './CenterBox'


class Messages extends Component{

  constructor (props) {
    super(props)
  }

  componentWillMount(){
  }

  componentWillReceiveProps(nextProps){
    //console.log("nextProps",nextProps);
  }



  render(){

    console.log("activeTab",this.props.activeTab);


    //Container for the channel List
    return(

      <div className="col-xs-12 home nopadding">

        <div className="col-xs-12 mainBoxes">

          <CenterBox bs="col-xs-2" classes="messages" />
          <CenterBox bs="col-xs-5" classes="messages" />
          <CenterBox bs="col-xs-2" classes="messages" />
          <CenterBox bs="col-xs-3" classes="messages" />
          <CenterBox bs="col-xs-4" classes="messages" />
          <CenterBox bs="col-xs-4" classes="messages" />
          <CenterBox bs="col-xs-4" classes="messages" />
          <CenterBox bs="col-xs-3" classes="messages" />
          <CenterBox bs="col-xs-2" classes="messages" />
          <CenterBox bs="col-xs-5" classes="messages" />
          <CenterBox bs="col-xs-2" classes="messages" />
          <CenterBox bs="col-xs-4" classes="messages" />
          <CenterBox bs="col-xs-4" classes="messages" />
          <CenterBox bs="col-xs-4" classes="messages" />

        </div>

        <div className="col-xs-10" style={{height:20}} />


      </div>

    )
  }


}


export default connect()(Messages)
