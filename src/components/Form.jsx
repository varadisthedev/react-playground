import React, { Component } from 'react'
import styles from "./formstyle.module.css"
const { formContainer, label, input, button,forms } = styles; // desturctuting to make code easier

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:' ',
         comments:' ',
         topic:'react'
      }
    }
    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleCommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault() // make sure form doesnt refresh
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={forms}>
        <div >
            <label>username: </label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
        </div>

        <div>
            <label>
                comments: 
            </label>
            <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>

        <div>
            <label>topic: </label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value="react">react</option>
                <option value="angular">angular</option>
                <option value="vue">vue</option>
            </select>
        </div>

        <button>submit</button>
      </form>
    )
  }
}

export default Form