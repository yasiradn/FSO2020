import React, { useState, useEffect } from 'react'
import Person from './component/Person'
import Filter from './component/Filter'
import PersonForm from './component/PersonForm'
import contacts from './services/contacts'

const App = () => {

  const[persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterContact, setFilterName ] = useState('')

  useEffect(()=>{
    contacts.FetchAll().then(response => {
      setPersons(response)
    })
  },[persons])

  
  const addName = (event) => {
    event.preventDefault()
    const hasMatch = persons.some(item => item.name === newName) ? persons.find(({name}) => name === newName) : false
    if(!hasMatch) {
      const personObj = { name:newName, number:newNumber }
      contacts.create(personObj).then(res => {
        setPersons(persons.concat(res))
        clearInputFields()
      })

    } else {
      const result = window.confirm((`${newName} is already added to phonebook, replace the old number?`))
      if(result){
        const personObj = {
          name: hasMatch.name,
          number: newNumber}
        
        contacts.UpdateData(hasMatch.id, personObj).then(res => {
          setPersons(persons.concat(res))
          clearInputFields()
        })
      }else{
        clearInputFields()
      }
      
    }
  }

  const clearInputFields = () => {
      setNewName('')
      setNewNumber('')
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

  const handleDelete = (i, name) => {
    const result = window.confirm(`Delete ${name}`)
    if(result){
      contacts.DeleteData(i).then(response => {
        if(response === 'OK') {
          console.log('Deleted')
        }
       })
    }
  }

  const hasMatch = persons.some(item => item = item.name === filterContact) ? persons.find(( {name}) => name.toLowerCase() === filterContact.toLowerCase()) : ''
  /**
   * Filtering - Unless it finds the exact match it will show all avilable numbers
   */
  const getFilteredContact = hasMatch === '' ? persons.map((person,i)=> <Person key={i} person={person} onClickDelete={()=>handleDelete(person.id,person.name)}/> ):<Person person={hasMatch} onClickDelete={()=>handleDelete(hasMatch.id,hasMatch.name)}/>
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
