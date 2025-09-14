import React, { Component } from 'react'
import "./style.css"

class counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
         
      }
    }
    incrementCount(){
        this.setState({
            count:this.state.count + 1
        },()=>{console.log("callback value",this.state.count)} )
    
    }
    

  render() {
    return (
        <div className="counterMain">
            <div className="CounterText">COUNT: {this.state.count}</div>
            <button onClick={
             ()=>this.incrementCount()
            }>incrementCount</button>
        
        </div>

    )
  }
}

export default counter