import React, { useState } from 'react'
import Country from './Country'

const ShowName = ({ country }) => {

  const [showData, setData] = useState([])

    const handleBtn = (country) => {
      setData(country)
     
    }
    
    const showInfo = showData.length !== 0 ? <Country country={showData} /> : ''
    return (
      <div>
        <li>{country.name}<button onClick={()=>handleBtn(country)}>show</button></li>
        {showInfo}
      </div>
    )
  }

export default ShowName