import React, { Component } from 'react'

 class HoverCounter2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCount=()=>{
        this.setState(prevState=>{
            return {count:prevState.count +1}
        })
    }
  render() {
    const {count}=this.state; // destructuring count
    return (
      <h1 onMouseOver={this.incrementCount}>hover {count} times</h1>
    )
  }
}

export default HoverCounter2