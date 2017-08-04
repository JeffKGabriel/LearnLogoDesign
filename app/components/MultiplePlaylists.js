import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ChannelList from './ChannelList'

import {getInfo} from '../helpers/youtubeAPI.js'



class MultiplePlaylists extends Component{
  constructor(props){
    super(props)
    this.state={
      items:{
        live : []
      }
    }
  }

  getLiveChannelInfo=(list,playlistName)=>{

    let arrayOfList = Object.keys(list).map(k=>list[k])

    getInfo(arrayOfList).then((val)=>{

      let playlist = val.items.map( (a,k)=>{
                              return {
                                title: a.snippet.title,
                                id: a.id,
                                pic: a.snippet.thumbnails.medium.url,
                              }
                            })

      let items = this.state.items
      items[playlistName] = playlist
      this.setState({items : items})

    })

  }



  componentWillReceiveProps(nextProps){

    if( (this.props.liveChannels !== nextProps.liveChannels ) || (this.props.userPlaylists !== nextProps.userPlaylists ) ){

      let livePlaylist = { "live" : nextProps.liveChannels}
      const allPlaylists = Object.assign({}, livePlaylist , nextProps.userPlaylists)

      Object.keys(allPlaylists).map( a=>{
        this.getLiveChannelInfo(allPlaylists[a],a)
      })

    }

  }

  render(){

    const eachPlaylist = Object.keys(this.state.items).map((a,k)=>{
      return(
        <ChannelList
          toggleFooter={this.toggleFooter}
          items={this.state.items[a]}
          key = {k}
          name= {a}/>
      )
    })

    // for each playlist in all playlists, were gonna call getLiveChannelInfo
      // but it has to be called with an array, not an object

    return(
      <div onClick={this.toggleFooter}>

        {eachPlaylist}

      </div>
    )
  }


}


export default connect(
    ({auth,playlists})=>({
      liveChannels : playlists.liveChannels,
      userPlaylists : playlists.userPlaylists
    })
)(MultiplePlaylists)
