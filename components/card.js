import React from 'react'
import styles from '../styles/Card.module.css'

import Image from 'next/image'
const Card = () => {
  return (
    <div className={styles.card}>
      <Image src='/card-img.svg' width={333} height={194} alt='card-img'/>
      <div className={styles.card_text}>Granny gives everyone the finger, and other tips from OFFF Barcelona</div>
    </div>
  )
}

export default Card