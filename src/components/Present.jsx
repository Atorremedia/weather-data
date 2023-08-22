import React, {useEffect, useState} from 'react'
import styles from '../css/present.module.css'
import {WiDaySunny, WiDirectionUp} from 'react-icons/wi'


function Present({data}) {
    
    const [temp, setTemp] = useState()

    useEffect(()=>{

        console.log(data)
        setTemp(data['current_weather']['temperature'])

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
                        {temp}<span className={styles.tempUnits}> ºC</span>
                    </div>
                    <div className={styles.windContainer} >
                        <div className={styles.windSpeed}>
                            {data['current_weather']['windspeed']}<span className={styles.windUnits}> m/s</span>
                        </div>
                        <div className={styles.windArrowContainer} >
                            <WiDirectionUp className={`${styles.windArrow} `}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Present
// data['current_weather']['winddirection'] + 