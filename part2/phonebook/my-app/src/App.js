import React, { useState } from 'react'
import Person from './component/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0102298029' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  
  const addName = (event) => {
    event.preventDefault()
    const hasMatch = persons.some(item => item.name === newName)
    if(!hasMatch) {
      const personObj = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObj))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
    }
  }

  const handleNameChange = (e) => {
    if(e.type === 'change') {
      setNewName(e.target.value)
    } 
  }

  const handleNumberChange = (e) => {
    if(e.type === 'change') {
      setNewNumber(e.target.value)
    } 
  }

  const getPerson = persons.map((person,i)=> <Person key={i} person={person}/> )
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value ={newName} onChange={handleNameChange} />
          <div>number: <input onChange={handleNumberChange} /></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {getPerson}
      </ul>
    </div>
  )
}

export default App;
