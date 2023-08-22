import React from 'react'
import TempHumidity from './TempHumidity'
import styles from '../css/charts.module.css'
import Rainfall from './Rainfall'

function Charts({data}) {
  return (
    <section className={`${styles.chartsContainer}`}>
      <div className={styles.column}>
        <h3  className={styles.columnTitle}>
          Last 8 hours
        </h3>
        <TempHumidity />
        <Rainfall />
      </div>
      <div className={styles.column}>
        <h3  className={styles.columnTitle}>
          Last 8 days
        </h3>
        <TempHumidity data={data}/>
        <Rainfall data={data}/>
      </div>
    </section>
  )
}

export default Charts