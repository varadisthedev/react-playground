import React, { Component } from 'react'

export class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin:true
      }
    }
  render() {
    // if (this.state.isLoggedin){
    //         return(
    //             <div>welcome varad, you are logged in</div>
    //         )
    // }
    // // you cannot add if else inside jsx.
    // else{
    //     return(
    //         <div>welcome guest!</div>
    //     )
    // }

    // let message;
    // if(this.state.isLoggedin){
    //     message=<div>welcome you are logged in</div>
    // }
    // else{
    //     message=<div>you are not logged in!</div>
    // }

    // return <div>{message}</div>

    // return(
    //     this.state.isLoggedin?
    //     <div>you are logged in </div>:
    //     <div>you are not logged in!</div>
    // )

    // using short circuit, either render something or ntg
    return this.state.isLoggedin && <div>welcome from short circuit</div>
  }
}

export default UserGreetings