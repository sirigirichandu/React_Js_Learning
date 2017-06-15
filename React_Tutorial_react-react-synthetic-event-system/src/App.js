import React, { Component } from 'react';

//#9. react-react-synthetic-event-system

class App extends Component{
	constructor(){
		super();
		this.state = {
			currentEvent : '<---->'
		};
		this.update = this.update.bind(this);
	}

	update(e){
		this.setState({currentEvent : e.type});
	}

	render(){
		return(
			<div>
				<textarea
					onKeyPress={this.update}
					onCopy={this.update}
					onCut={this.update}
					onPaste={this.update}
					onFocus={this.update}
					onBlur={this.update}
					onTouchStart={this.update}
					onTouchMove={this.update}
					onTouchEnd={this.update}
					rows="30"
					cols="10" />
				<h4>{this.state.currentEvent}</h4>
			</div>
		)
	}
}

export default App;
