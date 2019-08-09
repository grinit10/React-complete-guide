import React, {PureComponent} from 'react';
import "./Person.css";
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App';


class Person extends PureComponent{
	constructor(props){
		super(props);
		console.log("[person.js] inside constructor");
		this.inputElement = React.createRef();
	}
	componentWillMount(){
		console.log("[person.js] inside componentWillMount");
	}
	
	componentDidMount(){
		console.log("[person.js] inside componentDidMount");
		if(this.props.position === 0){
			this.inputElement.current.focus();
		}
	}

	focus(){
		this.inputElement.current.focus();
	}
	render(){
		console.log("[person.js] inside render");
		return (
			<div className="Person">
			<AuthContext.Consumer>
				{auth => auth ? <p>I'm Authenticated</p> : null }
			</AuthContext.Consumer>
				<p onClick={this.props.click}>"I am {this.props.name} and I am {this.props.age} years old."</p>
				<p>{this.props.children}</p>
				<input 
					ref={this.inputElement}
					type="text" 
					onChange={this.props.changed} />
			</div>
			);
	}
}

Person.propTypes = {
	click : PropTypes.func,
	name : PropTypes.string,
	age : PropTypes.number,
	changed : PropTypes.func
}
export default Person;