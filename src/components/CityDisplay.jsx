import React, { useEffect, useState } from 'react'
import styles from '../css/citySelect.module.css'


function CityDisplay({coordinates, setModal, modal, city}) {



function clickHadle(){
  setModal(()=>!modal)
}


  return (
    <div className={`${styles.selectorContainer}`} >
      <div className={`${styles.presentDataColumn} ${styles.flexcolumn}`}>
        <h3 className={styles.city}>
            {city}
        </h3>
        <p className={styles.coordinates}>
            {coordinates[0]}
            <span>, </span>
            {coordinates[1]}
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={clickHadle}>Change City</button>
      </div>
    </div >
  )
}

export default CityDisplay