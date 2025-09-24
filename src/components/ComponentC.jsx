import React, { Component } from 'react'
import ComponentD from './ComponentD'

 class ComponentC extends Component {
  render() {
    return (
      <div>
        <h3>componentC here!</h3>
        <ComponentD/>
      </div>
    )
  }
}

export default ComponentC