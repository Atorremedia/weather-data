import React, {useState, useEffect} from 'react'
import styles from '../css/header.module.css'

const date= new Date(Date.now())

function Header() {
  const [formatDate, setFormatDate] = useState()

  useEffect(()=>{
      setFormatDate( ' '+ date.toDateString())
  },[date])

  return (
    <div className={`${styles.headerContainer}`}>
        <h1>
          Weather data visualization,
          {formatDate}
          </h1>
    </div>
  )
}

export default Header