import React, { Component } from 'react'
import { connect } from 'react-redux'



import CenterBox from './CenterBox'


class Bookmarks extends Component{

  constructor (props) {
    super(props)
  }

  componentWillMount(){
    //console.log("home");
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

          <CenterBox bs="col-xs-5" classes="bookmarks" />
          <CenterBox bs="col-xs-2" classes="bookmarks" />
          <CenterBox bs="col-xs-3" classes="bookmarks" />
          <CenterBox bs="col-xs-2" classes="bookmarks" />
          <CenterBox bs="col-xs-4" classes="bookmarks" />
          <CenterBox bs="col-xs-4" classes="bookmarks" />
          <CenterBox bs="col-xs-4" classes="bookmarks" />
          <CenterBox bs="col-xs-3" classes="bookmarks" />
          <CenterBox bs="col-xs-2" classes="bookmarks" />
          <CenterBox bs="col-xs-5" classes="bookmarks" />
          <CenterBox bs="col-xs-2" classes="bookmarks" />
          <CenterBox bs="col-xs-4" classes="bookmarks" />
          <CenterBox bs="col-xs-4" classes="bookmarks" />
          <CenterBox bs="col-xs-4" classes="bookmarks" />

        </div>

        <div className="col-xs-10" style={{height:20}} />

      </div>

    )
  }


}



export default connect()(Bookmarks)
