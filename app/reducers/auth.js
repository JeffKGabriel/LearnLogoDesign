import * as authHelper from '../helpers/fireAuth'
import {ref, firebaseAuth} from '../config/constants'

import * as playlistReducer from '../reducers/playlists'


const initialState = {
  authenticated : false,
  authenticating : false,
  email : null,
  username : null,
  uid : null,
}


const AUTHENTICATING = "AUTHENTICATING"
const AUTHENICATION_SUCCESS = "AUTHENICATION_SUCCESS"
const LOGOUT = "LOGOUT"


export function logout(){
  return{
    type : LOGOUT
  }
}

export function authenticating(){
  return{
    type : AUTHENTICATING
  }
}

export function authenticationSuccess(result,email,uid){
  return{
    type : AUTHENICATION_SUCCESS,
    result,
    email,
    uid,
  }
}

export function loginUser(email,pass){
  return (dispatch, getState) => {
    authHelper.fireAuth(email,pass)
      .then( (user)=>{
        console.log("logged in")
        dispatch( authenticationSuccess(true,user.email,user.uid) )
        dispatch( playlistReducer.expandedFooter(true) )
      })
  }
}

export function logoutUser(){
  return (dispatch, getState) => {
    authHelper.fireAuthLogout()
      .then( ()=>{
        console.log("loggedout")
        dispatch( logout() )
        dispatch( playlistReducer.updateUserPlaylists(null) )
      })
  }
}

export function getUser(){
    return (dispatch, getState) => {

      firebaseAuth().onAuthStateChanged(user=>{
        if(user){
          dispatch( authenticationSuccess(true,user.email,user.uid) )
        }else{
          console.log("no user session");
        }
      })

    }
}


export function addUserToFireBase(email,pass){

  return (dispatch, getState) => {

    authHelper.newFireAuth(email,pass)
    .catch((error)=>{
      console.log("new user error",error);
    })
    .then((user)=>{

      dispatch( authenticationSuccess(true,user.email,user.uid) )

    })

  }

}



export default function playlists(state = initialState, action) {

  switch (action.type) {

    case AUTHENTICATING :
      return {
        ...state,
        authenticating : true,
      }
    case AUTHENICATION_SUCCESS :
      return {
        ...state,
        authenticating : false,
        authenticated : action.result,
        email : action.email,
        uid : action.uid
      }
    case LOGOUT :
      return{
        ...state,
        authenticated : false,
        email : null,
        username : null,
        uid : null
      }
    default :
      return state
  }

}
