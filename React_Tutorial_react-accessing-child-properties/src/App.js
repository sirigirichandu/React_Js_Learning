import React, { Component } from 'react';

//#7. react-accessing-child-properties

class App extends Component{
	render(){
		return(
			<Button>I <Hearts /> React</Button>
		)
	}
}

const Button = (props) => {
	return( <button>{props.children}</button>)
}

class Hearts extends Component{
	render(){
		return <span>&hearts;</span>
	}
}

export default App;
