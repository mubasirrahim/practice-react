import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons:[
      { name:"Mubasir",age:25},
      {name:"Amin",age:22},
      { name:"Ali", age: 21}
    ],
    showperson : false

  }
  nameChangeHandler=(pName)=>{
    // console.log("was clicked")
    // this.state.persons[0].name="mubasir" /wrong way of changing state
    this.setState(
    {  persons:[
        { name:pName,age:25},
        {name:"M Amin",age:18},
        { name:"M Ali", age: 16}
      ]}
    )
    }
    nameChangedHandler=(event)=>{
      this.setState(
        {  persons:[
            { name:"Mubasir Rahim",age:25},
            {name:event.target.value,age:18},
            { name:"M Ali", age: 16}
          ]}
        )

    }

    togglePersonsHandler=()=>{
     const doesshow=this.state.showperson;
      this.setState({showperson: !doesshow })
    }

  render() {
    let persons= null;
    if (this.state.showperson){
     persons=( <div>
           <Person click={this.nameChangeHandler.bind(this,"Mubasir!")} 
        name={this.state.persons[0].name}age ={this.state.persons[0].age}/>
        <Person changed={this.nameChangedHandler} name={this.state.persons[1].name}
         age ={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} 
        age ={this.state.persons[2].age}>My Hobbies: Racing</Person>
         </div>
     );

    }

    return (
      <div className="App">
        <h1>Hi I am react app component</h1>
        <p>This is really working</p>
        <button onClick={this.togglePersonsHandler}>Switch Name</button>
       
         {persons}
      
      </div>
    );
  }
}

export default App;
