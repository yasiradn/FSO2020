import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './component/Country'
import ShowName from './component/ShowName'

const App = () => {

const [result, setResult] = useState([])
const [value, setValue] = useState('')
const [getName, setName] = useState([])
const [info, setInfo] = useState('')

const url = `https://restcountries.eu/rest/v2/name/${value}`



  useEffect(()=> {
    axios.get(url).then(res => {
        const getDataSize = res.data.length

        if(getDataSize === 1){
          setInfo('')
          setResult(res.data)
        }else if(getDataSize < 10 ){
         setName(res.data)
         setResult('')
         setInfo('')
        }else {
          setResult('')
          setInfo('Too many matches, specify another filter')
        }
    }).catch(err => {
        console.log(err)
    })
  },[value, url])

  const HandleChange = (e) => {
    setValue(e.target.value)
    
  }

const showInfo = result.length === 0 ? getName.map((res, i) => <ShowName key={i} country={res} />):result.map((res, i) => <Country key={i} country={res} />)

  return (
    <div>
      <p>find countrie</p>
      <input onChange={HandleChange}/>
      <p>{info}</p>
      {showInfo}
    </div>
  )
}

export default App;
