import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'varad'
      }
      console.log("LifeCycleB constructor")
    }


    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifeCycleB componentdidmount")
    }

  render() {
    console.log(this.state)
    return (
      <div>
        <div>lifecycle B render</div>
      </div>
    )
  }
}

export default LifeCycleB