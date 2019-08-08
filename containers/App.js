import React, {PureComponent} from 'react';
import './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/cockpit/cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/auxs';


class App extends PureComponent {
  constructor(props){
    super(props);
    console.log("[App.js] inside constructor.");
  }
    
  componentWillMount(){
    console.log("[App.js] inside componentWillMount")
  }

  componentDidMount(){
    console.log("[App.js] inside componentDidMount")
  }
  state = {
    persons : [
      {id:"svdsvd", name : "Arpita", age : 28},
      {id: "dvdfvf", name : "Arnab", age : 31},
      {id: "ddffdvn", name : "Debo", age : 29}
    ],
    showPerson : false,
    switchNameClicked : 0
}

  switchNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({
      persons : persons
    })  
  }

  toggleNameHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState((prevState, props) =>{
      return {
        showPerson : !doesShow,
        switchNameClicked : prevState.switchNameClicked + 1
      }
    });
    
  }

  deleteNameHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  render(){
    console.log("[Ap.js] inside render method.")
    let persons = null;
    if (this.state.showPerson){
      persons = (
        <div>
         <Persons 
          persons={this.state.persons}
          clicked={this.deleteNameHandler}
          changed={this.switchNameHandler}/>
        </div>
        );
    }
  
  return (
    <Aux>
     <Cockpit 
     appTitle={this.props.title}
     persons={this.state.persons}
     clicked={this.toggleNameHandler}
     showPerson={this.state.showPerson}/>
     {persons}
    </Aux>
  );
  }
}

export default withClass(App, "App");
