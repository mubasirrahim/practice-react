import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am react app component</h1>
        <p>This is really working</p>
        <Person name="Mubasir" age ="25"/>
        <Person name="Ali" age ="21"/>
        <Person name="Amin" age ="22">My Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
