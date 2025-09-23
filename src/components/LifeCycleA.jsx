import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'varad'
      }
      console.log("LifecycleA constructor")
    }


    static getDerivedStateFromProps(props,state){
        console.log("lifecycleA getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifeCycleA componentdidmount")
    }

  render() {
    console.log(this.state)
    return (
      <div>
        <div>lifecycle A render</div>
        <LifeCycleB/>
      </div>
    )
  }
}
export default LifeCycleA