var React = require('react');

import Header from './Header.js'
import Footer from './Footer.js'

//import CSSTransitionGroup from 'react-transition-group'
var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup') // ES5 with npm


require('../styles/index.css');

const Main = (props) =>{

    return(
      <div id="OutsideWrapper">
        <div id="InsideWrapper">
          <Header activeTab={props.location.pathname} />




            {React.cloneElement(props.children, {key:props.location.pathname})}



            <Footer />
        </div>
      </div>
    )
}

export default Main
