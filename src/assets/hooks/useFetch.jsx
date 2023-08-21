import React from 'react'


function useFetch(coordinates) {



const URL = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates[0]}&longitude=${coordinates[1]}&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,pressure_msl,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_probability_max&current_weather=true&timezone=Europe%2FBerlin&past_days=7&forecast_days=1`



  return URL
}

export default useFetch