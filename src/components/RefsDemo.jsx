import React, { Component } from 'react'

 class RefsDemo extends Component {
    constructor(props) {
      super(props)
         this.inputRef=React.createRef()
      this.state = {
        
      }
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }


    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.clickHandler}>Submit</button>
      </>
    )
  }
}

export default RefsDemo