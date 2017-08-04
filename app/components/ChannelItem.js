import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as playlistControls from '../reducers/playlists'

class ChannelItem extends Component{

  constructor (props) {
    super(props)
    }


    handleChangeChannel=(id)=>{
      this.props.dispatch(playlistControls.changeChannel(id))
    }

  render(){

  //  let act = this.props.activeChannel();
  //  console.log("activeChannel",act);


    return(
      <div className="channelPicBox"
        style={{

          width: 200,
          margin: 10,
        }}
      >

      <div className="channelPicInfo"
        onClick={()=>this.handleChangeChannel(this.props.channelId)}
        >
          {this.props.title}
      </div>

      <div
        style={{
          background : 'url(' + this.props.pic + ') no-repeat center center',
          backgroundSize : 'cover',
          cursor:'pointer',
          height:135,
        }}
        onClick={()=>this.handleChangeChannel(this.props.channelId)}
        >
      </div>


      </div>
    )
  }

}

export default connect(
  ({playlists})=>({
    playing:playlists.playing,
    videoId:playlists.videoId,
  })
)(ChannelItem)
