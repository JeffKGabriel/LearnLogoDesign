  var React = require('react');
import { connect } from 'react-redux'
//var ReactRouter = require('react-router');
import { bindActionCreators } from 'redux'
//var Link = ReactRouter.Link;


const increaseAction = { type: 'increase', amount: 1 }
const decreaseAction = { type: 'decrease', amount: 1 }


const Home = React.createClass({

  render: function(){
    const { value, onIncreaseClick, onDecreaseClick } = this.props
    return(
      <div
        style={{
        }}>
        <div className="jumbotron text-center">
          <h3>Home:]</h3>
          <h1>{value}</h1>
          <button
            className="btn btn-default"
            onClick={onIncreaseClick}
          >
            Increase
          </button>
          <button
            className="btn btn-default"
            onClick={onDecreaseClick}
          >
            Decrease
          </button>
        </div>
      </div>
    )
  },
});

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.counter.count
  }
}

// Map Redux actions to component props

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
