var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = (props) =>{

  return(
    <div className="col-xs-12 header"
      style={{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        border : '1px solid #aaa'
      }}
      >
        
        <Link to='/home'>
          <button className="btn btn-default">Home</button>
        </Link>

    </div>
  )
}

export default Header
