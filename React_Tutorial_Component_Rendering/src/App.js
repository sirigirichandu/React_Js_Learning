import React, { Component } from 'react';

// #3. Display Output in React With a Component's render method


class App extends Component{
	render(){
		return(
			<div>
				<h1>This is the Heading H1</h1>
				<div className="class">
					<p>This is a Paragraph inside Div</p>
				</div>
			</div>
		);
	}
}

export default App;
