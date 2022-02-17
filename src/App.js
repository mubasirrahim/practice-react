import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons:[
      { name:"Mubasir",age:25},
      {name:"Amin",age:22},
      { name:"Ali", age: 21}
    ]
  }
  render() {
    
    return (
      <div className="App">
        <h1>Hi I am react app component</h1>
        <p>This is really working</p>
        <Person name={this.state.persons[0].name}age ={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age ={this.state.persons[2].age}>My Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
