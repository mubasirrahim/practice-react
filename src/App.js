import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons:[
      {id:"asdf1" ,name:"Mubasir",age:25},
      {id:"asdf2" ,name:"Amin",age:22},
      {id:"asdf3" ,name:"Ali", age: 21}
    ],
    showperson : false

  }
  // nameChangeHandler=(pName)=>{
  //   // console.log("was clicked")
  //   // this.state.persons[0].name="mubasir" /wrong way of changing state
  //   this.setState(
  //   {  persons:[
  //       { name:pName,age:25},
  //       {name:"M Amin",age:18},
  //       { name:"M Ali", age: 16}
  //     ]}
  //   )
  //   }
 nameChangedHandler(event,id){
   const personIndex= this.state.persons.findIndex(p=>{
     return p.id=id;
   });
   const person ={...this.state.persons[personIndex]};
   person.name=event.target.value;
   const persons=[...this.state.persons];
   persons[personIndex]=person;
   this.setState({persons:persons})
 }

    togglePersonsHandler=()=>{
     const doesshow=this.state.showperson;
      this.setState({showperson: !doesshow })
    }

    deleteNameHandler=(personIndex)=>{
    //  const persons=this.state.persons.slice();
     const persons=[...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons})
    }

  render() {
    let persons= null;
    if (this.state.showperson){
     persons=( <div>
       {this.state.persons.map((person,index)=>{
          return <Person 
          name={person.name}
          age={person.age}
          click={()=>this.deleteNameHandler(index)}
          key={person.id}
          changed={(event)=>this.nameChangedHandler(event,person.id)}/>
          

        })}
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
