import React from 'react'
import Person from "./Person"
function NameList() {
    // const names=['varad','raj','rohan']
  const persons=[
  {
    id: 1,
    name: 'Bruce',
    age: 30,
    skill: 'React'
  },

  {
    id: 2,
    name: 'Clark',
    age: 25,
    skill: 'Angular'
  },

  {
    id: 3,
    name: 'Diana',
    age: 28,
    skill: 'Vue'
  }
]
// key prop is id here. it could also be just name
//key prop is reserved, cannot be used by child
  const nameList=persons.map(person=>(<Person key={person.id} person={person}/>))
  return (
    <div>
      {
        nameList
      }
    </div>
  )
}

export default NameList