import React from 'react'

const Weather = ({ temp, img, wind_dir, wind_speed}) => {
    return (
      <div>
       <h2>Weather</h2>
        <p><b>temperature:</b> {temp} Celcius</p>
        <img src={img} alt="image_weather" height="50" width="50"/>
        <p><b>wind:</b> {wind_speed} mph direction {wind_dir}</p>
      </div>
    )
  }

export default Weather