import React, { Component } from 'react';

// #5. Setting state with setState

class App extends Component {
	constructor(){
		super();			
	}

	componentWillMount(){
		this.state = {
			stateText : "This is the State Text",
			stateNumber : 0
		}	
	}

	handleStateChange(e){
		this.setState({ stateText : e.target.value});
	}

	render(){
		return(
			<div>
				<input type="text" onChange={this.handleStateChange.bind(this)} />
				<h2>{this.state.stateText} - {this.state.stateNumber}</h2>
			</div>
		)
	}
}

export default App;