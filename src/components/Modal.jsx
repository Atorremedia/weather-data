import React, { useState } from 'react'
import styles from '../css/modal.module.css'


function Modal({setModal, setCity}) {

    const [selection, setSelection] = useState('Barcelona')

    function selectCity(){
        event.preventDefault()
        setCity(selection)
        setModal(false)
    }
  return (
    <>
        <div className={styles.modalContainer}>
            <h2 className={styles.modalTitle}>
                Select City
            </h2>
            <div className={styles.modalFormContainer}>
                <form >
                    <select onChange={((e)=>setSelection(e.target.value))} defaltvalue='Barcelona'>
                        <option >Barcelona</option>
                        <option>Madrid</option>
                        <option>Paris</option>
                        <option>London</option>
                        <option>Roma</option>
                        <option>Lisbon</option>
                        <option>Berlin</option>
                    </select>
                    <button onClick={selectCity}>Accept</button>
                </form>
            </div> 
        </div>
    </>
  )
}

export default Modal


