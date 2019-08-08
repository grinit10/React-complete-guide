import React, {PureComponent} from 'react';
import Person from './Person/Person';


class Persons extends PureComponent{
	constructor(props){
		super(props);
		console.log("[persons.js] inside constructor");
		this.lastPerson = React.createRef();
	}
	componentWillMount(){
		console.log("[persons.js] inside componentWillMount");
	}
	
	componentDidMount(){
		console.log("[persons.js] inside componentDidMount");
		this.lastPerson.current.focus();
	}
	
	//Sync props to state/existing state
	componentWillReceiveProps(nextProps){
		console.log("[persons.js] inside componentWillReceiveProps", nextProps);
	}

	//If returns false it will stop updating process.
	// shouldComponentUpdate(nextProps, nextState){
	// 	console.log("[persons.js] inside shouldComponentUpdate", nextProps, nextState);
	// 	return nextProps.Persons === this.props.Persons ;
	// }

	// componentWillUpdate(nextProps, nextState){
	// 	console.log("[persons.js] inside componentWillUpdate", nextProps, nextState);
	// }

	// componentDidUpdate(){
	// 	console.log("[persons.js] inside componentDidUpdate");
	// }
	render(){
		console.log("[persons.js] inside render");
		return (
			this.props.persons.map((person, index)=> {
				return <Person 
				  click={() => this.props.clicked(index)}
				  name={person.name} 
				  age={person.age}
				  key={person.id}
				  ref={this.lastPerson}
				  changed={(event) => this.props.changed(event, person.id)}
				/>
			  })
		);
	}
}
	

export default Persons;