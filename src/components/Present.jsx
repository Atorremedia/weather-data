import React, {useEffect, useState} from 'react'
import styles from '../css/present.module.css'
import {WiDaySunny, WiDirectionUp} from 'react-icons/wi'
import Modal from './Modal'
import useFetch from '../assets/hooks/useFetch'
import CityDisplay from './CityDisplay'


function Present({data}) {
    
    useEffect(()=>{

        console.log(data)
        // setData(useFetch(city))

    },[data])

  return (
        <div className={styles.presentDataContainer}>
            <div className={styles.presentDataColumn}>
                <div className={styles.presentDataTagSmall}>
                    <div className={styles.weatherIconContainer}>
                        <WiDaySunny />
                    </div>
                    <p className={styles.weatherName}>Sunny</p>
                </div>
                <div className={styles.presentDataTag}>
                    <div className={styles.temperature} >
                        32<span className={styles.tempUnits}> ºC</span>
                    </div>
                    <div className={styles.humidity} >
                        74<span className={styles.humUnits}> %</span>
                    </div>
                    <div className={styles.windContainer} >
                        <div className={styles.windSpeed}>
                            12<span className={styles.windUnits}> m/s</span>
                        </div>
                        <div className={styles.windArrowContainer}>
                            <WiDirectionUp className={styles.windArrow}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Present