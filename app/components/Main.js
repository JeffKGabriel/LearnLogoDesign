var React = require('react');

import Header from './Header.js'
import Footer from './Footer.js'

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../styles/index.css');

const Main = (props) =>{

    return(
      <div id="OutsideWrapper">
        <div id="InsideWrapper">
          <Header activeTab={props.location.pathname} />
            <ReactCSSTransitionGroup
              transitionName = "myAppear"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              {React.cloneElement(props.children, {key:props.location.pathname})}
            </ReactCSSTransitionGroup>
            <Footer />
        </div>
      </div>
    )
}

export default Main
