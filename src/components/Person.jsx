import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>hello , im {person.name}, im {person.age}, i know{person.skill}</h2>
    </div>
  )
}

export default Person