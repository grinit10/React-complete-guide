import React from 'react';
import './cockpit.css';
import Aux from '../../hoc/auxs';

const Cockpit = (props) => {

	let classess = [];
	let btnColor = "btn-green";

    if(props.persons.length <= 2){
      classess.push("red");
    }
    if(props.persons.length <= 1){
      classess.push("bold");
	}

	if(props.showPerson){
		btnColor = "btn-red";
	}
	


	return (
	<Aux>
	 <h1>{props.appTitle}</h1>
     <p className={classess.join(' ')}>It is really working!</p>
	 <button className={btnColor} onClick={props.clicked}>Switch Name</button>
	 </Aux>
	);
}

export default Cockpit;