import React from 'react'
const Person = ({ person, onClickDelete }) => { 
  console.log(person.name)
  return (
  <li>{person.name} {person.number}<button onClick={onClickDelete}> Delete </button></li>
  )
}

export default Person