import React, { Component } from 'react';

// #4. Set properties on React Component

class App extends Component {

	static get defaultProps(){
		return {
			property : 'Sample property defined in the getDefaultProps'
		}
	};

	render(){
		return(
			<div>
				<div>{this.props.txt}</div>
				<div>{this.props.property}</div>
			</div>
		);
	}
}

App.propTypes = {
	txt : React.PropTypes.string
}

export default App;
