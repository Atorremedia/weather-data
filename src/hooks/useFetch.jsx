import { useEffect, useState } from 'react';


export function useFetch(coordinates) {

const URL = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates[0]}&longitude=${coordinates[1]}&hourly=temperature_2m,relativehumidity_2m,weathercode,pressure_msl,windspeed_10m,winddirection_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&current_weather=true&timezone=Europe%2FBerlin`
// https://api.open-meteo.com/v1/forecast?latitude=${coordinates[0]}&longitude=${coordinates[1]}&hourly=temperature_2m,relativehumidity_2m,weathercode,pressure_msl,windspeed_10m,winddirection_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&current_weather=true&timezone=Europe%2FBerlin


const [data, setData] = useState(null);
const [loading, setLoading] = useState(false)

let fetchUrl = URL

useEffect(() => {
  setLoading(true)
    fetch(fetchUrl)
    .then((response)=> response.json())
    .then((data)=> setData(data))
    .catch((error)=> console.error(error)) 
    .finally(setLoading(false))
}, []);



  return {data, loading}
}
