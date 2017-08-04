var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = (props) =>{

  return(
    <div className="col-xs-12 header"
      onClick={props.toggleFooter}
      style={{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
      >


    </div>
  )
}

export default Header
