var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = (props) =>{

  return(
    <div className="col-sm-12 header">

    <Link to='/home'>
      <button className="btn btn-default">Home</button>
    </Link>

      <Link to='/waffles'>
        <button className="btn btn-default">Waffles</button>
      </Link>
    </div>
  )
}

export default Header
