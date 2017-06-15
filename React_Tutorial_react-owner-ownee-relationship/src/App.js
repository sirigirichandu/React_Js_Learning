import React, { Component } from 'react';

// #6. react-owner-ownee-relationship

class App extends Component {

	componentWillMount(){
		this.state = {
			text : "This is the State Text"
		}	
	}

	update(e){
		this.setState({text : e.target.value});
	}
	
	render(){
		return(
			<div>
				<widget update={this.update.bind(this)} />				
				<p>{this.state.text}</p>
			</div>
		)
	}
}

const widget = (props) => <input type="text" onChange={props.update} />

export default App;
