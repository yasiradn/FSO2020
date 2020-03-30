import React from 'react'
const Person = ({ person, onClickDelete }) => { 
  return (
  <li>{person.name} {person.number}<button onClick={onClickDelete}> Delete </button></li>
  )
}

export default Person