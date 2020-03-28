import React, { Component } from 'react';
import './App.css';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'p1', name: 'Amyo', age: 25 },
      { id: 'p2', name: 'Taufiq', age: 26 },
      { id: 'p3', name: 'Mahedi', age: 26 }
    ],
    otherStat: 'Other state',
    userName: 'amyokabir',
    userNameOld: 'amyokabir',
    showPersons: false
  }

  showPersonsHandler = () => {
    this.setState(
      {
        showPersons: !this.state.showPersons
      }
    );
  }

  removePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  updatePersonHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => person.id === id);
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  render() {


    return (
      <div className="App">
        <Cockpit click={this.showPersonsHandler} />
        {
          this.state.showPersons === true ?
            <Persons
              persons={this.state.persons}
              click={this.removePersonHandler}
              change={this.updatePersonHandler} />
            : null
        }
        <UserInput userNameChange={this.changeUserNameHandler} userName={this.state.userName} />
        <UserOutput userName={this.state.userName} userNameOld={this.state.userNameOld} />
      </div>
    );
  }
}

export default App;
