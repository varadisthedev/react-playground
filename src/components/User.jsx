import React, { Component } from 'react'

 class User extends Component {
  render() {
    return (
      <>
        {this.props.name(false)}
      </>
    )
  }
}

export default User