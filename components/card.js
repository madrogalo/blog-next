import React from 'react'
import styles from '../styles/Card.module.css'
import { useRouter } from 'next/router'

import Image from 'next/image'
const Card = ({
  pageId,
  title,
  urlImg
}) => {

  const router = useRouter()
  const { pathname } = router

  const goToPageById = () => {
    router.push(`${pathname}/${pageId}`)
  }
  
  return (
    <div className={styles.card} onClick={goToPageById}>
      <Image 
        src={urlImg}
        width={333} 
        height={194} 
        alt={`card-img${pageId}`}/>
      <div className={styles.card_text}>
        {title}
      </div>
    </div>
  )
}

export default Card