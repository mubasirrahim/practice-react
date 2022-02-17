import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app= ()=> {
     const [personsState,setPersonsState]=useState({
      persons:[
        { name:"Mubasir",age:25},
        {name:"Amin",age:22},
        { name:"Ali", age: 21}
      ]
    })
    const [otherState,setotherState]=useState(
      "Some other state" 
    )
    console.log(personsState,otherState)
    
const nameChangeHandler=()=>{
  // console.log("was clicked")
  // personsState[0].name="mubasir" /wrong way of changing state
  setPersonsState(
  {  persons:[
      { name:"Mubasir Rahim",age:25},
      {name:"M Amin",age:18},
      { name:"M Ali", age: 16}
    ]}
  )
  }
    
  

    return (
      <div className="App">
        <h1>Hi I am react app component</h1>
        <p>This is really working</p>
        <button onClick={nameChangeHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name}age ={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age ={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age ={personsState.persons[2].age}>My Hobbies: Racing</Person>
      </div>
    );
  
}

export default app;
