import React, { Component } from 'react'

class ClickCounter2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incremenetCount=()=>{
        this.setState(prevState=>{
            return {count:prevState.count +1}
        })
    }
  render() {
    const {count}=this.state
    return  <button onClick={this.incremenetCount}>clicked {count} times</button>
      
  }
}

export default ClickCounter2