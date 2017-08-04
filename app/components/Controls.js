import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as playlistControls from '../reducers/playlists'

import YouTubeVideo from '../helpers/YouTubeVideo'




class Controls extends Component{

  constructor (props) {
      super(props)
    }


  handleTogglePlaying=()=>{
    this.props.dispatch(playlistControls.togglePlaying())
  }


  render(){
    return(
      <div className="controls">
        <div style={{
          opacity:0.8,
          //height:0,
          //width:0,
          marginRight:20,
        }}>
          <YouTubeVideo
                   videoId={this.props.videoId}
                   playing={this.props.playing}
                   volume={this.props.volume}
                   shouldPrestart={false}
                   position={this.props.position}
                   ></YouTubeVideo>
        </div>


          <div>
            <input
              type="range"
              min="0" max="100"
              defaultValue={this.props.volume}
              onChange={(e)=>this.props.handleVolumeChange(e.target.value)}
              step="1"/>
          </div>

          <div
            style={{marginLeft:20}}
            onClick={this.handleTogglePlaying}>
           {this.props.playing
             ?
             <div className="fa fa-pause playPauseButton" aria-hidden="true"></div>
             :
             <div className="fa fa-play playPauseButton" aria-hidden="true"></div>
           }
          </div>


      </div>
    )
  }

}



//export default Controls
export default connect(
  ({playlists})=>({
    playing:playlists.playing,
    videoId:playlists.videoId,
  })
)(Controls)
