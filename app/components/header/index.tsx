'use client'

import styles from './style.module.scss'
import { useState } from 'react';
import Nav from "./nav/Nav"
import { AnimatePresence } from "framer-motion"


export default function Home({currentUser}:any) {

  
  const [isActive, setIsActive] = useState(false);

  return (
    <>
        <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
        <AnimatePresence mode="wait">
           {isActive && <Nav currentUser={currentUser}/>}
       </AnimatePresence>
   </>
  )

}