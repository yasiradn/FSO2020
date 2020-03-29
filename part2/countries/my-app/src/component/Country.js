import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Weather from './Weather'
const Country = ({ country }) => {

    const [weather, setWeather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY
    const weatherURL = `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`
    useEffect(()=> {
    axios.get(weatherURL).then(res => {
        if(res.data.success === 'false'){
          //do nothing
          console.log(res.data.error.type)
        }else{
            setWeather(res.data)
        }
    }).catch(err => {
        console.log(err)
    })
  },[weatherURL])

    const temp = weather.length === 0 ? '': <Weather temp={weather.current.temperature} img={weather.current.weather_icons} wind_dir={weather.current.wind_dir} wind_speed={weather.current.wind_speed}/>
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
            {temp}
        </div>
    )
  }

export default Country