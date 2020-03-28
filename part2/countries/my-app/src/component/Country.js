import React from 'react'

const Country = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <br/>
            <p>capital {country.capital}</p>
            <p>population{country.population}</p>
            <br/>
            <h3>language</h3>
            {country.languages.map((res)=><li>{res.name}</li>)}
            <br/>
            <img src={country.flag} alt="image_flag" height="70" width="100"/>
        </div>
    )
  }

export default Country