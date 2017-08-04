import {ref} from '../config/constants'

import * as playlistAPI from '../api/playlists'

const initialState = {
  videoId: "cDyp1fMQhuM",
  playing: false,
  volume: 70,
  position: 0,
  videoChannelList:[
    "kwZwPJwkc34",
    "pvoYAyCv100",
    "MWZiKbWcVVQ",
  ],
  liveChannels:{},
  userPlaylists :null ,
  footerExpanded : false,
}

const NEXT_SONG_IN_PLAYLIST = "NEXT_SONG_IN_PLAYLIST"
const TOGGLE_PLAYING = "TOGGLE_PLAYING"
const ON_CHANNEL_CHANGE = "ON_CHANNEL_CHANGE"

const UPDATE_LIVE_CHANNELS = "UPDATE_LIVE_CHANNELS"

const ADDED_TRACK_TO_PLAYLIST = "ADDED_TRACK_TO_PLAYLIST"
const NEW_PLAYLIST_LISTENER = "NEW_PLAYLIST_LISTENER"
const UPDATE_USER_PLAYLISTS = "UPDATE_USER_PLAYLISTS"

const EXPANDED_FOOTER = "EXPANDED_FOOTER"

// ---------

export function expandedFooter(currentFooter){
  return{
    type: EXPANDED_FOOTER,
    currentFooter
  }
}

export function nextSongInPlaylist(videoId){
  return{
    type : NEXT_SONG_IN_PLAYLIST,
    videoId
  }
}

export function togglePlaying(){
  return{
    type: TOGGLE_PLAYING
  }
}

export function changeChannel(videoId){
  return{
    type: ON_CHANNEL_CHANGE,
    videoId
  }
}

export function updateLiveChannels(channels){
  return{
    type: UPDATE_LIVE_CHANNELS,
    channels
  }
}


export function addedTrackToPlaylist(){
  return{
    type: ADDED_TRACK_TO_PLAYLIST
  }
}

export function newPlaylistListener(){
  return{
    type: NEW_PLAYLIST_LISTENER
  }
}

export function updateUserPlaylists(playlists){
  return{
    type: UPDATE_USER_PLAYLISTS,
    playlists
  }
}


// ---------

export function getLiveChannels(){
  return (dispatch, getState) => {

    playlistAPI.getLiveChannelsAPI()
      .then( (items)=>{
        dispatch(updateLiveChannels(items))
      })

  }
}

export function addTrackToPlaylist(uid,playlist,track){

  //if uid is default, dont let
  if(uid == "Nrad7B9ER9RSNyA7JbUpXA7CSeD2"){
    console.log("login to add a track");
    // or we could give them temp id then delete after if they dont, still save in cookies 
    return
  }

  return (dispatch, getState) => {
    dispatch( addedTrackToPlaylist() )
    playlistAPI.addTrackToPlaylistAPI(uid,playlist,track)
  }

}

export function setUpListenerForPlaylists(uid){

  return (dispatch, getState) => {

    dispatch( newPlaylistListener() )

    return  ref.child(`users/${uid}/playlists`)
      .on('value', (snap)=>{
        const newPlaylists = snap.val()
        dispatch(updateUserPlaylists(newPlaylists))
      })
  }
}

// ---------

export default function playlists(state = initialState, action) {
  switch (action.type) {

    case NEXT_SONG_IN_PLAYLIST :
      return {
        ...state,
        videoId: action.videoId,
      }
    case TOGGLE_PLAYING:
      return {
        ...state,
        playing: ! state.playing,
      }
    case ON_CHANNEL_CHANGE:
      return {
        ...state,
        videoId : action.videoId,
        playing : true,
        //position : 0
      }

    case UPDATE_LIVE_CHANNELS:
      return{
        ...state,
        liveChannels : action.channels
      }

    case ADDED_TRACK_TO_PLAYLIST:
      return{
        ...state
      }
    case NEW_PLAYLIST_LISTENER:
      return{
        ...state
      }
    case UPDATE_USER_PLAYLISTS:
      return{
        ...state,
        userPlaylists : action.playlists
      }

    case EXPANDED_FOOTER:
      return{
        ...state,
        footerExpanded : !action.currentFooter
      }

    default :
      return state
  }
}
