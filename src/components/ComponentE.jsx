import React, { Component } from 'react'
import { UserConsumer } from './userContext'

 class ComponentE extends Component {
  render() {
    return (
        <>
          <h3>component E here!</h3>
          <UserConsumer>
            {
              (username)=>{
                return <h2>hello {username}</h2>
              }
            }
          </UserConsumer>
        </>
        
    )
  }
}

export default ComponentE