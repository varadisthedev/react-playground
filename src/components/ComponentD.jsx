import React, { Component } from 'react'
import ComponentE from './ComponentE'

 class ComponentD extends Component {
  render() {
    return (
      <div>
        <h3>componentD here!</h3>
        <ComponentE/>
      </div>
    )
  }
}

export default ComponentD