import React, { useState, useEffect } from 'react'
import Person from './component/Person'
import Filter from './component/Filter'
import PersonForm from './component/PersonForm'
import axios from 'axios'

const App = () => {
  const[persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterContact, setFilterName ] = useState('')
  const url = "http://localhost:3001/persons"

  useEffect(()=>{
    axios.get(url).then(response => {
      setPersons(response.data)
    })
  },[])

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
  const handleFilter = (e) => {
    if(e.type === 'change') {
      setFilterName(e.target.value)
    } 
  }
  const hasMatch = persons.some(item => item.name.toLowerCase().trim() === filterContact.toLocaleLowerCase().trim()) ? persons.find(( {name}) => name.toLowerCase() === filterContact.toLowerCase()) : ''
  /**
   * Filtering - Unless it finds the exact match it will show all avilable numbers
   */
  const getFilteredContact = hasMatch === '' ? persons.map((person,i)=> <Person key={i} person={person}/> ):<Person person={hasMatch}/>
  return (
    <div>
      <Filter value = {filterContact} onChange={handleFilter}/>
      <h2>Phonebook</h2>
      <PersonForm
      addName = {addName}
      newName = {newName}
      newNumber ={newNumber}
      handleNameChange = {handleNameChange}
      handleNumberChange = {handleNumberChange}
      />
      <h2>Numbers</h2>
      <ul>
        {getFilteredContact}
      </ul>
    </div>
  )
}

export default App;
