import React, { Component } from 'react'
import { connect } from 'react-redux'
//var ReactRouter = require('react-router');
import { bindActionCreators } from 'redux'
//var Link = ReactRouter.Link;
import firebase from 'firebase'

import {ref, firebaseAuth} from '../config/constants'
import fireAuth from '../helpers/fireAuth'
import {getInfo} from '../helpers/youtubeAPI.js'

import * as playlistReducer from '../reducers/playlists'

import ChannelList from './ChannelList'
import MultiplePlaylists from './MultiplePlaylists'


class Home extends Component{

  constructor (props) {
    super(props)
    this.state = {
      items: [],
    }
  }


  getLiveChannelInfo=(list)=>{

    let arrayOfList = Object.keys(list).map((k)=>{
      return list[k]
    })

    getInfo(arrayOfList).then((val)=>{
      this.setState({
        items : val.items.map( (a,k)=>{
          return {
            title: a.snippet.title,
            id: a.id,
            pic: a.snippet.thumbnails.medium.url,
          }
        })
      })
    })

  }

  componentWillMount(){
    this.props.dispatch(playlistReducer.getLiveChannels()) // doesnt need auth, anyone can read from live
  }



  componentWillReceiveProps(nextProps){

    console.log("nextProps",nextProps);


    //Authed, now get userID firebase playlists
    if( (this.props.authenticated !== nextProps.authenticated)&& (nextProps.authenticated) ){
      //this.props.dispatch(playlistReducer.getLiveChannels())
      this.props.dispatch(playlistReducer.setUpListenerForPlaylists(nextProps.uid) )
    }

    //update Live Channel Items
    if( this.props.liveChannels !== nextProps.liveChannels ){
      this.getLiveChannelInfo(nextProps.liveChannels)
    }



  }



  render(){


    //Container for the channel List
    return(
      <div className="contentPage">

        <MultiplePlaylists toggleFooter={this.toggleFooter}/>


      </div>
    )
  }


}





export default connect(
    ({auth,playlists})=>({
      authenticated : auth.authenticated,
      liveChannels : playlists.liveChannels,
      uid: auth.uid,
      userPlaylists : playlists.userPlaylists,
    })
)(Home)
