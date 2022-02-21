import React from 'react'
import "./Person.css"
const person = (props)=>{
    return (
        <div className='Person'>
           <p onClick={props.click}>I'm {props.name} and I am { props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" name="" onChange={props.changed} value={props.name} id="" />
        </div>
    )
}
export default person;