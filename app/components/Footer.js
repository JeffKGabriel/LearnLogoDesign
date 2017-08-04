import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as playlistReducer from '../reducers/playlists'

import * as authReducer from '../reducers/auth'


import AddTrack from './AddTrack'
import Controls from './Controls'


class Footer extends Component{

  constructor (props) {
    super(props)
    this.state={
      //showAddTrack : false,
      volume : 70,
      position : 0,
      newYTExtension : null,
      newYTPlaylist : null,
      newEmail : null,
      newPassword : null,
      footerShows : 'controls',
    }
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.footerExpanded){
      this.setState({
        footerShows : 'controls'
      })
    }
  }

  setPosition=(position)=>{
    this.setState({position});
  }


  handleVolumeChange=(volume)=>{
    this.setState({volume: Math.round(volume)});
  }



  toggleFooterExpansion=()=>{
    //this.setState({showAddTrack: !this.state.showAddTrack})
    this.props.dispatch( playlistReducer.expandedFooter(this.props.footerExpanded) )
  }



  initializePlayer(){
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  componentDidMount(){
    this.initializePlayer()
  }



  sendNewTrackToFirebase=()=>{
    if(this.state.newYTExtension != null && this.state.newYTPlaylist != null){

      this.props.dispatch( playlistReducer.addTrackToPlaylist(this.props.uid,this.state.newYTPlaylist,this.state.newYTExtension) )


      //now close footer
        this.toggleFooterExpansion()
      // and scroll to that playlist (this.state.newYTPlaylist)

    }else{
      console.log("fill out both extension and playlist");
    }
  }

  sendUserToFirebase=()=>{
    if(this.state.newEmail != null && this.state.newPassword != null){

       this.props.dispatch( authReducer.addUserToFireBase(this.state.newEmail,this.state.newPassword) )

      this.toggleFooterExpansion()
    }else{
      console.log("fill out both email and password");
    }
  }





  handleYTExtensionPress=(e)=>{
    if (e.key === 'Enter') {
      this.sendNewTrackToFirebase()
    }
  }
  handleYTExtensionChange=(e)=>{
    this.setState({newYTExtension: e.target.value});
  }
  handleYTPlaylistPress=(e)=>{
    if (e.key === 'Enter') {
      this.sendNewTrackToFirebase()
    }
  }
  handleYTPlaylistChange=(e)=>{
    this.setState({newYTPlaylist: e.target.value});
  }

  handleNewEmail=(e)=>{
    this.setState({newEmail: e.target.value});
  }
  handleNewPassword=(e)=>{
    this.setState({newPassword: e.target.value});
  }
  handleEmailPress=(e)=>{
    if (e.key === 'Enter') {
      this.sendUserToFirebase()
    }
  }
  handlePasswordPress=(e)=>{
    if (e.key === 'Enter') {
      this.sendUserToFirebase()
    }
  }
  handleLoginClick=()=>{
    this.setState({
      footerShows: 'login'
    })
    this.toggleFooterExpansion()
  }



  showAddTrack=()=>{
    this.setState({
      footerShows : 'addTrack'
    })
    this.toggleFooterExpansion()
  }




  render(){

    return(
      <div className={this.props.footerExpanded ? " footer footerExpanded col-xs-12" : "footer col-xs-12"}>

      <div className="footerControls">
        <div className="col-xs-2">

          <div style={{
            marginLeft:20,
          }}>
          <div
            className="fa fa-plus-square-o addTrackButton"
            aria-hidden="true"
            onClick={this.showAddTrack}
            >
            </div>
          </div>

        </div>

        <div className="col-xs-8">

              <Controls
                volume={this.state.volume}
                position={this.state.position}
                handleVolumeChange={this.handleVolumeChange}
              />


        </div>


        {this.state.footerShows == 'login' ? null :


        <div className="col-xs-2 footerSave">
          {this.props.uid != null
            ?
            <div
              onClick={()=> this.props.dispatch(authReducer.logoutUser())  } >
              Logout
            </div>
            :
            <div
              style={{
              cursor:'pointer'
              }}
              onClick={this.handleLoginClick}
             >
              Login
            </div>
          }
        </div>
        }




      </div>


      {this.state.footerShows == 'addTrack' ?
      <div className="addTrack"
        style={{
          display:'flex',
          flexDIrection: 'row',
          justifyContent: 'center',
        }}
        >
        <div style={{
          marginRight:10,
        }}>
          Add
        </div>
        <div>
         <input className="addTrackInput" placeholder="yt extension" onChange={this.handleYTExtensionChange} onKeyPress={this.handleYTExtensionPress}  />
         <input className="addTrackInput" placeholder="playlist" onChange={this.handleYTPlaylistChange} onKeyPress={this.handleYTPlaylistPress}  />
        </div>
      </div>
       : null}

        {
          this.state.footerShows == 'login'
          ?
            <div
              style={{
                display:'flex',
                flexDIrection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '280',
              }}
              >
              <input className="addTrackInput" placeholder="email" onChange={this.handleNewEmail} onKeyPress={this.handleEmailPress}  />
              <input type="password" className="addTrackInput" placeholder="password" onChange={this.handleNewPassword} onKeyPress={this.handlePasswordPress}  />
              <div
                style={{
                cursor:'pointer'
                }}
                onClick={()=>this.props.dispatch( authReducer.loginUser(this.state.newEmail,this.state.newPassword) )}
                >
                Login
              </div>
            </div>
          :
            null
        }






    </div>
    )

  }

}

export default connect(
    ({auth,playlists})=>({
      uid: auth.uid,
      username : auth.username,
      footerExpanded : playlists.footerExpanded
    })
)(Footer)
