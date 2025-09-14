import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello "
      }

      this.changeMessage=this.changeMessage.bind(this)
    }
    changeMessage(){
        this.setState({
            message:"goodbye"
        })
        //console.log(this) o/p : undefined (typical js )
    }
    // clickHandler=()=>{
    //     this.setState({
    //         message:"goodbye"
    //     })
    // } also works
  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={this.changeMessage.bind(this)}>
            click 
        </button>

        <button onClick={()=>this.changeMessage()}>
            click 
        </button> 
        {/* this approach also works. doesnt require bind */}
      
        <button onClick={this.changeMessage}>
            click 
        </button>
      
      </div>
    )
  }
}

export default EventBind