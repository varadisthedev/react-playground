import React, { Component } from 'react'
import "./ClassClick.css";

 class ClassClick extends Component {
    clickHandler(){
        console.log("clicked the button")
    } 
  render() {
    return (
      <div>
        <button onClick={this.clickHandler} className="btn">
            click me 
        </button>
      </div>
    )
  }
}

export default ClassClick