import React, { Component } from 'react';

// #8. react-custom-proptype-validation

class App extends Component{
	render(){
		return(
			<Title text="this is a props text"/>
		)
	}
}

const Title = (props) => <h2>Title : {props.text}</h2>

Title.propTypes = {

	//text : React.PropTypes.string.isRequired //inbuilt custom validation

	//custom function for react-custom-proptype-validation
	text(props, propName, component){
		console.log(props);
		console.log(propName);
		if(!(propName in props)){
			return new Error (`missing ${propName}`)
		}
	}
}

export default App;
