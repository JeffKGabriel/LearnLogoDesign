import React, { Component } from 'react'
import { connect } from 'react-redux'


import CenterBox from './CenterBox'


class Maps extends Component{

  constructor (props) {
    super(props)
  }

  componentWillMount(){

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

          <CenterBox bs="col-xs-2" classes="world" />
          <CenterBox bs="col-xs-5" classes="world" />
          <CenterBox bs="col-xs-2" classes="world" />
          <CenterBox bs="col-xs-3" classes="world" />
          <CenterBox bs="col-xs-4" classes="world" />
          <CenterBox bs="col-xs-4" classes="world" />
          <CenterBox bs="col-xs-4" classes="world" />
          <CenterBox bs="col-xs-3" classes="world" />
          <CenterBox bs="col-xs-2" classes="world" />
          <CenterBox bs="col-xs-5" classes="world" />
          <CenterBox bs="col-xs-2" classes="world" />
          <CenterBox bs="col-xs-4" classes="world" />
          <CenterBox bs="col-xs-4" classes="world" />
          <CenterBox bs="col-xs-4" classes="world" />

        </div>

        <div className="col-xs-10" style={{height:20}} />

      </div>

    )
  }


}


export default connect()(Maps)
