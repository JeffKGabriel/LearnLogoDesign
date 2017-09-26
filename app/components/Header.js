import React, { Component } from 'react'
import { connect } from 'react-redux'

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var kimFace = require('../imgs/users/kimFace.jpg')


class Header extends Component{

  constructor(props){
    super(props)
    this.state={userMenuHidden : true}
  }

  showUserMenu=()=>{

  }
  hideUserMenu=()=>{

  }

  render(){

  return(
    <div className="col-xs-12 header">

        <div className="searchBar">

          <div className="fa fa-search" />

          <input type="text" name="name" style={{height:34, paddingLeft:10, borderColor:'#FFF', borderWidth:0, fontSize:18,}} placeholder="Type in to search" />

        </div>

        <div className="userCircleBox">
          <div className="userCircle" style={{display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}}>
            <img src={kimFace} height="60" width="60" className="userImg" />
            <div className="fa fa-angle-down" style={{marginLeft:5, fontSize:30,}}>
            </div>
          </div>

        </div>


    </div>
  )

  }
}

export default connect()(Header)




/*
<Link to='/home'>
  <button className="btn btn-default">Home</button>
</Link>
*/
