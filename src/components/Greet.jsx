import React from 'react'

// function Greet(){
//     return <h1>Hello varad</h1>
// }

//re-writing it using a arrow function 

//name export is used here
export const Greet =(props)=>{
    console.log(props);
return <h1>Hello {props.name}! your grade is: {props.grade}</h1>
}
export default Greet
