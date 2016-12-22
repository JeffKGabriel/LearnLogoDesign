var React = require('react');
var ReactDOM = require('react-dom');

var Hello = (props) => {
	let name = "bob";
	return(
		<div> 
			Hi {name} 
			<Place country="Stralia" />
		</div>
	)	
}

var Place = (props) => {
	return <div>{props.country}</div> 
}


ReactDOM.render(<Hello />, document.getElementById('app')); 
