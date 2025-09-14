import React from 'react';

// function Greet(){
//     return <h1>Hello varad</h1>
// }

//re-writing it using a arrow function 

//name export is used here
const Greet =(props)=>{
    //console.log(props); 
    //props.name="vishwas" this wont work because props are immutable
    return <h1>Hello {props.name}! your grade is: {props.grade}</h1>
}

//usign es6 destructuring 
// const Greet =({name,heroName})=>{
//     //props.name="vishwas" this wont work because props are immutable
//     return <h1>Hello {props.name}! your grade is: {props.grade}</h1>
// }

//another way
// const Greet =props=>{
//     //console.log(props); 
//     const {name,heroName}=props;
//     return <h1>Hello {name}! your grade is: {grade}</h1>
// }
export default Greet
