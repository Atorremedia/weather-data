import React, { useEffect, useState } from 'react'
import Charts from './components/Charts'
import Header from './components/Header'
import Present from './components/Present'
import CityDisplay from './components/CityDisplay'
import Modal from './components/Modal'
import './css/app.css'
import useFetch from './assets/hooks/useFetch'

const coord = {
  Barcelona: [41.3888, 2.159],
  'Madrid': [40.4165, -3.702],
  'Paris': [48.8534, 2.3488],
  'London': [51.4893, -0.144],
  'Roma': [41.8988, 12.482],
  'Lisbon': [38.7077, -9.136],
  'Berlin': [52.5170, 13.388],
}

function App() {

  const [coordinates, setCoordinates] = useState([])
  const [data, setData] = useState()
  const [city, setCity] = useState('Barcelona')
  const [modal, setModal] = useState(false)

  useEffect(()=>{
    setCoordinates(coord[city])
  },[city])



  useState(()=>{
    setData(useFetch(city))
  },[city])

  return (
    <>
      <Header />
      <div className='weatherDisplay'>
      {modal &&
        (
            <Modal  setModal={setModal} setCity={setCity} />
        )
        }
        <Present data={data} />
        <CityDisplay city={city} coordinates={coordinates} setModal={setModal} modal={modal}/>
      </div>
        <Charts data={data} />
    </>
  )
}

export default App
